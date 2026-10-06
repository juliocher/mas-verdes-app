import React, { Suspense, lazy, useState, useEffect } from 'react';
import { ROUTES } from './routes';
import { MainLayout } from '../layouts/MainLayout';
import { CartProvider } from '../context/CartContext';
import { CartDrawer } from '../components/cart/CartDrawer';
import { CartFloatingButton } from '../components/cart/CartFloatingButton';

// ─── Lazy-loaded pages (code splitting per route) ──────────────────
const HomePage         = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })));
const NosotrosPage     = lazy(() => import('../pages/NosotrosPage').then((m) => ({ default: m.NosotrosPage })));
const ColeccionPage    = lazy(() => import('../pages/ColeccionPage').then((m) => ({ default: m.ColeccionPage })));
const HierbasPage      = lazy(() => import('../pages/HierbasPage').then((m) => ({ default: m.HierbasPage })));
const FloresPage       = lazy(() => import('../pages/FloresPage').then((m) => ({ default: m.FloresPage })));
const SalesPage        = lazy(() => import('../pages/SalesPage').then((m) => ({ default: m.SalesPage })));
const MunaPage         = lazy(() => import('../pages/MunaPage').then((m) => ({ default: m.MunaPage })));
const SaboresPage      = lazy(() => import('../pages/SaboresPage').then((m) => ({ default: m.SaboresPage })));
const BlogPage         = lazy(() => import('../pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogPostPage     = lazy(() => import('../pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const ContactoPage     = lazy(() => import('../pages/ContactoPage').then((m) => ({ default: m.ContactoPage })));
const ReclamacionesPage = lazy(() => import('../pages/ReclamacionesPage').then((m) => ({ default: m.ReclamacionesPage })));
const PoliticasPage    = lazy(() => import('../pages/PoliticasPage').then((m) => ({ default: m.PoliticasPage })));
const NotFoundPage     = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

// ─── Page loading fallback ─────────────────────────────────────────
const PageLoader: React.FC = () => (
  <div
    style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '48px',
        height: '48px',
        border: '3px solid var(--green-pale)',
        borderTop: '3px solid var(--green-mid)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// ─── Route resolver ────────────────────────────────────────────────
function resolvePage(
  path: string,
  onNavigate: (p: string) => void
): React.ReactNode {
  // Static routes
  switch (path) {
    case '/':           return <HomePage onNavigate={onNavigate} />;
    case '/nosotros':   return <NosotrosPage onNavigate={onNavigate} />;
    case '/coleccion':  return <ColeccionPage onNavigate={onNavigate} />;
    case '/hierbas':    return <HierbasPage onNavigate={onNavigate} />;
    case '/flores':     return <FloresPage onNavigate={onNavigate} />;
    case '/sales':      return <SalesPage onNavigate={onNavigate} />;
    case '/muna':       return <MunaPage onNavigate={onNavigate} />;
    case '/sabores':    return <SaboresPage onNavigate={onNavigate} />;
    case '/blog':       return <BlogPage onNavigate={onNavigate} />;
    case '/contacto':   return <ContactoPage onNavigate={onNavigate} />;
    case '/reclamaciones': return <ReclamacionesPage onNavigate={onNavigate} />;
    case '/politicas':  return <PoliticasPage onNavigate={onNavigate} />;
  }

  // Dynamic: /blog/:slug
  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    return <BlogPostPage slug={blogMatch[1]} onNavigate={onNavigate} />;
  }

  // Dynamic: /producto/:slug
  const productMatch = path.match(/^\/producto\/(.+)$/);
  if (productMatch) {
    return <ProductDetailPage slug={productMatch[1]} onNavigate={onNavigate} />;
  }

  // 404
  return <NotFoundPage onNavigate={onNavigate} />;
}

// ─── App ───────────────────────────────────────────────────────────
export const App: React.FC = () => {
  const getCleanPath = () => {
    const p = window.location.pathname.replace(/\/index\.html$/, '') || '/';
    return p === '' ? '/' : p;
  };

  const [currentPath, setCurrentPath] = useState<string>(getCleanPath);

  const handleNavigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);

    // Update document title from known routes
    const config = ROUTES[path];
    if (config) document.title = config.title;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCleanPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync title on first render / navigation
  useEffect(() => {
    const config = ROUTES[currentPath];
    if (config) document.title = config.title;
  }, [currentPath]);

  return (
    <CartProvider>
      <MainLayout currentPath={currentPath} onNavigate={handleNavigate}>
        <Suspense fallback={<PageLoader />}>
          {resolvePage(currentPath, handleNavigate)}
        </Suspense>
      </MainLayout>
      <CartDrawer />
      <CartFloatingButton />
    </CartProvider>
  );
};
