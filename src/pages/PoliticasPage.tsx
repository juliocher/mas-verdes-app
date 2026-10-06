import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Truck, ShieldCheck, Heart, Sparkles } from '../components/ui/Icons';

export interface PoliticasPageProps {
  onNavigate: (path: string) => void;
}

export const PoliticasPage: React.FC<PoliticasPageProps> = () => {
  return (
    <div>
      <PageHero
        label="Transparencia y Confianza"
        title="Políticas, Envíos y Privacidad"
        description="Conoce nuestras condiciones de entrega, garantía de frescura andina y compromiso con tus datos personales."
        breadcrumbs={[{ label: 'Políticas y Envíos' }]}
      />

      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            {/* Envíos y Entregas */}
            <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ color: 'var(--green-dark)' }}><Truck size={28} /></div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', margin: 0 }}>
                  1. Zonas de Entrega y Métodos de Envío
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                <p>
                  <strong>• Urubamba y Valle Sagrado (Entrega Local):</strong> Despacho directo coordinado el mismo día o al día siguiente. Las flores frescas y hortalizas se cosechan horas antes de la entrega para garantizar su frescura.
                </p>
                <p>
                  <strong>• Ciudad del Cusco:</strong> Envíos diarios programados hacia hoteles, restaurantes y domicilios en Cusco centro y alrededores.
                </p>
                <p>
                  <strong>• Lima y Provincias del Perú:</strong> Los productos secos y envasados (muña deshidratada, sales de Maras, hierbas medicinales) se envían a través de <strong>Olva Courier o Shalom</strong> con guía de rastreo. El tiempo de tránsito es de 24 a 48 horas hábiles.
                </p>
              </div>
            </div>

            {/* Pagos */}
            <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ color: 'var(--green-dark)' }}><Sparkles size={28} /></div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', margin: 0 }}>
                  2. Medios de Pago y Coordinación Directa
                </h2>
              </div>

              <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                <p style={{ marginBottom: '12px' }}>
                  Para mantener un modelo de comercio justo sin comisiones abusivas de intermediarios, gestionamos los pedidos de manera personalizada a través de nuestro WhatsApp oficial:
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Yape y Plin:</strong> Directo al número oficial (+51 993 028 601).</li>
                  <li><strong>Transferencia Bancaria:</strong> Cuentas en BCP, BBVA, Interbank y Banco de la Nación.</li>
                  <li><strong>Pago en Efectivo contraentrega:</strong> Disponible en entregas coordinadas en Urubamba.</li>
                </ul>
              </div>
            </div>

            {/* Garantía */}
            <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ color: 'var(--green-dark)' }}><Heart size={28} /></div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', margin: 0 }}>
                  3. Garantía de Calidad y Comercio Justo
                </h2>
              </div>

              <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                <p style={{ marginBottom: '12px' }}>
                  Cada producto de Más Verdes procede exclusivamente de cultivos agroecológicos regados con agua de montaña en Willoq, Urubamba. Si algún producto llegara en condiciones no óptimas durante el transporte, nos comprometemos a reemplazarlo o reembolsar su valor de inmediato sin trámites engorrosos.
                </p>
                <p>
                  El 100% de los ingresos recibidos beneficia de manera directa a las familias campesinas asociadas, financiando proyectos de salud y educación infantil en la comunidad.
                </p>
              </div>
            </div>

            {/* Privacidad */}
            <div style={{ backgroundColor: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ color: 'var(--green-dark)' }}><ShieldCheck size={28} /></div>
                <h2 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', margin: 0 }}>
                  4. Protección de Datos Personales (Ley N° 29733)
                </h2>
              </div>

              <div style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                <p style={{ marginBottom: '12px' }}>
                  En cumplimiento de la Ley de Protección de Datos Personales (Ley N° 29733), tus datos (nombre, número de contacto, dirección de entrega) solo son utilizados para procesar y entregar tu pedido. No vendemos, cedemos ni compartimos tu información con terceras empresas ni enviamos publicidad no deseada.
                </p>
                <p>
                  Puedes solicitar la actualización o eliminación de tus datos en cualquier momento escribiéndonos a nuestro canal de WhatsApp o al correo <em>contacto@willoqverde.pe</em>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
