import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { PRODUCTS_DATA } from '../data/products.data';
import { ProductItem } from '../types/catalog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { ShieldCheck, Sparkles, Droplet, Heart, Check } from '../components/ui/Icons';
import { buildDirectWhatsAppLink } from '../services/whatsapp.service';
import { useCart } from '../context/CartContext';

export interface HierbasPageProps {
  onNavigate?: (path: string) => void;
}

export const HierbasPage: React.FC<HierbasPageProps> = ({ onNavigate = () => {} }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const { addToCart, openCart } = useCart();

  const hierbas = PRODUCTS_DATA.filter((p) => p.category === 'hierbas');
  const munaSpecials = hierbas.filter((p) => p.slug.startsWith('muna'));
  const otherHerbs = hierbas.filter((p) => !p.slug.startsWith('muna'));

  return (
    <div>
      <PageHero
        label="Botánica de Altura"
        title="Hierbas Medicinales de Cusco"
        description="Hojas y flores seleccionadas a más de 3,200 msnm que concentran la fuerza curativa y el aroma puro de los Andes."
        breadcrumbs={[
          { label: 'Nuestra Colección', href: '/coleccion' },
          { label: 'Hierbas Medicinales' },
        ]}
      />

      {/* ===== 4 BANNER HIGHLIGHTS ===== */}
      <section style={{ backgroundColor: 'var(--green-pale)', padding: '40px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--green-dark)' }}>
                <ShieldCheck size={28} />
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.92rem' }}>100% Agroecológico</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>Libre de pesticidas sintéticos</span>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--green-dark)' }}>
                <Sparkles size={28} />
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.92rem' }}>Selección Manual</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>Cosecha y secado en sombra</span>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--green-dark)' }}>
                <Droplet size={28} />
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.92rem' }}>Agua de Deshielo</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>Riego puro de glaciares andinos</span>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px', color: 'var(--green-dark)' }}>
                <Heart size={28} />
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.92rem' }}>Comercio Justo</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-mid)' }}>Sustento directo para 80+ familias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN ESTRELLA: VARIEDADES DE MUÑA ===== */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Especies Emblemáticas</span>
            <h2 className="section-title">Variedades de Muña de Willoq</h2>
            <p className="section-subtitle">
              Conocida tradicionalmente por su potentísima concentración de calcio vegetal y aceites balsámicos digestivos.
            </p>
          </div>

          <div className="grid-3">
            {munaSpecials.map((herb) => (
              <div
                key={herb.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  padding: '32px 28px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', marginBottom: '4px' }}>
                    {herb.name}
                  </h3>
                  <p style={{ fontStyle: 'italic', fontSize: '0.86rem', color: 'var(--gold-dark)', marginBottom: '16px' }}>
                    {herb.scientificName}
                  </p>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '20px' }}>
                    {herb.shortDesc}
                  </p>

                  <div style={{ backgroundColor: 'var(--green-pale)', padding: '14px', borderRadius: 'var(--radius-xs)', marginBottom: '20px' }}>
                    <strong style={{ color: 'var(--green-dark)', fontSize: '0.82rem', display: 'block', marginBottom: '4px' }}>
                      Efectos Clínicos & Tradicionales:
                    </strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-mid)' }}>
                      {herb.clinicalEffects || herb.effects}
                    </span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {herb.benefits.map((b, i) => (
                      <Badge key={i} variant="outline">{b}</Badge>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                      S/ {herb.price?.toFixed(2) ?? '18.00'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                      {herb.unit}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px' }}>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setSelectedProduct(herb)}
                    >
                      Ver Ficha Completa
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        addToCart(herb, 1);
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

      {/* ===== RESTO DEL CATÁLOGO DE HIERBAS ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Otras Hierbas del Huerto</span>
            <h2 className="section-title">Botánica Tradicional para el Bienestar</h2>
            <p className="section-subtitle">
              Cultivadas en el mismo suelo limpio y regadas con agua cristalina de manantial.
            </p>
          </div>

          <div className="grid-2">
            {otherHerbs.map((herb) => (
              <div
                key={herb.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                }}
              >
                <div style={{ height: '100%', minHeight: '220px', overflow: 'hidden' }}>
                  <img
                    src={herb.image}
                    alt={herb.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '4px' }}>
                      {herb.name}
                    </h3>
                    <p style={{ fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--gold-dark)', marginBottom: '12px' }}>
                      {herb.scientificName}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {herb.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                        S/ {herb.price?.toFixed(2) ?? '15.00'}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                        {herb.unit}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProduct(herb)}
                        style={{ padding: '4px 8px' }}
                      >
                        Detalles →
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          addToCart(herb, 1);
                          openCart();
                        }}
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

      {/* ===== MODAL DE DETALLE BOTÁNICO ===== */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name}
        headerImage={selectedProduct?.image}
        headerImageAlt={selectedProduct?.name}
      >
        {selectedProduct && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <Badge variant="gold">{selectedProduct.categoryLabel}</Badge>
              {selectedProduct.scientificName && (
                <span style={{ fontStyle: 'italic', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  {selectedProduct.scientificName}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--green-dark)', marginBottom: '10px' }}>
              {selectedProduct.name}
            </h2>

            {selectedProduct.price && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', padding: '12px 18px', backgroundColor: 'var(--cream)', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-dark)' }}>
                  S/ {selectedProduct.price.toFixed(2)}
                </span>
                {selectedProduct.unit && (
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-mid)' }}>
                    por {selectedProduct.unit}
                  </span>
                )}
              </div>
            )}

            <p style={{ fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
              {selectedProduct.fullDesc}
            </p>

            {selectedProduct.clinicalEffects && (
              <div style={{ backgroundColor: 'var(--green-pale)', padding: '20px', borderRadius: 'var(--radius-sm)', marginBottom: '24px', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.9rem', marginBottom: '6px' }}>
                  Propiedades Clínicas y Tradicionales:
                </strong>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                  {selectedProduct.clinicalEffects}
                </p>
              </div>
            )}

            {selectedProduct.howToUse && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-dark)', marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Modo de Preparación Recomendado
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {selectedProduct.howToUse}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {selectedProduct.benefits.map((b, i) => (
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
                  addToCart(selectedProduct, 1);
                  openCart();
                }}
              >
                🛒 Agregar a la Canasta
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const slug = selectedProduct.slug;
                  setSelectedProduct(null);
                  onNavigate(`/producto/${slug}`);
                }}
              >
                🔍 Ver Ficha Completa
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => {
                  const url = buildDirectWhatsAppLink(`¡Hola Más Verdes! Deseo cotizar o consultar sobre el producto: ${selectedProduct.name}`);
                  window.open(url, '_blank');
                }}
              >
                Pedir por WhatsApp
              </Button>
              <Button variant="ghost" onClick={() => setSelectedProduct(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
