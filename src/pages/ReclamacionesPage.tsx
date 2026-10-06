import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { OFFICIAL_PHONE } from '../services/whatsapp.service';
import { sendReclamacionEmail } from '../services/email.service';

export interface ReclamacionesPageProps {
  onNavigate: (path: string) => void;
}

export const ReclamacionesPage: React.FC<ReclamacionesPageProps> = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoDoc: 'DNI',
    numDoc: '',
    telefono: '',
    email: '',
    domicilio: '',
    departamento: 'Cusco',
    tipoBien: 'Producto',
    montoReclamado: '',
    descripcionBien: '',
    tipoReclamacion: 'Reclamo',
    detalle: '',
    pedido: '',
    autorizo: true,
  });

  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);
    const code = `MV-LR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    try {
      await sendReclamacionEmail({
        claim_code: code,
        consumer_name: formData.nombre,
        doc_type: formData.tipoDoc,
        doc_num: formData.numDoc,
        phone: formData.telefono,
        email: formData.email,
        address: formData.domicilio,
        dept: formData.departamento,
        item_type: formData.tipoBien,
        amount: formData.montoReclamado || '0.00',
        item_desc: formData.descripcionBien,
        claim_type: formData.tipoReclamacion,
        detail: formData.detalle,
        order_ref: formData.pedido,
      });
      setSubmittedCode(code);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setSendError('Hubo un error al enviar el reclamo. Por favor inténtalo nuevamente o contáctanos por WhatsApp.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  const handleWhatsAppCopy = () => {
    if (!submittedCode) return;
    const msg = `📋 *HOJA DE RECLAMACIÓN VIRTUAL (${submittedCode})*\n` +
      `*Proveedor:* Más Verdes - Willoq, Urubamba, Cusco\n` +
      `*Consumidor:* ${formData.nombre} (${formData.tipoDoc}: ${formData.numDoc})\n` +
      `*Contacto:* ${formData.telefono} / ${formData.email}\n` +
      `*Tipo:* ${formData.tipoReclamacion.toUpperCase()}\n` +
      `*Bien contratado:* ${formData.tipoBien} - ${formData.descripcionBien} (Monto: S/ ${formData.montoReclamado || '0.00'})\n` +
      `*Detalle:* ${formData.detalle}\n` +
      `*Pedido:* ${formData.pedido}`;
    window.open(`https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div>
      <PageHero
        label="Libro Virtual Conforme a Ley N° 29571"
        title="Libro de Reclamaciones"
        description="Conforme a lo dispuesto por el Código de Protección y Defensa del Consumidor de la República del Perú (INDECOPI)."
        breadcrumbs={[{ label: 'Libro de Reclamaciones' }]}
      />

      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '820px' }}>
          {submittedCode ? (
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '40px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                border: '2px solid var(--green-mid)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>✓</div>
              <span className="section-label">Hoja Registrada con Éxito</span>
              <h2 style={{ color: 'var(--green-dark)', marginBottom: '8px' }}>
                Reclamación N° {submittedCode}
              </h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '24px' }}>
                Hemos registrado formalmente tu {formData.tipoReclamacion.toLowerCase()}. Conforme a la legislación vigente (Ley N° 29571 y D.S. N° 011-2011-PCM), daremos respuesta a tu correo electrónico en un plazo máximo de quince (15) días hábiles improrrogables.
              </p>

              <div
                style={{
                  backgroundColor: 'var(--cream)',
                  padding: '20px',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  marginBottom: '28px',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                <div><strong>Consumidor:</strong> {formData.nombre} ({formData.tipoDoc}: {formData.numDoc})</div>
                <div><strong>Fecha y Hora:</strong> {new Date().toLocaleString('es-PE')}</div>
                <div><strong>Tipo:</strong> {formData.tipoReclamacion}</div>
                <div><strong>Bien:</strong> {formData.tipoBien} - {formData.descripcionBien}</div>
                <div><strong>Detalle:</strong> {formData.detalle}</div>
                <div><strong>Pedido:</strong> {formData.pedido}</div>
              </div>

              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button variant="whatsapp" onClick={handleWhatsAppCopy}>
                  Enviar Copia Directa por WhatsApp
                </Button>
                <Button variant="outline" onClick={() => window.print()}>
                  Imprimir Comprobante
                </Button>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '36px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)',
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'var(--green-pale)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '28px',
                  fontSize: '0.88rem',
                  color: 'var(--green-dark)',
                  lineHeight: 1.6,
                }}
              >
                <strong>Datos del Establecimiento Comercial:</strong>
                <div>Más Verdes (Asociación & Familias Productoras de Willoq)</div>
                <div>Comunidad de Willoq, Urubamba, Valle Sagrado, Cusco, Perú</div>
                <div>RUC: En trámite comunal · Teléfono: +51 993 028 601</div>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Paso 1 */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--green-dark)', borderBottom: '2px solid var(--gold)', paddingBottom: '6px', marginBottom: '16px' }}>
                    1. Identificación del Consumidor Reclamante
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                        Nombre y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '8px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Doc.</label>
                        <select
                          value={formData.tipoDoc}
                          onChange={(e) => setFormData({ ...formData, tipoDoc: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)', backgroundColor: 'var(--white)' }}
                        >
                          <option value="DNI">DNI</option>
                          <option value="CE">C.E.</option>
                          <option value="Pasaporte">Pasaporte</option>
                          <option value="RUC">RUC</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Número *</label>
                        <input
                          type="text"
                          required
                          value={formData.numDoc}
                          onChange={(e) => setFormData({ ...formData, numDoc: e.target.value })}
                          style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                        Teléfono / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                      Domicilio (Dirección, Distrito y Ciudad) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.domicilio}
                      onChange={(e) => setFormData({ ...formData, domicilio: e.target.value })}
                      placeholder="Av. / Calle / Nro / Distrito / Provincia"
                      style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                    />
                  </div>
                </div>

                {/* Paso 2 */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--green-dark)', borderBottom: '2px solid var(--gold)', paddingBottom: '6px', marginBottom: '16px' }}>
                    2. Identificación del Bien Contratado
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>Tipo</label>
                      <select
                        value={formData.tipoBien}
                        onChange={(e) => setFormData({ ...formData, tipoBien: e.target.value })}
                        style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)', backgroundColor: 'var(--white)' }}
                      >
                        <option value="Producto">Producto (Hierbas, Flores, Sales, Alimentos)</option>
                        <option value="Servicio">Servicio (Visita a huerta, delivery, asesoría)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                        Monto Reclamado (S/)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={formData.montoReclamado}
                        onChange={(e) => setFormData({ ...formData, montoReclamado: e.target.value })}
                        placeholder="Ej. 45.00"
                        style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                      Descripción del Producto o Servicio *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.descripcionBien}
                      onChange={(e) => setFormData({ ...formData, descripcionBien: e.target.value })}
                      placeholder="Ej. Sal Rosada con Muña / Frasco de Muña en Polvo"
                      style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)' }}
                    />
                  </div>
                </div>

                {/* Paso 3 */}
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--green-dark)', borderBottom: '2px solid var(--gold)', paddingBottom: '6px', marginBottom: '16px' }}>
                    3. Detalle de la Reclamación
                  </h3>

                  <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="tipoReclamacion"
                        value="Reclamo"
                        checked={formData.tipoReclamacion === 'Reclamo'}
                        onChange={(e) => setFormData({ ...formData, tipoReclamacion: e.target.value })}
                      />
                      <span><strong>Reclamo:</strong> Disconformidad relacionada a los productos o servicios.</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="tipoReclamacion"
                        value="Queja"
                        checked={formData.tipoReclamacion === 'Queja'}
                        onChange={(e) => setFormData({ ...formData, tipoReclamacion: e.target.value })}
                      />
                      <span><strong>Queja:</strong> Malestar o descontento respecto a la atención al público.</span>
                    </label>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                      Detalle del Reclamo o Queja *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.detalle}
                      onChange={(e) => setFormData({ ...formData, detalle: e.target.value })}
                      placeholder="Describe con claridad los hechos ocurridos..."
                      style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)', resize: 'vertical' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                      Pedido Concreto del Consumidor *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.pedido}
                      onChange={(e) => setFormData({ ...formData, pedido: e.target.value })}
                      placeholder="¿Qué solución esperas? (Ej. Cambio de producto, devolución, aclaración...)"
                      style={{ width: '100%', padding: '10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-mid)', resize: 'vertical' }}
                    />
                  </div>
                </div>

                {sendError && (
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      color: 'var(--red, #dc2626)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                    }}
                  >
                    ⚠️ {sendError}
                  </div>
                )}

                <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                  * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={sending}
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Registrando Hoja...' : 'Registrar Hoja de Reclamación Virtual'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
