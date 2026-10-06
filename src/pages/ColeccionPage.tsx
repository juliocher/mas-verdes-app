import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from '../components/ui/Icons';

export interface ColeccionPageProps {
  onNavigate: (path: string) => void;
}

export const ColeccionPage: React.FC<ColeccionPageProps> = ({ onNavigate }) => {
  const lines = [
    {
      id: 'hierbas',
      tag: 'Pilar 01 · Infusiones Ancestrales',
      title: 'Hierbas Medicinales de Altura',
      desc: 'Plantas curativas recolectadas en su momento óptimo de floración bajo el sol de montaña. Muña de la Sierra, Manzanilla Real, Cedrón, Toronjil y Orégano silvestre con alta concentración de aceites esenciales.',
      benefits: ['100% Ecológico', 'Secado en Sombra', 'Cosecha a Mano', 'Propiedades Clínicas'],
      image: '/img/fotos/hierbas-hero.jpeg',
      href: '/hierbas',
      cta: 'Explorar Catálogo de Hierbas',
    },
    {
      id: 'flores',
      tag: 'Pilar 02 · Belleza y Gastronomía',
      title: 'Flores Medicinales & Comestibles',
      desc: 'Rosas de cordillera, claveles andinos, girasoles gigantes y pensamientos comestibles cultivados en camas orgánicas con agua de glaciar. Ideales para ambientaciones exclusivas y alta cocina andina.',
      benefits: ['Pétalos Comestibles', 'Larga Duración', 'Sin Pesticidas', 'Coloración Viva'],
      image: '/img/fotos/Pensamiento.jpeg',
      href: '/flores',
      cta: 'Ver Galería de Flores',
    },
    {
      id: 'sales',
      tag: 'Pilar 03 · Minerales de Maras',
      title: 'Sales Medicinales Infusionadas',
      desc: 'Cristales milenarios de sal rosada de las salineras de Maras infusionados artesanalmente con muña, hierbas aromáticas y flores curativas. Culinarias y terapéuticas de baño.',
      benefits: ['84 Minerales Naturales', 'Baja en Sodio', 'Infusión en Frío', 'Uso Culinario y Baño'],
      image: '/img/fotos/sal-rosada.jpeg',
      href: '/sales',
      cta: 'Descubrir Sales Medicinales',
    },
    {
      id: 'muna',
      tag: 'Pilar 04 · La Reina de los Andes',
      title: 'Variedades de Muña Andina',
      desc: 'El superalimento sagrado de los Incas. Variedades exclusivas de Muña de la Sierra, Muña Blanca, Muña Negra y Muña micronizada en polvo con récord de calcio y poder digestivo.',
      benefits: ['Alivio de Soroche', 'Alta en Calcio', 'Digestivo Inmediato', 'Ancestral'],
      image: '/img/fotos/muna-sierra.jpeg',
      href: '/muna',
      cta: 'Conocer las Variedades de Muña',
    },
  ];

  return (
    <div>
      <PageHero
        label="Botánica de los Andes"
        title="Nuestra Colección Completa"
        description="Cuatro líneas botánicas cultivadas con agua pura de montaña y respeto a los ciclos de la tierra en Willoq, Cusco."
        breadcrumbs={[{ label: 'Nuestra Colección' }]}
      />

      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {lines.map((line, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={line.id}
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      height: '380px',
                      overflow: 'hidden',
                      order: isEven ? 2 : 1,
                    }}
                  >
                    <img
                      src={line.image}
                      alt={line.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>

                  <div
                    style={{
                      padding: '44px 36px',
                      order: isEven ? 1 : 2,
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-dark)',
                        marginBottom: '10px',
                      }}
                    >
                      {line.tag}
                    </span>

                    <h2
                      style={{
                        fontSize: '1.85rem',
                        color: 'var(--green-dark)',
                        marginBottom: '16px',
                        lineHeight: 1.3,
                      }}
                    >
                      {line.title}
                    </h2>

                    <p style={{ fontSize: '0.96rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '24px' }}>
                      {line.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                      {line.benefits.map((b, i) => (
                        <Badge key={i} variant="pale">
                          <Check size={12} color="var(--green-mid)" />
                          {b}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="primary" onClick={() => onNavigate(line.href)}>
                      {line.cta} →
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
