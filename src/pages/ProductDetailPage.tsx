import React from 'react';
import { PRODUCTS_DATA } from '../data/products.data';
import { ProductItem } from '../types/catalog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/sections/PageHero';
import { Check, Leaf, ArrowLeft, ShoppingCart } from '../components/ui/Icons';
import { useCart } from '../context/CartContext';

export interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

const CATEGORY_PATH: Record<string, string> = {
  hierbas: '/hierbas',
  flores: '/flores',
  sales: '/sales',
  muna: '/muna',
};

const CATEGORY_LABEL: Record<string, string> = {
  hierbas: 'Hierbas Medicinales',
  flores: 'Flores Medicinales & Frescas',
  sales: 'Sales Medicinales',
  muna: 'Variedades de Muña',
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug, onNavigate }) => {
  const { addToCart, openCart } = useCart();
  const product: ProductItem | undefined = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <Leaf size={48} color="var(--green-light)" />
        <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem' }}>Producto no encontrado.</p>
        <Button variant="primary" onClick={() => onNavigate('/coleccion')}>← Ver toda la Colección</Button>
      </div>
    );
  }

  const related = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const categoryPath = CATEGORY_PATH[product.category] || '/coleccion';
  const categoryLabel = CATEGORY_LABEL[product.category] || 'Colección';

  const handleAddToCart = () => {
    addToCart(product, 1);
    openCart();
  };

  return (
    <div>
      <PageHero
        label={product.categoryLabel}
        title={product.name}
        description={product.shortDesc}
        breadcrumbs={[
          { label: 'Nuestra Colección', href: '/coleccion' },
          { label: categoryLabel, href: categoryPath },
          { label: product.name },
        ]}
      />

      {/* ===== PRODUCT DETAIL ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '60px' }}>

            {/* Image */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg';
                  }}
                />
              </div>

              {/* Gallery thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {product.gallery.map((img, i) => (
                    <div
                      key={i}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        border: '2px solid var(--border-light)',
                      }}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg';
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {/* Tags */}
              {product.scientificName && (
                <p style={{ fontStyle: 'italic', color: 'var(--text-light)', fontSize: '0.92rem', marginBottom: '12px' }}>
                  {product.scientificName}
                </p>
              )}

              {/* Altitude & origin chips */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {product.altitude && (
                  <Badge variant="pale">
                    <Leaf size={12} color="var(--green-mid)" /> {product.altitude}
                  </Badge>
                )}
                {product.origin && (
                  <Badge variant="pale">{product.origin}</Badge>
                )}
              </div>

              {/* Price */}
              {product.price && (
                <div style={{ marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'var(--green-dark)',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    S/ {product.price.toFixed(2)}
                  </span>
                  {product.unit && (
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginLeft: '10px' }}>
                      / {product.unit}
                    </span>
                  )}
                </div>
              )}

              {/* Full description */}
              <p style={{ fontSize: '0.97rem', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '24px' }}>
                {product.fullDesc}
              </p>

              {/* Benefits */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {product.benefits.map((b, i) => (
                  <Badge key={i} variant="pale">
                    <Check size={12} color="var(--green-mid)" /> {b}
                  </Badge>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  icon={<ShoppingCart size={18} />}
                >
                  Añadir al Carrito
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate(categoryPath)}
                  icon={<ArrowLeft size={16} />}
                >
                  Ver más {categoryLabel}
                </Button>
              </div>

              {/* Clinical effects */}
              {product.clinicalEffects && (
                <div
                  style={{
                    backgroundColor: 'var(--green-pale)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '18px 22px',
                    border: '1px solid var(--border-light)',
                    marginBottom: '24px',
                  }}
                >
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                    Efectos Documentados
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                    {product.clinicalEffects}
                  </p>
                </div>
              )}

              {/* How to use */}
              {product.howToUse && (
                <div
                  style={{
                    backgroundColor: 'var(--beige)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '18px 22px',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                    ¿Cómo Usarlo?
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                    {product.howToUse}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {related.length > 0 && (
        <section className="section section-white" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-label">También te puede interesar</span>
              <h2 className="section-title">Más de {categoryLabel}</h2>
            </div>
            <div className="grid-3">
              {related.map((rp) => (
                <div
                  key={rp.id}
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--cream)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onClick={() => onNavigate(`/producto/${rp.slug}`)}
                >
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={rp.image}
                      alt={rp.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg';
                      }}
                    />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--green-dark)', marginBottom: '6px' }}>{rp.name}</h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-light)', lineHeight: 1.5, marginBottom: '12px' }}>{rp.shortDesc.slice(0, 70)}…</p>
                    {rp.price && (
                      <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--green-mid)' }}>
                        S/ {rp.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
