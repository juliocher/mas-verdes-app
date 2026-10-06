import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Heart, Leaf, Users } from '../components/ui/Icons';

export interface NosotrosPageProps {
  onNavigate: (path: string) => void;
}

export const NosotrosPage: React.FC<NosotrosPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Ayni',
      subtitle: 'Reciprocidad Ancestral',
      desc: 'Creemos en relaciones de beneficio mutuo. Trabajamos directamente con las familias de Willoq asegurando que cada intercambio sea justo, transparente y sostenible.',
      icon: <Users size={28} color="var(--gold-dark)" />,
    },
    {
      title: 'Allin Kawsay',
      subtitle: 'El Buen Vivir',
      desc: 'La salud no es la ausencia de enfermedad, sino la armonía plena entre el cuerpo, la mente, la comunidad y los ciclos naturales de la tierra.',
      icon: <Heart size={28} color="var(--gold-dark)" />,
    },
    {
      title: 'Pachamama',
      subtitle: 'Respeto a la Madre Tierra',
      desc: 'Cero agroquímicos, cero pesticidas sintéticos. Nutrimos el suelo con abonos orgánicos propios y agua pura de deshielo de glaciares andinos.',
      icon: <Leaf size={28} color="var(--gold-dark)" />,
    },
  ];

  const timelineMilestones = [
    {
      year: '2021',
      title: 'La Semilla de Sanación',
      desc: 'Nuestra fundadora llega a Willoq buscando recuperar su vitalidad a través de la botánica andina. El éxito de su proceso inspira el nacimiento del huerto demostrativo.',
    },
    {
      year: '2022',
      title: 'Primeras 20 Familias',
      desc: 'Se consolida la red comunitaria de cultivo. Estandarización de cosechas matutinas y secado en sombra para preservar los aceites esenciales de la muña y manzanilla.',
    },
    {
      year: '2024',
      title: 'Alianza Gastronómica en Cusco',
      desc: 'Restaurantes y hoteles boutique del Valle Sagrado incorporan las flores comestibles, hortalizas de altura y sales de Maras de Más Verdes en sus cartas.',
    },
    {
      year: '2026',
      title: '80+ Familias y Comercio Justo',
      desc: 'Consolidación de una cooperativa modelo que financia programas de salud y educación infantil en Willoq, llevando salud andina a todo el país.',
    },
  ];

  return (
    <div>
      <PageHero
        label="Nuestra Esencia"
        title="Nuestra Historia y Propósito"
        description="Un viaje de superación personal que floreció en el sustento digno y agroecológico de toda una comunidad andina."
        breadcrumbs={[{ label: 'Sobre Nosotros' }]}
      />

      {/* ===== FOUNDER DEEP STORY ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">El Alma de la Marca</span>
              <h2 className="section-title">El milagro botánico que devolvió la esperanza</h2>
              <p style={{ marginBottom: '16px' }}>
                Más Verdes comenzó en el punto más vulnerable de la vida de nuestra fundadora. Afectada por una severa condición de salud y fatiga que los tratamientos convencionales no lograban estabilizar, decidió buscar refugio en la tranquilidad y el aire limpio de la comunidad andina de Willoq.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Allí, de la mano de sabios elders locales y en comunión directa con la tierra, redescubrió el valor de la medicina botánica viva. Con infusiones diarias de muña blanca recién cortada y manzanilla real recolectada bajo el sol de altura, su cuerpo comenzó un proceso profundo de regeneración y equilibrio natural.
              </p>
              <p style={{ marginBottom: '24px' }}>
                <em>"La tierra tiene su propia farmacia y su propio ritmo; solo debemos aprender a escucharla de nuevo"</em>, relata con emoción. Lo que empezó como un huerto de agradecimiento, se convirtió en una causa: compartir esa misma pureza sanadora y empoderar con empleo digno a su comunidad adoptiva.
              </p>
              <Button variant="primary" onClick={() => onNavigate('/contacto')}>
                Conversar con Nosotros
              </Button>
            </div>

            <div>
              <img
                src="/img/fotos/foto-creadora.jpeg"
                alt="Fundadora de Más Verdes en Willoq"
                style={{
                  borderRadius: 'var(--radius-md)',
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  boxShadow: 'var(--shadow-lg)',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALORES ANDINOS ===== */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Pilares Éticos</span>
            <h2 className="section-title">Nuestros Valores Andinos</h2>
            <p className="section-subtitle">
              Los principios que rigen cada siembra, cada cosecha y cada decisión comercial en Más Verdes.
            </p>
          </div>

          <div className="grid-3">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--beige)',
                  borderRadius: 'var(--radius-md)',
                  padding: '36px 28px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ marginBottom: '16px' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', marginBottom: '4px' }}>
                  {val.title}
                </h3>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                  {val.subtitle}
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE HISTÓRICO ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label">Evolución</span>
            <h2 className="section-title">El Camino Recorrido en Willoq</h2>
            <p className="section-subtitle">De un huerto de agradecimiento a una red de 80 familias andinas.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Center line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '28px',
                width: '3px',
                backgroundColor: 'var(--gold)',
                opacity: 0.4,
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {timelineMilestones.map((m, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--green-dark)',
                      color: 'var(--gold)',
                      border: '3px solid var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    {m.year}
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--white)',
                      padding: '24px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-sm)',
                      flex: 1,
                    }}
                  >
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--green-dark)', marginBottom: '8px' }}>
                      {m.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SOCIAL ===== */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: '16px' }}>
            ¿Quieres visitar la comunidad o ser voluntario?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '32px', lineHeight: 1.8 }}>
            Organizamos visitas coordinadas para conocer las parcelas agroecológicas, aprender sobre recolección botánica y compartir con las familias de Willoq.
          </p>
          <Button variant="earth" size="lg" onClick={() => onNavigate('/contacto')}>
            Coordinar una Visita o Consulta
          </Button>
        </div>
      </section>
    </div>
  );
};
