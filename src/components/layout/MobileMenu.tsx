import React, { useState } from 'react';
import { ChevronDown, MessageCircle, X } from '../ui/Icons';
import { MAIN_NAV_LINKS } from '../../data/navigation.data';
import { buildDirectWhatsAppLink } from '../../services/whatsapp.service';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
  onNavigate,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const whatsappUrl = buildDirectWhatsAppLink();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú móvil"
      className="fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(20, 35, 24, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1999,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--white)',
          width: '100%',
          maxWidth: '340px',
          height: '100%',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg)',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/img/logo_oficial.png" alt="Más Verdes" style={{ width: '32px', height: '32px' }} />
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--green-dark)' }}>
              Más Verdes
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            style={{
              padding: '6px',
              color: 'var(--green-dark)',
              cursor: 'pointer',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Links list */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          {MAIN_NAV_LINKS.map((link) => {
            const isDropdown = !!link.children;
            const isActive = currentPath === link.href;

            if (isDropdown) {
              return (
                <div key={link.id} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 8px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--green-dark)',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={18} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>

                  {isDropdownOpen && (
                    <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(link.href);
                          onClose();
                        }}
                        style={{
                          padding: '8px 12px',
                          fontSize: '0.9rem',
                          color: currentPath === link.href ? 'var(--gold-dark)' : 'var(--green-dark)',
                          fontWeight: 600,
                          borderRadius: 'var(--radius-xs)',
                        }}
                      >
                        Ver Toda la Colección →
                      </a>
                      {link.children!.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(child.href);
                            onClose();
                          }}
                          style={{
                            padding: '8px 12px',
                            fontSize: '0.88rem',
                            color: currentPath === child.href ? 'var(--green-mid)' : 'var(--text-mid)',
                            fontWeight: currentPath === child.href ? 700 : 500,
                            borderRadius: 'var(--radius-xs)',
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
                  onClose();
                }}
                style={{
                  display: 'block',
                  padding: '12px 8px',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? 'var(--green-mid)' : 'var(--green-dark)',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Footer info in drawer */}
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#25d366',
              color: 'var(--white)',
              padding: '12px',
              borderRadius: 'var(--radius-xs)',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            <MessageCircle size={18} />
            <span>WhatsApp Directo</span>
          </a>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '12px' }}>
            Comunidad de Willoq · Urubamba, Cusco
          </p>
        </div>
      </div>
    </div>
  );
};
