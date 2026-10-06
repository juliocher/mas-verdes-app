import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { MobileMenu } from '../components/layout/MobileMenu';
import { Footer } from '../components/layout/Footer';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export interface MainLayoutProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  currentPath,
  onNavigate,
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgress />

      <Navbar
        currentPath={currentPath}
        onNavigate={onNavigate}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer onNavigate={onNavigate} />

      <WhatsAppButton />
    </div>
  );
};
