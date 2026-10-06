import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '../common/Breadcrumbs';

export interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  bgGradient?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  label,
  title,
  description,
  breadcrumbs,
  bgGradient = 'linear-gradient(135deg, var(--green-dark) 0%, var(--green-mid) 100%)',
}) => {
  return (
    <section
      style={{
        background: bgGradient,
        paddingTop: 'calc(var(--header-height) + 60px)',
        paddingBottom: '70px',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--white)',
        textAlign: 'center',
      }}
    >
      {/* Subtle radial ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 20%, rgba(197, 168, 128, 0.18) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span
          className="section-label"
          style={{
            color: 'var(--gold)',
            justifyContent: 'center',
            marginBottom: '14px',
          }}
        >
          {label}
        </span>

        <h1
          style={{
            color: 'var(--white)',
            fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
            marginBottom: '16px',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.88)',
            fontSize: '1.08rem',
            maxWidth: '680px',
            margin: '0 auto 20px',
            lineHeight: '1.8',
          }}
        >
          {description}
        </p>

        <Breadcrumbs items={breadcrumbs} />
      </div>
    </section>
  );
};
