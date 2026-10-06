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

export interface MunaPageProps {
  onNavigate?: (path: string) => void;
}

export const MunaPage: React.FC<MunaPageProps> = () => {
  const [selectedMuna, setSelectedMuna] = useState<ProductItem | null>(null);
  const { addToCart, openCart } = useCart();
  const munaItems = PRODUCTS_DATA.filter((p) => p.slug.includes('muna'));

  return (
    <div>
      <PageHero
        label="La Planta Sagrada de los Incas"
        title="Variedades de Muña Andina"
        description="Minthostachys mollis — el tesoro aromático andino que combate el mal de altura, activa la digestión y lleva siglos sanando a las comunidades del Cusco."
        breadcrumbs={[
          { label: 'Nuestra Colección', href: '/coleccion' },
          { label: 'Variedades de Muña' },
        ]}
      />

      {/* ===== ANCESTRAL STORY ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Historia Ancestral</span>
              <h2 className="section-title">La Muña: Tesoro Medicinal del Ande</h2>
              <p style={{ marginBottom: '16px' }}>
                La muña (<em>Minthostachys mollis</em>) es una planta aromática endémica de los Andes sudamericanos, venerada desde tiempos preincaicos. Los incas la empleaban para aliviar el "soroche", fortalecer los huesos y conservar granos en colcas gracias a sus aceites bactericidas naturales.
              </p>
              <p style={{ marginBottom: '24px' }}>
                En Willoq, a más de 3,200 msnm, la muña crece en su hábitat natural óptimo, acumulando una concentración de aceites esenciales que no puede replicarse en altitudes menores. Cuidamos tres variedades biológicamente distintas y ofrecemos una presentación en polvo micronizada para batidos contemporáneos.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  const url = buildDirectWhatsAppLink('¡Hola Más Verdes! Deseo solicitar información sobre sus variedades de Muña andina.');
                  window.open(url, '_blank');
                }}
              >
                Solicitar Muña por WhatsApp
              </Button>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '36px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '5px solid var(--gold)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.12rem',
                    lineHeight: 1.8,
                    color: 'var(--green-dark)',
                    marginBottom: '16px',
                  }}
                >
                  "Tomar muña en las mañanas es despertar el calor de la montaña en el pecho. No hay dolor de estómago ni aire frío que resista su bendición."
                </blockquote>
                <span style={{ fontSize: '0.84rem', color: 'var(--gold-dark)', fontWeight: 700 }}>
                  — Sabiduría transmitida en la comunidad de Willoq
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4 MUNA VARIETIES GRID ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Catálogo Exclusivo</span>
            <h2 className="section-title">Nuestras 4 Variedades de Muña</h2>
            <p className="section-subtitle">
              Cosechadas a mano y secadas en sombra para retener el 100% de sus aceites esenciales volátiles.
            </p>
          </div>

          <div className="grid-2">
            {munaItems.map((item) => (
              <div
                key={item.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  padding: '36px 32px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--green-dark)' }}>{item.name}</h3>
                    {item.featured && <Badge variant="gold"><Sparkles size={12} /> Destacada</Badge>}
                  </div>

                  {item.scientificName && (
                    <span style={{ fontStyle: 'italic', fontSize: '0.86rem', color: 'var(--gold-dark)', display: 'block', marginBottom: '16px' }}>
                      {item.scientificName}
                    </span>
                  )}

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
                    {item.fullDesc}
                  </p>

                  <div style={{ backgroundColor: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)', marginBottom: '24px' }}>
                    <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.84rem', marginBottom: '4px' }}>
                      Propiedad Clave:
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-mid)' }}>
                      {item.clinicalEffects || item.effects}
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {item.benefits.map((b, i) => (
                      <Badge key={i} variant="outline">{b}</Badge>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                      S/ {item.price?.toFixed(2) ?? '20.00'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                      {item.unit}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setSelectedMuna(item)}
                    >
                      Ver Ficha Completa
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        addToCart(item, 1);
                        openCart();
                      }}
                      title="Agregar a la Canasta"
                    >
                      🛒 Añadir
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      <Modal
        isOpen={!!selectedMuna}
        onClose={() => setSelectedMuna(null)}
        title={selectedMuna?.name}
        headerImage={selectedMuna?.image}
        headerImageAlt={selectedMuna?.name}
      >
        {selectedMuna && (
          <div>
            <Badge variant="gold">Variedad de Muña</Badge>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--green-dark)', margin: '12px 0 6px' }}>
              {selectedMuna.name}
            </h2>
            {selectedMuna.scientificName && (
              <p style={{ fontStyle: 'italic', color: 'var(--gold-dark)', marginBottom: '12px' }}>
                {selectedMuna.scientificName}
              </p>
            )}

            {selectedMuna.price && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', padding: '12px 18px', backgroundColor: 'var(--cream)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                  S/ {selectedMuna.price.toFixed(2)}
                </span>
                {selectedMuna.unit && (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    por {selectedMuna.unit}
                  </span>
                )}
              </div>
            )}

            <p style={{ fontSize: '0.96rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
              {selectedMuna.fullDesc}
            </p>

            <div style={{ backgroundColor: 'var(--green-pale)', padding: '18px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.88rem', marginBottom: '4px' }}>
                Acción Terapéutica:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                {selectedMuna.clinicalEffects || selectedMuna.effects}
              </p>
            </div>

            {selectedMuna.howToUse && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-dark)', marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Recomendación de Consumo
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {selectedMuna.howToUse}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {selectedMuna.benefits.map((b, i) => (
                <Badge key={i} variant="dark">
                  <Check size={12} color="var(--gold)" />
                  {b}
                </Badge>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(selectedMuna, 1);
                  openCart();
                }}
              >
                🛒 Agregar a la Canasta
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => {
                  const url = buildDirectWhatsAppLink(`¡Hola Más Verdes! Quisiera pedir información sobre: ${selectedMuna.name}`);
                  window.open(url, '_blank');
                }}
              >
                Pedir directo por WhatsApp
              </Button>
              <Button variant="outline" onClick={() => setSelectedMuna(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
