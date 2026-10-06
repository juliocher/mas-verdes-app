import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from '../ui/Icons';
import { MAIN_NAV_LINKS } from '../../data/navigation.data';

export interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onToggleMobileMenu,
  isMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--white)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--transition-normal)',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src="/img/logo_oficial.png"
            alt="Más Verdes Logo"
            style={{ width: '42px', height: '42px', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--green-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Más Verdes
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-dark)',
                fontWeight: 600,
              }}
            >
              Willoq · Cusco
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="desktop-nav"
          aria-label="Navegación principal"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {MAIN_NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href || (link.children && link.children.some((c) => c.href === currentPath));
            const isDropdown = !!link.children;

            if (link.id === 'contacto') {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className="btn btn-primary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '0.86rem',
                    backgroundColor: 'var(--green-dark)',
                    color: 'var(--white)',
                    borderRadius: 'var(--radius-xs)',
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </a>
              );
            }

            if (isDropdown) {
              return (
                <div
                  key={link.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.href);
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--green-mid)' : 'var(--text-mid)',
                      padding: '8px 0',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === link.id ? 'rotate(180deg)' : 'none' }} />
                  </a>

                  {/* Dropdown Menu */}
                  {activeDropdown === link.id && (
                    <div
                      className="fade-in"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-16px',
                        backgroundColor: 'var(--white)',
                        borderRadius: 'var(--radius-sm)',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid var(--border-light)',
                        minWidth: '220px',
                        padding: '8px 0',
                        zIndex: 100,
                      }}
                    >
                      {link.children!.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(child.href);
                            setActiveDropdown(null);
                          }}
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            fontSize: '0.86rem',
                            color: currentPath === child.href ? 'var(--green-dark)' : 'var(--text-mid)',
                            fontWeight: currentPath === child.href ? 700 : 500,
                            backgroundColor: currentPath === child.href ? 'var(--green-pale)' : 'transparent',
                            transition: 'var(--transition-fast)',
                          }}
                          onMouseEnter={(e) => {
                            if (currentPath !== child.href) {
                              e.currentTarget.style.backgroundColor = 'var(--green-pale)';
                              e.currentTarget.style.color = 'var(--green-dark)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentPath !== child.href) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--text-mid)';
                            }
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.href);
                }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--green-dark)' : 'var(--text-mid)',
                  borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                  padding: '8px 0',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--green-dark)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-mid)';
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Mobile Button */}
        <button
          className="mobile-toggle"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={onToggleMobileMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            backgroundColor: 'var(--green-pale)',
            color: 'var(--green-dark)',
            borderRadius: 'var(--radius-xs)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
