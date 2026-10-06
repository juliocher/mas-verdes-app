import { ContactFormData } from '../types/contact.types';

export const OFFICIAL_PHONE = '51993028601';
export const FORMATTED_PHONE = '+51 993 028 601';

const INTEREST_LABELS: Record<string, string> = {
  hierbas: 'Hierbas Medicinales (Muña, Manzanilla, Cedrón, etc.)',
  flores: 'Flores Frescas y Comestibles de Altura',
  sales: 'Sales Medicinales de Maras',
  muna: 'Variedades de Muña Andina',
  ambos: 'Catálogo Completo (Hierbas, Flores y Sales)',
  comunidad: 'Proyecto Comunitario / Visita a Willoq',
};

export function buildWhatsAppLink(data: ContactFormData): string {
  const nombreCompleto = data.apellido ? `${data.nombre.trim()} ${data.apellido.trim()}` : data.nombre.trim();
  const interesLabel = (data.interes && INTEREST_LABELS[data.interes]) || data.interes || 'Consulta General';

  let text = `🌱 *Hola Más Verdes*, soy *${nombreCompleto}*`;
  if (data.telefono) {
    text += ` (${data.telefono.trim()})`;
  }
  text += `.\n\n`;
  text += `*Interés:* ${interesLabel}\n\n`;
  text += `*Mensaje:*\n${data.mensaje.trim()}`;

  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(text)}`;
}

export function buildDirectWhatsAppLink(prefillMessage = '¡Hola Más Verdes! Quisiera solicitar información sobre sus productos botánicos.'): string {
  return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(prefillMessage)}`;
}
