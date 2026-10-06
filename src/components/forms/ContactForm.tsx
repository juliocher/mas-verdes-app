import React, { useState } from 'react';
import { ShieldCheck, Users, Send } from '../ui/Icons';
import { ContactFormData } from '../../types/contact.types';
import { validateContactForm } from '../../utils/validators';
import { buildWhatsAppLink } from '../../services/whatsapp.service';
import { sendContactEmail } from '../../services/email.service';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    apellido: '',
    telefono: '',
    interes: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail({
        from_name: `${formData.nombre} ${formData.apellido || ''}`.trim(),
        from_email: formData.telefono ? `tel:${formData.telefono}` : 'web@masverdes.pe',
        phone: formData.telefono,
        interest: formData.interes,
        message: formData.mensaje,
      });
    } catch (err) {
      console.warn('Error enviando email de contacto:', err);
    }

    const whatsappUrl = buildWhatsAppLink(formData);
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 'var(--radius-xs)',
    border: '1px solid var(--border-light)',
    backgroundColor: 'var(--white)',
    fontSize: '0.95rem',
    color: 'var(--text-dark)',
    transition: 'border-color var(--transition-fast)',
    outline: 'none',
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        padding: '36px 32px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <h3 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', marginBottom: '8px' }}>
        Solicitar Pedido o Información
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginBottom: '24px' }}>
        Escríbenos directamente y un coordinador de Willoq responderá tu consulta en minutos.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name and Lastname row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label htmlFor="nombre" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: errors.nombre ? '#e05252' : 'var(--border-light)',
              }}
              required
            />
            {errors.nombre && <span style={{ color: '#e05252', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.nombre}</span>}
          </div>

          <div>
            <label htmlFor="apellido" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Tu apellido"
              value={formData.apellido}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="telefono" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
            WhatsApp o Teléfono (Opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="+51 993 028 601"
            value={formData.telefono}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.telefono ? '#e05252' : 'var(--border-light)',
            }}
          />
          {errors.telefono && <span style={{ color: '#e05252', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.telefono}</span>}
        </div>

        {/* Product Interest Select */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="interes" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
            ¿Qué productos te interesan? *
          </label>
          <select
            id="interes"
            name="interes"
            value={formData.interes}
            onChange={handleChange}
            style={{
              ...inputStyle,
              borderColor: errors.interes ? '#e05252' : 'var(--border-light)',
            }}
            required
          >
            <option value="">Selecciona tu interés</option>
            <option value="hierbas">Hierbas Medicinales (Muña, Manzanilla, Cedrón, etc.)</option>
            <option value="flores">Flores Frescas & Comestibles (Rosas, Pensamientos, Girasoles)</option>
            <option value="sales">Sales Medicinales de Maras</option>
            <option value="muna">Variedades Especiales de Muña</option>
            <option value="ambos">Catálogo Completo Combinado</option>
            <option value="comunidad">Visitas al Huerto / Proyecto Social</option>
          </select>
          {errors.interes && <span style={{ color: '#e05252', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.interes}</span>}
        </div>

        {/* Message */}
        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="mensaje" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
            Tu mensaje o consulta *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Describe qué cantidades, variedades o fecha de entrega necesitas..."
            value={formData.mensaje}
            onChange={handleChange}
            style={{
              ...inputStyle,
              resize: 'vertical',
              borderColor: errors.mensaje ? '#e05252' : 'var(--border-light)',
            }}
            required
          />
          {errors.mensaje && <span style={{ color: '#e05252', fontSize: '0.78rem', marginTop: '4px', display: 'block' }}>{errors.mensaje}</span>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="whatsapp"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<Send size={18} />}
        >
          {isSubmitting ? 'Abriendo WhatsApp...' : 'Enviar Pedido por WhatsApp'}
        </Button>

        {/* Trust Signals */}
        <div
          style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '0.78rem',
            color: 'var(--text-light)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} color="var(--green-mid)" />
            <span>Datos Protegidos</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={16} color="var(--green-mid)" />
            <span>Comercio Directo Willoq</span>
          </span>
        </div>
      </form>
    </div>
  );
};
