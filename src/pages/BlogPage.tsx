import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { BLOG_POSTS_DATA } from '../data/blog.data';
import { BlogPost } from '../types/blog.types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Calendar, Clock, Sparkles, Tag } from '../components/ui/Icons';

export interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);

  const featuredPost = BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];
  const regularPosts = BLOG_POSTS_DATA.filter((p) => p.id !== featuredPost.id);

  const categories = Array.from(new Set(BLOG_POSTS_DATA.map((p) => p.category)));

  const displayedPosts = activeCategoryFilter
    ? BLOG_POSTS_DATA.filter((p) => p.category === activeCategoryFilter)
    : regularPosts;

  return (
    <div>
      <PageHero
        label="Conocimiento y Bienestar"
        title="Blog Más Verdes"
        description="Artículos sobre botánica andina, medicina ancestral, alimentación saludable y el poder sanador de la Pachamama."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section section-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '48px' }} className="blog-layout">
            {/* Main column */}
            <div>
              {/* Featured Article */}
              {!activeCategoryFilter && (
                <div
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '48px',
                  }}
                >
                  <div style={{ height: '360px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg'; }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        backgroundColor: 'var(--gold)',
                        color: 'var(--white)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Sparkles size={14} /> Artículo Destacado
                    </span>
                  </div>

                  <div style={{ padding: '36px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                      <Badge variant="pale">{featuredPost.category}</Badge>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        <Calendar size={13} /> {featuredPost.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                        <Clock size={13} /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.7rem', color: 'var(--green-dark)', marginBottom: '14px', lineHeight: 1.3 }}>
                      {featuredPost.title}
                    </h2>

                    <p style={{ fontSize: '0.96rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '20px' }}>
                      {featuredPost.excerpt}
                    </p>

                    <Button variant="primary" onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}>
                      Leer Artículo Completo →
                    </Button>
                  </div>
                </div>
              )}

              {/* Regular Posts List */}
              <h3 style={{ fontSize: '1.4rem', color: 'var(--green-dark)', marginBottom: '28px' }}>
                {activeCategoryFilter ? `Categoría: ${activeCategoryFilter}` : 'Artículos Recientes'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {displayedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="hover-lift"
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'grid',
                      gridTemplateColumns: '260px 1fr',
                    }}
                  >
                    <div style={{ height: '100%', minHeight: '220px', overflow: 'hidden' }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).src = '/img/fotos/hero-principal.jpeg'; }}
                      />
                    </div>

                    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                          <Badge variant="pale">{post.category}</Badge>
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{post.date}</span>
                        </div>

                        <h4 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '10px', lineHeight: 1.35 }}>
                          {post.title}
                        </h4>

                        <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '16px' }}>
                          {post.excerpt}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onNavigate(`/blog/${post.slug}`)}
                        style={{ alignSelf: 'flex-start', padding: 0 }}
                      >
                        Leer Artículo →
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories Widget */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '32px',
                }}
              >
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-dark)', marginBottom: '16px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Categorías
                </h4>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>
                    <button
                      onClick={() => setActiveCategoryFilter(null)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.88rem',
                        fontWeight: activeCategoryFilter === null ? 700 : 500,
                        backgroundColor: activeCategoryFilter === null ? 'var(--green-pale)' : 'transparent',
                        color: activeCategoryFilter === null ? 'var(--green-dark)' : 'var(--text-mid)',
                      }}
                    >
                      Todas las categorías ({BLOG_POSTS_DATA.length})
                    </button>
                  </li>
                  {categories.map((cat, idx) => {
                    const count = BLOG_POSTS_DATA.filter((p) => p.category === cat).length;
                    const isActive = activeCategoryFilter === cat;
                    return (
                      <li key={idx}>
                        <button
                          onClick={() => setActiveCategoryFilter(cat)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 12px',
                            borderRadius: 'var(--radius-xs)',
                            fontSize: '0.88rem',
                            fontWeight: isActive ? 700 : 500,
                            backgroundColor: isActive ? 'var(--green-pale)' : 'transparent',
                            color: isActive ? 'var(--green-dark)' : 'var(--text-mid)',
                          }}
                        >
                          <span>{cat}</span>
                          <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Willoq Community Notice Widget */}
              <div
                style={{
                  backgroundColor: 'var(--green-dark)',
                  color: 'var(--white)',
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '10px' }}>
                  Sabiduría Viva de Willoq
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.86rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Todos nuestros artículos están inspirados en las prácticas de salud tradicionales de las familias quechuas de Cusco.
                </p>
                <Button
                  variant="earth"
                  size="sm"
                  fullWidth
                  onClick={() => onNavigate('/nosotros')}
                >
                  Conoce el Proyecto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE READING MODAL ===== */}
      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title}
        headerImage={selectedPost?.image}
        headerImageAlt={selectedPost?.title}
        maxWidth="840px"
      >
        {selectedPost && (
          <div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
              <Badge variant="gold">{selectedPost.category}</Badge>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-light)' }}>{selectedPost.date}</span>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-light)' }}>· {selectedPost.readTime}</span>
            </div>

            <h1 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '20px', lineHeight: 1.3 }}>
              {selectedPost.title}
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.85 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)', marginBottom: '24px' }}>
              {selectedPost.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    color: 'var(--text-mid)',
                    backgroundColor: 'var(--beige)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  <Tag size={12} /> #{tag}
                </span>
              ))}
            </div>

            <Button variant="outline" fullWidth onClick={() => setSelectedPost(null)}>
              Cerrar Artículo
            </Button>
          </div>
        )}
      </Modal>

      <style>{`
        @media (max-width: 900px) {
          .blog-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
