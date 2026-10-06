import React from 'react';
import { BLOG_POSTS_DATA } from '../data/blog.data';
import { BlogPost } from '../types/blog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/sections/PageHero';
import { Calendar, Clock, Tag, ArrowLeft } from '../components/ui/Icons';

export interface BlogPostPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate }) => {
  const post: BlogPost | undefined = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <p style={{ color: 'var(--text-mid)', fontSize: '1.1rem' }}>Artículo no encontrado.</p>
        <Button variant="primary" onClick={() => onNavigate('/blog')}>← Volver al Blog</Button>
      </div>
    );
  }

  const related = BLOG_POSTS_DATA.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div>
      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
      />

      {/* ===== ARTICLE BODY ===== */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Meta bar */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '36px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.88rem' }}>
              <Calendar size={15} /> {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '0.88rem' }}>
              <Clock size={15} /> {post.readTime}
            </span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="pale">
                  <Tag size={11} color="var(--green-mid)" /> {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '44px',
              boxShadow: 'var(--shadow-md)',
              aspectRatio: '16/7',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg';
              }}
            />
          </div>

          {/* Content paragraphs */}
          <article>
            {post.content.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-mid)',
                  lineHeight: 1.9,
                  marginBottom: '22px',
                  fontFamily: paragraph.match(/^\d\./) ? 'var(--font-sans)' : 'inherit',
                  paddingLeft: paragraph.match(/^\d\./) ? '16px' : '0',
                  borderLeft: paragraph.match(/^\d\./) ? '3px solid var(--gold)' : 'none',
                }}
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Back button */}
          <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid var(--border-light)' }}>
            <Button
              variant="outline"
              onClick={() => onNavigate('/blog')}
              icon={<ArrowLeft size={16} />}
            >
              Volver al Blog
            </Button>
          </div>
        </div>
      </section>

      {/* ===== RELATED POSTS ===== */}
      {related.length > 0 && (
        <section className="section section-white" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-label">Sigue leyendo</span>
              <h2 className="section-title">Artículos Relacionados</h2>
            </div>
            <div className="grid-2" style={{ maxWidth: '820px', margin: '0 auto' }}>
              {related.map((rp) => (
                <div
                  key={rp.id}
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--cream)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    cursor: 'pointer',
                  }}
                  onClick={() => onNavigate(`/blog/${rp.slug}`)}
                >
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={rp.image}
                      alt={rp.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg';
                      }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <Badge variant="pale" style={{ marginBottom: '10px' }}>{rp.category}</Badge>
                    <h4 style={{ fontSize: '1rem', color: 'var(--green-dark)', lineHeight: 1.4, marginBottom: '8px' }}>{rp.title}</h4>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{rp.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
