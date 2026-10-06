import React from 'react';
import { MapPin, Phone, Heart } from '../ui/Icons';
import {
  FOOTER_COLLECTION_LINKS,
  FOOTER_STAR_VARIETIES,
  SOCIAL_LINKS,
} from '../../data/navigation.data';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--green-dark)',
        color: 'var(--white)',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(197, 168, 128, 0.25)',
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src="/img/logo_oficial.png"
                alt="Más Verdes Logo"
                style={{ width: '44px', height: '44px', objectFit: 'contain' }}
              />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    display: 'block',
                  }}
                >
                  Más Verdes
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>
                  Willoq · Cusco
                </span>
              </div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '24px' }}>
              Emprendimiento sostenible y agroecológico de la comunidad andina de Willoq, Urubamba. Hierbas medicinales, flores frescas y sales ancestrales cosechadas a mano con respeto a la Pachamama.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(197, 168, 128, 0.15)', borderRadius: 'var(--radius-full)', border: '1px solid var(--gold)' }}>
              <Heart size={14} color="var(--gold)" fill="var(--gold)" />
              <span style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600 }}>
                Comercio justo que apoya a 80+ familias
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
              Colección Botánica
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FOOTER_COLLECTION_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.href);
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.82)',
                      fontSize: '0.9rem',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/sabores"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/sabores');
                  }}
                  style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.9rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)')}
                >
                  Sabores de la Tierra (Recetario)
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/blog');
                  }}
                  style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.9rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)')}
                >
                  Blog de Bienestar Andino
                </a>
              </li>
            </ul>
          </div>

          {/* Star Varieties */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
              Variedades Estrella
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FOOTER_STAR_VARIETIES.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.82)',
                      fontSize: '0.9rem',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
              Ubicación & Contacto
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <a
                  href={SOCIAL_LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', lineHeight: '1.6' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                >
                  Comunidad de Willoq, Urubamba, Valle Sagrado, Cusco, Perú
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${SOCIAL_LINKS.phone.replace(/[^\d+]/g, '')}`}
                  style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                >
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '24px' }}>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--white)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <InstagramIcon size={18} />
                <span>@mas_verdes_in_valley_urubamba</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'rgba(255, 255, 255, 0.65)',
          }}
        >
          <div>
            <p style={{ margin: '0 0 6px 0' }}>
              © {new Date().getFullYear()} Más Verdes. Todos los derechos reservados. Cultivado con orgullo andino en Willoq, Cusco.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/reclamaciones"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/reclamaciones');
                }}
                style={{ color: 'var(--gold)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>📖</span> Libro de Reclamaciones Virtual
              </a>
              <span>•</span>
              <a
                href="/politicas"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/politicas');
                }}
                style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'underline' }}
              >
                Políticas, Envíos y Privacidad
              </a>
            </div>
          </div>
          <p style={{ margin: 0 }}>
            Alianza comunitaria Willoq · Valle Sagrado de los Incas
          </p>
        </div>
      </div>
    </footer>
  );
};
