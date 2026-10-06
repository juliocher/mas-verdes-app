import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pale' | 'gold' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'pale',
  size = 'sm',
  className = '',
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    borderRadius: 'var(--radius-full)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    lineHeight: 1,
  };

  const sizeStyle: Record<string, React.CSSProperties> = {
    sm: { padding: '4px 10px', fontSize: '0.75rem' },
    md: { padding: '6px 14px', fontSize: '0.82rem' },
  };

  const variantStyle: Record<string, React.CSSProperties> = {
    pale: {
      backgroundColor: 'var(--green-pale)',
      color: 'var(--green-dark)',
      border: '1px solid var(--border-light)',
    },
    gold: {
      backgroundColor: 'rgba(197, 168, 128, 0.18)',
      color: 'var(--gold-dark)',
      border: '1px solid var(--border-gold)',
    },
    dark: {
      backgroundColor: 'var(--green-dark)',
      color: 'var(--white)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-mid)',
      border: '1px solid var(--border-light)',
    },
  };

  return (
    <span
      className={`badge badge-${variant} ${className}`}
      style={{
        ...baseStyle,
        ...sizeStyle[size],
        ...variantStyle[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
};
