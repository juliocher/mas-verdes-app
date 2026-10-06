import React, { useState } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { RECIPES_DATA } from '../data/recipes.data';
import { RecipeItem, RecipeCategory } from '../types/recipe.types';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Clock, Users, Flame, Check, Sparkles, BookOpen, Utensils } from '../components/ui/Icons';

export interface SaboresPageProps {
  onNavigate: (path: string) => void;
}

export const SaboresPage: React.FC<SaboresPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<RecipeCategory | 'todos'>('todos');
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  const filteredRecipes = activeTab === 'todos'
    ? RECIPES_DATA
    : RECIPES_DATA.filter((r) => r.category === activeTab);

  const tabOptions: { id: RecipeCategory | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'infusiones', label: 'Infusiones Andinas' },
    { id: 'jugos', label: 'Jugos Naturales' },
    { id: 'ensaladas', label: 'Ensaladas & Huerto' },
  ];

  return (
    <div>
      <PageHero
        label="La Cocina de los Andes"
        title="Sabores de la Tierra"
        description="Descubre cómo transformar nuestras hierbas, flores y hortalizas de altura en preparaciones deliciosas, nutritivas y medicinales."
        breadcrumbs={[
          { label: 'Sabores de la Tierra' },
        ]}
      />

      {/* ===== 3 PILLARS BANNER ===== */}
      <section style={{ backgroundColor: 'var(--cream)', padding: '48px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-3" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: 'var(--green-dark)' }}>
                <Utensils size={30} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--green-dark)', marginBottom: '6px' }}>
                Ingredientes de Willoq
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Todas las recetas utilizan productos cultivados directamente en nuestros andenes.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: 'var(--green-dark)' }}>
                <BookOpen size={30} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--green-dark)', marginBottom: '6px' }}>
                Recetas Paso a Paso
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Instrucciones sencillas con tiempos, porciones y consejos de preparación culinaria.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: 'var(--green-dark)' }}>
                <Sparkles size={30} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--green-dark)', marginBottom: '6px' }}>
                Beneficios Validados
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-mid)', lineHeight: 1.6 }}>
                Cada preparación destaca su aporte de fitonutrientes, vitaminas y propiedades terapéuticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECIPES SECTION & TABS ===== */}
      <section className="section section-beige">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-label">Nuestras Preparaciones</span>
            <h2 className="section-title">Recetas con el Poder Andino</h2>
            <p className="section-subtitle">
              Selecciona una categoría para filtrar nuestras recetas saludables:
            </p>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
              {tabOptions.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: '10px 24px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      border: `1.5px solid ${isActive ? 'var(--green-dark)' : 'var(--border-light)'}`,
                      backgroundColor: isActive ? 'var(--green-dark)' : 'var(--white)',
                      color: isActive ? 'var(--white)' : 'var(--text-mid)',
                      boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recipes Grid */}
          <div className="grid-3">
            {filteredRecipes.map((recipe) => (
              <article
                key={recipe.id}
                className="hover-lift"
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'var(--green-dark)',
                      color: 'var(--white)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {recipe.categoryLabel}
                  </span>

                  <span
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      color: 'var(--green-dark)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Clock size={12} /> {recipe.time}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {recipe.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {recipe.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {recipe.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: 'var(--green-pale)',
                            color: 'var(--green-dark)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      Ver Receta Paso a Paso
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL DE DETALLE DE RECETA ===== */}
      <Modal
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        title={selectedRecipe?.title}
        headerImage={selectedRecipe?.image}
        headerImageAlt={selectedRecipe?.title}
        maxWidth="860px"
      >
        {selectedRecipe && (
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--green-pale)',
                color: 'var(--green-dark)',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                marginBottom: '10px',
              }}
            >
              {selectedRecipe.categoryLabel}
            </span>

            <h2 style={{ fontSize: '1.9rem', color: 'var(--green-dark)', marginBottom: '16px' }}>
              {selectedRecipe.title}
            </h2>

            {/* Meta Row */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '24px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                <Clock size={16} color="var(--gold-dark)" /> {selectedRecipe.time}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                <Users size={16} color="var(--gold-dark)" /> {selectedRecipe.servings}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-mid)' }}>
                <Flame size={16} color="var(--gold-dark)" /> Dificultad: {selectedRecipe.difficulty}
              </span>
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '28px' }}>
              {selectedRecipe.fullDesc}
            </p>

            {/* Ingredients */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-dark)', marginBottom: '14px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Ingredientes Requeridos
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                    <Check size={16} color="var(--green-mid)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong>{ing.name}</strong> — <span style={{ color: 'var(--text-mid)' }}>{ing.quantity}</span>
                      {ing.isFromGarden && (
                        <span style={{ marginLeft: '8px', fontSize: '0.72rem', color: 'var(--green-dark)', backgroundColor: 'var(--green-pale)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>
                          Huerto Willoq
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-dark)', marginBottom: '14px', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Preparación Paso a Paso
              </h4>
              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedRecipe.steps.map((step, idx) => (
                  <li key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Curious Fact if any */}
            {selectedRecipe.curiousFact && (
              <div style={{ backgroundColor: 'var(--beige)', padding: '20px', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--gold)', marginBottom: '28px' }}>
                <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.92rem', marginBottom: '6px' }}>
                  💡 {selectedRecipe.curiousFact.title}
                </strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  {selectedRecipe.curiousFact.content}
                </p>
              </div>
            )}

            {/* Nutritional Benefits */}
            <div style={{ backgroundColor: 'var(--green-pale)', padding: '20px', borderRadius: 'var(--radius-sm)', marginBottom: '28px' }}>
              <strong style={{ color: 'var(--green-dark)', display: 'block', fontSize: '0.9rem', marginBottom: '6px' }}>
                Beneficios Nutricionales:
              </strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                {selectedRecipe.nutritionalBenefits}
              </p>
            </div>

            {/* Featured Product link */}
            {selectedRecipe.featuredProduct && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--border-light)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '28px',
                }}
              >
                <img
                  src={selectedRecipe.featuredProduct.image}
                  alt={selectedRecipe.featuredProduct.name}
                  style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: 'var(--radius-xs)' }}
                />
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {selectedRecipe.featuredProduct.category}
                  </span>
                  <strong style={{ display: 'block', color: 'var(--green-dark)', fontSize: '0.92rem' }}>
                    {selectedRecipe.featuredProduct.name}
                  </strong>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedRecipe(null);
                    onNavigate(selectedRecipe.featuredProduct!.link);
                  }}
                >
                  Ver en Catálogo
                </Button>
              </div>
            )}

            <Button variant="outline" fullWidth onClick={() => setSelectedRecipe(null)}>
              Cerrar Receta
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};
