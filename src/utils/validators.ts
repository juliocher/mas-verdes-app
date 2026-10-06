import { ContactFormData, ValidationResult } from '../types/contact.types';

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.nombre || data.nombre.trim().length < 2) {
    errors.nombre = 'Por favor ingresa tu nombre (mínimo 2 caracteres).';
  }

  if (!data.interes) {
    errors.interes = 'Por favor selecciona la categoría o producto de tu interés.';
  }

  if (!data.mensaje || data.mensaje.trim().length < 5) {
    errors.mensaje = 'Por favor escribe un mensaje o detalle de tu consulta.';
  }

  if (data.telefono && data.telefono.trim().length > 0) {
    const cleanPhone = data.telefono.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 8) {
      errors.telefono = 'Por favor ingresa un número de teléfono válido.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}
