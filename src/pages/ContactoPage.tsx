import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { ContactForm } from '../components/forms/ContactForm';
import { MapPin, Phone, Clock, ExternalLink } from '../components/ui/Icons';
import { SOCIAL_LINKS } from '../data/navigation.data';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export interface ContactoPageProps {
  onNavigate: (path: string) => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = () => {
  return (
    <div>
      <PageHero
        label="Atención Directa"
        title="Contáctanos y Haz tu Pedido"
        description="Escríbenos para consultas de catálogo, pedidos para eventos o restaurantes, y visitas a nuestros campos en Willoq."
        breadcrumbs={[{ label: 'Contacto' }]}
      />

      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Direct Channels */}
            <div>
              <span className="section-label">Canales de Comunicación</span>
              <h2 className="section-title">Estamos para servirte</h2>
              <p style={{ marginBottom: '32px', lineHeight: 1.8 }}>
                En Más Verdes no utilizamos contestadores automáticos ni respuestas impersonales. Te atenderá directamente un miembro de nuestro equipo en Cusco para brindarte asesoría detallada sobre nuestras plantas medicinales, disponibilidad de flores de temporada y opciones de envío.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--green-pale)',
                      color: 'var(--green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--green-dark)', fontSize: '0.98rem', marginBottom: '2px' }}>
                      Campos de Cultivo & Centro
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                      Comunidad de Willoq, Urubamba, Valle Sagrado, Cusco, Perú
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--green-pale)',
                      color: 'var(--green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--green-dark)', fontSize: '0.98rem', marginBottom: '2px' }}>
                      Llamadas & WhatsApp Directo
                    </strong>
                    <a
                      href={`tel:${SOCIAL_LINKS.phone.replace(/[^\d+]/g, '')}`}
                      style={{ fontSize: '0.9rem', color: 'var(--green-mid)', fontWeight: 600 }}
                    >
                      {SOCIAL_LINKS.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--green-pale)',
                      color: 'var(--green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--green-dark)', fontSize: '0.98rem', marginBottom: '2px' }}>
                      Horario de Atención
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                      Lunes a Domingo: 12:00 p.m. – 8:00 p.m.
                    </span>
                  </div>
                </div>
              </div>

              {/* Social and Map link */}
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px' }}>
                  Redes Sociales
                </span>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline hover-lift"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--white)' }}
                >
                  <InstagramIcon size={18} />
                  <span>@mas_verdes_in_valley_urubamba</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Localización</span>
            <h2 className="section-title">Nuestra Ubicación en Cusco</h2>
            <p className="section-subtitle">
              En el corazón del Valle Sagrado de los Incas, rodeados de cumbres andinas y agua de deshielo puro.
            </p>
          </div>

          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
              height: '420px',
            }}
          >
            <iframe
              title="Ubicación de Más Verdes en Urubamba, Cusco"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.8906935987625!2d-72.1404415!3d-13.2916662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dddac7b4412bd%3A0xa542f7dfd3d4c8ef!2sM%C3%A1s%20verdes!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
