import React from 'react';
import { MessageCircle } from '../ui/Icons';
import { buildDirectWhatsAppLink } from '../../services/whatsapp.service';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = buildDirectWhatsAppLink();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar directamente por WhatsApp"
      className="whatsapp-float hover-lift"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        backgroundColor: '#25d366',
        color: '#ffffff',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 1500,
        transition: 'var(--transition-normal)',
      }}
    >
      <MessageCircle size={30} />
      <span className="sr-only">Escríbenos por WhatsApp</span>
    </a>
  );
};
