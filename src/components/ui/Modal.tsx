import React, { useEffect } from 'react';
import { X } from './Icons';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  headerImage?: string;
  headerImageAlt?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  headerImage,
  headerImageAlt = '',
  children,
  maxWidth = '820px',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Detalles'}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 28, 19, 0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '50px 16px 24px',
        overflowY: 'auto',
      }}
    >
      <div
        className="modal-content fade-up"
        style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          maxWidth,
          width: '100%',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          position: 'relative',
          margin: 'auto',
          border: '1px solid var(--border-light)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            color: 'var(--green-dark)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: 'var(--shadow-sm)',
            transition: 'var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
          }}
        >
          <X size={20} />
        </button>

        {/* Optional Header Banner Image */}
        {headerImage && (
          <div style={{ height: '340px', overflow: 'hidden', backgroundColor: 'var(--green-pale)' }}>
            <img
              src={headerImage}
              alt={headerImageAlt || title || 'Imagen'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '36px 32px' }}>
          {title && !headerImage && (
            <h2 style={{ fontSize: '1.8rem', color: 'var(--green-dark)', marginBottom: '16px' }}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
