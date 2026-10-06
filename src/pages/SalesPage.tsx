import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { PRODUCTS_DATA } from '../data/products.data';
import { ProductItem } from '../types/catalog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Check, Sparkles } from '../components/ui/Icons';
import { buildDirectWhatsAppLink } from '../services/whatsapp.service';
import { useCart } from '../context/CartContext';

export interface SalesPageProps {
  onNavigate?: (path: string) => void;
}

export const SalesPage: React.FC<SalesPageProps> = ({ onNavigate = () => {} }) => {
  const [selectedSalt, setSelectedSalt] = useState<ProductItem | null>(null);
  const { addToCart, openCart } = useCart();
  const sales = PRODUCTS_DATA.filter((p) => p.category === 'sales');

  return (
    <div>
      <PageHero
        label="Minerales Ancestrales"
        title="Sales Medicinales de Maras"
        description="Cristales puros de las salineras milenarias de Maras infusionados artesanalmente con hierbas y flores de Willoq."
        breadcrumbs={[
          { label: 'Nuestra Colección', href: '/coleccion' },
          { label: 'Sales Medicinales' },
        ]}
      />

      {/* ===== HISTORIA DE LAS SALINERAS DE MARAS ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Origen Ancestral</span>
              <h2 className="section-title">El agua subterránea que alimenta los Andes</h2>
              <p style={{ marginBottom: '16px' }}>
                En las laderas del Valle Sagrado, a más de 3,300 metros sobre el mar, brota un manantial subterráneo de agua hipersalina que los Incas y las culturas pre-incaicas canalizaron en más de 3,000 pozas escalonadas.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Bajo la intensa radiación solar andina, el agua se evapora pasivamente sin intervención de químicos industriales, dando origen a una flor de sal mineral rosada con más de 84 oligoelementos: magnesio, calcio, hierro, zinc y potasio.
              </p>
              <p style={{ marginBottom: '24px' }}>
                En Más Verdes fusionamos esta sal pura con cosechas botánicas de Willoq, creando sazones funcionales para tu cocina y sales terapéuticas de baño desintoxicantes.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  const url = buildDirectWhatsAppLink('¡Hola Más Verdes! Quisiera solicitar información y precios de las Sales Medicinales de Maras.');
                  window.open(url, '_blank');
                }}
              >
                Solicitar Catálogo de Sales
              </Button>
            </div>

            <div>
              <img
                src="/img/fotos/sal-rosada.jpeg"
                alt="Sales Medicinales de Maras Más Verdes"
                style={{
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  boxShadow: 'var(--shadow-lg)',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATALOGO DE SALES ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Catálogo de Variedades</span>
            <h2 className="section-title">Nuestras Sales Medicinales</h2>
            <p className="section-subtitle">
              Sabor gourmet y propiedades terapéuticas en cada grano de sal de altura.
            </p>
          </div>

          <div className="grid-3">
            {sales.map((salt) => (
              <div
                key={salt.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={salt.image}
                    alt={salt.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  {salt.featured && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'var(--gold)',
                        color: 'var(--white)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Sparkles size={12} /> Exclusiva
                    </span>
                  )}
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '8px' }}>
                      {salt.name}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {salt.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {salt.benefits.map((b, i) => (
                        <Badge key={i} variant="pale">{b}</Badge>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                        S/ {salt.price?.toFixed(2) ?? '22.00'}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        {salt.unit}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedSalt(salt)}
                      >
                        Ver Propiedades
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          addToCart(salt, 1);
                          openCart();
                        }}
                        title="Agregar a la Canasta"
                      >
                        🛒 Añadir
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL DE DETALLE ===== */}
      <Modal
        isOpen={!!selectedSalt}
        onClose={() => setSelectedSalt(null)}
        title={selectedSalt?.name}
        headerImage={selectedSalt?.image}
        headerImageAlt={selectedSalt?.name}
      >
        {selectedSalt && (
          <div>
            <Badge variant="gold">{selectedSalt.categoryLabel}</Badge>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--green-dark)', margin: '12px 0 10px' }}>
              {selectedSalt.name}
            </h2>

            {selectedSalt.price && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', padding: '12px 18px', backgroundColor: 'var(--cream)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                  S/ {selectedSalt.price.toFixed(2)}
                </span>
                {selectedSalt.unit && (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    por {selectedSalt.unit}
                  </span>
                )}
              </div>
            )}

            <p style={{ fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
              {selectedSalt.fullDesc}
            </p>

            {selectedSalt.effects && (
              <div style={{ backgroundColor: 'var(--green-pale)', padding: '18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.88rem', marginBottom: '4px' }}>
                  Aporte Terapéutico y Mineral:
                </strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  {selectedSalt.effects}
                </p>
              </div>
            )}

            {selectedSalt.howToUse && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-dark)', marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Modo de Empleo Recomendado
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {selectedSalt.howToUse}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {selectedSalt.benefits.map((b, i) => (
                <Badge key={i} variant="dark">
                  <Check size={12} color="var(--gold)" />
                  {b}
                </Badge>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(selectedSalt, 1);
                  openCart();
                }}
              >
                🛒 Agregar a la Canasta
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const slug = selectedSalt.slug;
                  setSelectedSalt(null);
                  onNavigate(`/producto/${slug}`);
                }}
              >
                🔍 Ver Ficha Completa
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => {
                  const url = buildDirectWhatsAppLink(`¡Hola Más Verdes! Quisiera ordenar el producto: ${selectedSalt.name}`);
                  window.open(url, '_blank');
                }}
              >
                Pedir por WhatsApp
              </Button>
              <Button variant="ghost" onClick={() => setSelectedSalt(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
