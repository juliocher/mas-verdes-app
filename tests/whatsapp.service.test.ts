import { describe, it, expect } from 'vitest';
import { buildWhatsAppLink, buildDirectWhatsAppLink, OFFICIAL_PHONE } from '../src/services/whatsapp.service';

describe('WhatsApp Service Tests', () => {
  it('builds prefilled whatsapp link correctly', () => {
    const link = buildWhatsAppLink({
      nombre: 'Luciana',
      apellido: 'Perez',
      telefono: '999888777',
      interes: 'flores',
      mensaje: 'Cotización para rosas andinas',
    });

    expect(link).toContain(`https://wa.me/${OFFICIAL_PHONE}`);
    expect(link).toContain(encodeURIComponent('Luciana Perez'));
    expect(link).toContain(encodeURIComponent('Cotización para rosas andinas'));
  });

  it('builds direct whatsapp quick link', () => {
    const link = buildDirectWhatsAppLink();
    expect(link).toContain(`https://wa.me/${OFFICIAL_PHONE}`);
  });
});
