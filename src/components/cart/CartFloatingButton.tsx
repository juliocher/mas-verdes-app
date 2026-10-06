import React from 'react';
import { useCart } from '../../context/CartContext';

export const CartFloatingButton: React.FC = () => {
  const { totalCount, openCart } = useCart();

  if (totalCount === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label={`Ver canasta con ${totalCount} productos`}
      style={{
        position: 'fixed',
        bottom: '92px',
        right: '24px',
        zIndex: 90,
        backgroundColor: 'var(--green-dark)',
        color: 'var(--gold)',
        border: '2px solid var(--gold)',
        borderRadius: 'var(--radius-full)',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: 'var(--shadow-lg)',
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontWeight: 700,
        transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
        animation: 'bounceIn 0.35s ease-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
      }}
    >
      <span style={{ fontSize: '1.2rem' }}>🛒</span>
      <span style={{ color: 'var(--white)', fontSize: '0.9rem' }}>Canasta</span>
      <span
        style={{
          backgroundColor: 'var(--gold)',
          color: 'var(--green-dark)',
          borderRadius: 'var(--radius-full)',
          padding: '2px 8px',
          fontSize: '0.8rem',
          fontWeight: 800,
        }}
      >
        {totalCount}
      </span>
    </button>
  );
};
