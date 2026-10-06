import React from 'react';
import { Button } from '../components/ui/Button';
import { Leaf } from '../components/ui/Icons';

export interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '560px' }}>
        {/* Decorative icon */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 168, 128, 0.15)',
            border: '2px solid rgba(197, 168, 128, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
          }}
        >
          <Leaf size={46} color="var(--gold)" />
        </div>

        {/* 404 */}
        <div
          style={{
            fontSize: '6rem',
            fontWeight: 800,
            fontFamily: 'var(--font-serif)',
            color: 'var(--gold)',
            lineHeight: 1,
            marginBottom: '8px',
            letterSpacing: '-0.02em',
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: '1.7rem',
            color: 'var(--white)',
            fontFamily: 'var(--font-serif)',
            marginBottom: '14px',
            lineHeight: 1.3,
          }}
        >
          Esta página se perdió entre los Andes
        </h1>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.75)',
            fontSize: '1rem',
            lineHeight: 1.8,
            marginBottom: '36px',
          }}
        >
          La ruta que buscas no existe o fue movida. Puedes volver al inicio
          o explorar nuestra colección botánica.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="earth" size="lg" onClick={() => onNavigate('/')}>
            ← Volver al Inicio
          </Button>
          <Button variant="outline-light" size="lg" onClick={() => onNavigate('/coleccion')}>
            Ver Colección
          </Button>
        </div>
      </div>
    </div>
  );
};
