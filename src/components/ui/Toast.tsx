import React from 'react';
import { CheckCircle, AlertCircle } from './Icons';

export interface ToastProps {
  message: string;
  isVisible: boolean;
  type?: 'success' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, type = 'success' }) => {
  if (!isVisible) return null;

  const isSuccess = type === 'success';

  return (
    <div
      role="status"
      aria-live="polite"
      className="fade-up"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--green-dark)',
        color: 'var(--white)',
        padding: '14px 24px',
        borderRadius: 'var(--radius-sm)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 3000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: `1px solid ${isSuccess ? 'var(--gold)' : '#e05252'}`,
        maxWidth: '90vw',
      }}
    >
      {isSuccess ? (
        <CheckCircle size={20} color="var(--gold)" style={{ flexShrink: 0 }} />
      ) : (
        <AlertCircle size={20} color="#e05252" style={{ flexShrink: 0 }} />
      )}
      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{message}</span>
    </div>
  );
};
