import React from 'react';
import { Sparkles, Check, Star, ExternalLink, ShieldCheck } from '../components/ui/Icons';
import { REVIEWS_DATA, GOOGLE_MAPS_DATA } from '../data/reviews.data';
import { ContactForm } from '../components/forms/ContactForm';
import { Button } from '../components/ui/Button';

export interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const collectionCategories = [
    {
      title: 'Hierbas Medicinales',
      desc: 'Plantas curativas ancestrales como muña, manzanilla real y cedrón, cosechadas a mano bajo el sol andino de Willoq.',
      tag: 'Hierbas Medicinales',
      image: '/img/fotos/hierbas-hero.jpeg',
      href: '/hierbas',
    },
    {
      title: 'Flores Medicinales & Frescas',
      desc: 'Rosas de cordillera, pensamientos comestibles y flores frescas de altura cultivadas para gastronomía y bienestar.',
      tag: 'Flores Medicinales',
      image: '/img/fotos/Pensamiento.jpeg',
      href: '/flores',
    },
    {
      title: 'Sales Medicinales',
      desc: 'Sal ancestral de las salineras de Maras infusionada con aceites botánicos y finas hierbas aromáticas de nuestro valle.',
      tag: 'Sales Medicinales',
      image: '/img/fotos/sal-rosada.jpeg',
      href: '/sales',
    },
    {
      title: 'Variedades de Muña',
      desc: 'La reina botánica de los Andes. Explora nuestras variedades exclusivas de Muña Blanca, Muña Negra y Serrana.',
      tag: 'Variedades de Muña',
      image: '/img/fotos/muna-sierra.jpeg',
      href: '/muna',
    },
  ];

  return (
    <div>
      {/* ===== HERO ANDINO AUTÉNTICO ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'calc(var(--header-height) + 40px)',
          paddingBottom: '80px',
          backgroundImage: 'linear-gradient(rgba(17, 34, 22, 0.75), rgba(17, 34, 22, 0.85)), url("/img/fotos/hero-principal.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                backgroundColor: 'rgba(197, 168, 128, 0.25)',
                border: '1px solid var(--gold)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--gold)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={15} />
              Comunidad de Willoq · Urubamba, Cusco
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                color: 'var(--white)',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              El poder <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>sanador</em> de los Andes en cada brote
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}
            >
              Hierbas medicinales y flores andinas cultivadas de forma 100% agroecológica. Sabiduría botánica ancestral cosechada a mano bajo el sol de los valles sagrados.
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Button
                variant="earth"
                size="lg"
                onClick={() => onNavigate('/hierbas')}
              >
                Catálogo de Hierbas
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
                onClick={() => onNavigate('/flores')}
              >
                Galería de Flores
              </Button>
            </div>

            {/* Pillars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                fontSize: '0.86rem',
                color: 'rgba(255, 255, 255, 0.82)',
                borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                paddingTop: '20px',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--gold)" /> 100% Agroecológico
              </span>
              <span>·</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--gold)" /> Cosecha a mano
              </span>
              <span>·</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} color="var(--gold)" /> Apoyo directo a 80+ familias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10-SECOND BRAND ESSENCE ===== */}
      <section style={{ backgroundColor: 'var(--white)', padding: '60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-4">
            <div className="text-center">
              <div style={{ color: 'var(--gold-dark)', marginBottom: '8px', fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                Quiénes
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: '6px', fontSize: '1.05rem' }}>
                Comunidad Andina
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Familias quechuas unidas por el respeto a las tradiciones y la tierra en Willoq, Cusco.
              </p>
            </div>

            <div className="text-center">
              <div style={{ color: 'var(--gold-dark)', marginBottom: '8px', fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                Qué
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: '6px', fontSize: '1.05rem' }}>
                Cosechas Puras
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Hierbas curativas y arreglos florales frescos, 100% libres de agroquímicos sintéticos.
              </p>
            </div>

            <div className="text-center">
              <div style={{ color: 'var(--gold-dark)', marginBottom: '8px', fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                Por qué
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: '6px', fontSize: '1.05rem' }}>
                Sanación Natural
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Para llevar la fuerza medicinal y la vitalidad de los Andes directo a tu bienestar diario.
              </p>
            </div>

            <div className="text-center">
              <div style={{ color: 'var(--gold-dark)', marginBottom: '8px', fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                Impacto
              </div>
              <strong style={{ color: 'var(--green-dark)', display: 'block', marginBottom: '6px', fontSize: '1.05rem' }}>
                80+ Familias
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Comercio justo directo que financia la educación y salud de nuestra comunidad andina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HISTORIA DE LA FUNDADORA ===== */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/img/fotos/foto-creadora.jpeg"
                alt="Fundadora de Más Verdes en los campos de Cusco"
                style={{
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '24px',
                  backgroundColor: 'var(--green-dark)',
                  color: 'var(--white)',
                  padding: '16px 22px',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--gold)',
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--gold)' }}>80+</div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Hogares en Crecimiento</div>
              </div>
            </div>

            <div>
              <span className="section-label">La Raíz de Nuestro Propósito</span>
              <h2 className="section-title">Una semilla de vida nacida de la sanación</h2>
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--green-mid)',
                  borderLeft: '4px solid var(--gold)',
                  paddingLeft: '20px',
                  marginBottom: '20px',
                  lineHeight: 1.7,
                }}
              >
                "Las plantas de Willoq me devolvieron la salud cuando ya no había respuestas. Hoy mi misión es compartir ese mismo milagro contigo."
              </blockquote>
              <p style={{ marginBottom: '16px' }}>
                Detrás de Más Verdes no hay un frío plan de negocios, sino el viaje de superación de una mujer. Tras enfrentar una severa condición de salud que mermó su vitalidad, nuestra fundadora regresó a las tierras de sus ancestros en Cusco. Fue en el silencio de las montañas donde las hojas de la muña silvestre y la manzanilla real comenzaron su silenciosa terapia.
              </p>
              <p style={{ marginBottom: '28px' }}>
                Al experimentar en su propio cuerpo la fuerza reparadora del agua pura y los cultivos de altura, comprendió que su recuperación era una vocación. Lo que empezó como un huerto de agradecimiento, floreció en una red cooperativa que hoy conecta el saber ancestral con el mundo moderno.
              </p>
              <Button variant="primary" onClick={() => onNavigate('/nosotros')}>
                Conoce Nuestra Historia Completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMUNIDAD Y ESTADÍSTICAS ===== */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Raíces que Alimentan</span>
              <h2 className="section-title">Más de 80 familias detrás de cada frasco</h2>
              <p style={{ marginBottom: '16px' }}>
                No somos una fábrica. Somos una red de familias agricultoras en Willoq que llevan <strong>5 años</strong> cultivando con agua de deshielo, sin agroquímicos y sin intermediarios. Cada compra llega directamente a sus manos.
              </p>
              <p style={{ marginBottom: '32px' }}>
                Hoy, más de <strong>15,000 kg de cultivos sostenibles</strong> han salido de estas tierras hacia hogares que valoran el origen de lo que consumen. Más de <strong>10,000 personas</strong> ya forman parte de este círculo de bienestar.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
                <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-dark)', fontFamily: 'var(--font-serif)' }}>80+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>Familias activas</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-dark)', fontFamily: 'var(--font-serif)' }}>5</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>Años sin intermediarios</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-dark)', fontFamily: 'var(--font-serif)' }}>15k+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)' }}>Kg agroecológicos</div>
                </div>
              </div>

              <Button variant="outline" onClick={() => onNavigate('/nosotros')}>
                Conoce a las Familias
              </Button>
            </div>

            <div>
              <img
                src="/img/fotos/Manzanilla.jpeg"
                alt="Cosecha de manzanilla real en Willoq"
                style={{
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DE LAS 4 LÍNEAS DE LA COLECCIÓN ===== */}
      <section className="section section-beige">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <span className="section-label">Pureza de Origen</span>
            <h2 className="section-title">Nuestra Colección de Altura</h2>
            <p className="section-subtitle">
              Explora nuestros 4 pilares botánicos cultivados con agua de deshielo y abonos 100% orgánicos en Willoq, Cusco.
            </p>
          </div>

          <div className="grid-4">
            {collectionCategories.map((cat, idx) => (
              <div
                key={idx}
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
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(27, 51, 34, 0.85)',
                      color: 'var(--white)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '10px' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, flex: 1, marginBottom: '20px' }}>
                    {cat.desc}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => onNavigate(cat.href)}
                    style={{ alignSelf: 'flex-start', padding: 0 }}
                  >
                    Ver Catálogo →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS (RESEÑAS REALES DE GOOGLE MAPS) ===== */}
      <section className="section section-white" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Reseñas Verificadas</span>
            <h2 className="section-title">Lo que dicen nuestros visitantes</h2>
            <p className="section-subtitle">
              Reseñas reales en Google Maps · <strong style={{ color: 'var(--gold-dark)' }}>★ {GOOGLE_MAPS_DATA.rating}</strong> basado en {GOOGLE_MAPS_DATA.reviewsCount} opiniones verificadas en el Valle Sagrado.
            </p>

            <a
              href={GOOGLE_MAPS_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hover-lift"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                fontSize: '0.85rem',
                backgroundColor: 'var(--white)',
              }}
            >
              <span>Ver todas las reseñas en Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid-3">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--cream)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '14px', color: '#f4b400' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f4b400" />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-mid)', marginBottom: '20px' }}>
                    "{rev.quote}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: rev.avatarGradient,
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontFamily: 'var(--font-serif)',
                      border: '2px solid var(--gold)',
                    }}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', color: 'var(--green-dark)', fontWeight: 700 }}>{rev.author}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                      Verificada · {rev.timeAgo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA DARK DE ALTO IMPACTO ===== */}
      <section
        style={{
          backgroundColor: 'var(--green-dark)',
          color: 'var(--white)',
          padding: '90px 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
            Empieza tu camino natural
          </span>
          <h2 style={{ color: 'var(--white)', fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', marginBottom: '18px' }}>
            Lleva la salud de los Andes a tu hogar
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '36px' }}>
            Cada lote de hierbas se empaca a pedido para conservar su aceite volátil curativo y cada ramo floral se diseña artesanalmente. Escríbenos hoy para cotizar tu pedido.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => onNavigate('/contacto')}
            >
              Pedir por WhatsApp Directo
            </Button>
            <Button
              variant="outline"
              size="lg"
              style={{ borderColor: 'var(--white)', color: 'var(--white)' }}
              onClick={() => onNavigate('/coleccion')}
            >
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FORMULARIO DE CONTACTO EN HOME ===== */}
      <section className="section section-cream" id="contacto">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Canales Directos</span>
              <h2 className="section-title">Estamos listos para escucharte</h2>
              <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                ¿Buscas una combinación medicinal específica, flores a medida para un restaurante u hotel en Cusco, o te gustaría visitar nuestros campos cooperativos en Willoq? Completa el formulario y te responderemos por WhatsApp de inmediato.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={20} color="var(--green-mid)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-mid)' }}>
                    <strong>Garantía de Origen:</strong> 100% cultivado en Willoq, Urubamba
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check size={20} color="var(--green-mid)" />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-mid)' }}>
                    <strong>Atención Personalizada:</strong> Sin bots, trato humano directo
                  </span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
