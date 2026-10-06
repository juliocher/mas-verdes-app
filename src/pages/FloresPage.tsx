import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { PRODUCTS_DATA } from '../data/products.data';
import { ProductItem } from '../types/catalog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Sparkles, Check } from '../components/ui/Icons';
import { buildDirectWhatsAppLink } from '../services/whatsapp.service';
import { useCart } from '../context/CartContext';

export interface FloresPageProps {
  onNavigate?: (path: string) => void;
}

export const FloresPage: React.FC<FloresPageProps> = ({ onNavigate = () => {} }) => {
  const [selectedFlower, setSelectedFlower] = useState<ProductItem | null>(null);
  const { addToCart, openCart } = useCart();
  const flores = PRODUCTS_DATA.filter((p) => p.category === 'flores');

  return (
    <div>
      <PageHero
        label="Belleza con Alma"
        title="Flores de Altura y Comestibles"
        description="Arreglos y ramos frescos que capturan la intensa luminosidad y la pureza del aire de la sierra cusqueña."
        breadcrumbs={[
          { label: 'Nuestra Colección', href: '/coleccion' },
          { label: 'Flores Medicinales & Frescas' },
        ]}
      />

      {/* ===== INTRO NARRATIVE ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Vitalidad y Duración</span>
              <h2 className="section-title">El brillo único de las flores a 3,200 metros</h2>
              <p style={{ marginBottom: '16px' }}>
                En las alturas de Willoq, la intensa radiación solar de montaña durante el día y el frío seco de la noche estimulan a las flores a desarrollar colores más intensos, corolas más densas y tallos notablemente más resistentes.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Nuestras flores no viajan en contenedores refrigerados con químicos retardantes. Se cosechan al amanecer a pedido, conservando una vitalidad que se traduce en hasta 18 días de frescura natural en florero y pétalos 100% seguros para consumo gastronómico.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  const url = buildDirectWhatsAppLink('¡Hola Más Verdes! Quisiera solicitar cotización para pedido de flores frescas.');
                  window.open(url, '_blank');
                }}
              >
                Cotizar Arreglos Florales
              </Button>
            </div>

            <div>
              <img
                src="/img/fotos/rosas.jpeg"
                alt="Flores frescas y medicinales en Willoq"
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

      {/* ===== GALLERY GRID ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Catálogo Floral</span>
            <h2 className="section-title">Nuestras Variedades de Flores</h2>
            <p className="section-subtitle">
              Para decoración de alta gama, eventos boutique en el Valle Sagrado y alta gastronomía andina.
            </p>
          </div>

          <div className="grid-3">
            {flores.map((flower) => (
              <div
                key={flower.id}
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
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={flower.image}
                    alt={flower.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  {flower.featured && (
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
                      <Sparkles size={12} /> Destacada
                    </span>
                  )}
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '4px' }}>
                      {flower.name}
                    </h3>
                    {flower.scientificName && (
                      <span style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--gold-dark)', display: 'block', marginBottom: '12px' }}>
                        {flower.scientificName}
                      </span>
                    )}
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {flower.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {flower.benefits.map((b, i) => (
                        <Badge key={i} variant="pale">{b}</Badge>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                        S/ {flower.price?.toFixed(2) ?? '25.00'}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        {flower.unit}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedFlower(flower)}
                      >
                        Ver Ficha Floral
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          addToCart(flower, 1);
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

      {/* ===== MODAL DE DETALLE FLORAL ===== */}
      <Modal
        isOpen={!!selectedFlower}
        onClose={() => setSelectedFlower(null)}
        title={selectedFlower?.name}
        headerImage={selectedFlower?.image}
        headerImageAlt={selectedFlower?.name}
      >
        {selectedFlower && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Badge variant="gold">{selectedFlower.categoryLabel}</Badge>
              {selectedFlower.scientificName && (
                <span style={{ fontStyle: 'italic', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  {selectedFlower.scientificName}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--green-dark)', marginBottom: '10px' }}>
              {selectedFlower.name}
            </h2>

            {selectedFlower.price && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', padding: '12px 18px', backgroundColor: 'var(--cream)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                  S/ {selectedFlower.price.toFixed(2)}
                </span>
                {selectedFlower.unit && (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    por {selectedFlower.unit}
                  </span>
                )}
              </div>
            )}

            <p style={{ fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
              {selectedFlower.fullDesc}
            </p>

            {selectedFlower.effects && (
              <div style={{ backgroundColor: 'var(--green-pale)', padding: '18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
                <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.88rem', marginBottom: '4px' }}>
                  Usos y Propiedades Especiales:
                </strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  {selectedFlower.effects}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {selectedFlower.benefits.map((b, i) => (
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
                  addToCart(selectedFlower, 1);
                  openCart();
                }}
              >
                🛒 Agregar a la Canasta
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const slug = selectedFlower.slug;
                  setSelectedFlower(null);
                  onNavigate(`/producto/${slug}`);
                }}
              >
                🔍 Ver Ficha Completa
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => {
                  const url = buildDirectWhatsAppLink(`¡Hola Más Verdes! Quisiera solicitar cotización sobre las flores: ${selectedFlower.name}`);
                  window.open(url, '_blank');
                }}
              >
                Pedir por WhatsApp
              </Button>
              <Button variant="ghost" onClick={() => setSelectedFlower(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
