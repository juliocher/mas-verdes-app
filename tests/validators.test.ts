import { describe, it, expect } from 'vitest';
import { validateContactForm, validateEmail } from '../src/utils/validators';

describe('Validators Unit Tests', () => {
  it('validates contact form with valid inputs', () => {
    const result = validateContactForm({
      nombre: 'Valeria',
      apellido: 'Torres',
      telefono: '+51 993 028 601',
      interes: 'hierbas',
      mensaje: 'Hola, deseo cotizar 5 frascos de Muña.',
    });

    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors).length).toBe(0);
  });

  it('rejects contact form with missing required fields', () => {
    const result = validateContactForm({
      nombre: '',
      telefono: '',
      interes: '',
      mensaje: '',
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.nombre).toBeDefined();
    expect(result.errors.interes).toBeDefined();
    expect(result.errors.mensaje).toBeDefined();
  });

  it('validates email format correctly', () => {
    expect(validateEmail('contacto@willoqverde.pe')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('user@domain')).toBe(false);
  });
});
