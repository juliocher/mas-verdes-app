import React from 'react';
import { ChevronRight } from '../ui/Icons';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Migas de pan" style={{ marginTop: '16px' }}>
      <ol
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.84rem',
          color: 'rgba(255, 255, 255, 0.85)',
        }}
      >
        <li>
          <a
            href="/"
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              transition: 'var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
          >
            Inicio
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <ChevronRight size={14} color="var(--gold)" />
              </li>
              <li aria-current={isLast ? 'page' : undefined}>
                {isLast || !item.href ? (
                  <span style={{ color: 'var(--white)', fontWeight: 600 }}>{item.label}</span>
                ) : (
                  <a
                    href={item.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
