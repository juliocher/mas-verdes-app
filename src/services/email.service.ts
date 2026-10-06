/**
 * MÁS VERDES — Email Service (EmailJS)
 *
 * Configuración:
 * 1. Crear cuenta gratuita en https://www.emailjs.com/
 * 2. Crear un "Email Service" (Gmail recomendado) → copiar SERVICE_ID
 * 3. Crear dos "Email Templates" → copiar los TEMPLATE_IDs
 * 4. Obtener la PUBLIC KEY en Account → API Keys
 * 5. Rellenar las constantes de abajo con tus valores reales
 *
 * Template variables para TEMPLATE_CONTACTO:
 *   {{from_name}}, {{from_email}}, {{phone}}, {{interest}}, {{message}}
 *
 * Template variables para TEMPLATE_RECLAMACION:
 *   {{claim_code}}, {{consumer_name}}, {{doc_type}}, {{doc_num}},
 *   {{phone}}, {{email}}, {{address}}, {{dept}}, {{item_type}},
 *   {{amount}}, {{item_desc}}, {{claim_type}}, {{detail}}, {{order_ref}}
 */

import emailjs from '@emailjs/browser';

// ─── Configuración (vía variables de entorno Vite o fallback) ──────────
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'TU_PUBLIC_KEY_AQUI';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'TU_SERVICE_ID_AQUI';
const TEMPLATE_CONTACTO = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTO || 'template_contacto_mv';
const TEMPLATE_RECLAMACION = import.meta.env.VITE_EMAILJS_TEMPLATE_RECLAMACION || 'template_reclamacion_mv';

const isConfigured = () =>
  EMAILJS_PUBLIC_KEY !== 'TU_PUBLIC_KEY_AQUI' &&
  EMAILJS_SERVICE_ID !== 'TU_SERVICE_ID_AQUI';

// Inicializar EmailJS una vez
let initialized = false;
function ensureInit() {
  if (!initialized && isConfigured()) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    initialized = true;
  }
}

// ─── Enviar formulario de contacto ──────────────────────────────────
export interface ContactEmailParams {
  from_name: string;
  from_email: string;
  phone?: string;
  interest?: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<void> {
  if (!isConfigured()) {
    console.info('[EmailJS Demo Mode] Contact email simulated:', params);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }
  ensureInit();
  await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_CONTACTO, {
    from_name: params.from_name,
    from_email: params.from_email,
    phone: params.phone || 'No proporcionado',
    interest: params.interest || 'Consulta general',
    message: params.message,
    to_email: 'masverdes.willoq@gmail.com',
  });
}

// ─── Enviar libro de reclamaciones ──────────────────────────────────
export interface ReclamacionEmailParams {
  claim_code: string;
  consumer_name: string;
  doc_type: string;
  doc_num: string;
  phone: string;
  email: string;
  address: string;
  dept: string;
  item_type: string;
  amount: string;
  item_desc: string;
  claim_type: string;
  detail: string;
  order_ref: string;
}

export async function sendReclamacionEmail(params: ReclamacionEmailParams): Promise<void> {
  if (!isConfigured()) {
    console.info('[EmailJS Demo Mode] Reclamacion email simulated:', params);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }
  ensureInit();
  await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_RECLAMACION, {
    ...params,
    to_email: 'masverdes.willoq@gmail.com',
  });
}

export { EMAILJS_PUBLIC_KEY };
