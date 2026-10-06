import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-light' | 'earth' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? 0.7 : 1,
    transition: 'var(--transition-normal)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-xs)',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '8px 16px', fontSize: '0.82rem' },
    md: { padding: '12px 24px', fontSize: '0.9rem' },
    lg: { padding: '15px 32px', fontSize: '1rem' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--green-dark)',
      color: 'var(--white)',
      border: '1px solid var(--green-dark)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--green-dark)',
      border: '1.5px solid var(--green-dark)',
    },
    'outline-light': {
      backgroundColor: 'transparent',
      color: 'var(--white)',
      border: '1.5px solid rgba(255,255,255,0.6)',
    },
    earth: {
      backgroundColor: 'var(--gold)',
      color: 'var(--white)',
      border: '1px solid var(--gold)',
      boxShadow: 'var(--shadow-sm)',
    },
    whatsapp: {
      backgroundColor: '#25d366',
      color: 'var(--white)',
      border: 'none',
      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--green-mid)',
      border: 'none',
      padding: '6px 12px',
    },
  };

  return (
    <button
      className={`btn btn-${variant} ${className}`}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {icon && <span className="btn-icon" style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
