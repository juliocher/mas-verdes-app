export type RecipeCategory = 'infusiones' | 'jugos' | 'ensaladas';

export interface Ingredient {
  name: string;
  quantity: string;
  note?: string;
  isFromGarden?: boolean;
}

export interface RecipeItem {
  id: string;
  slug: string;
  title: string;
  category: RecipeCategory;
  categoryLabel: string;
  time: string;
  servings: string;
  difficulty: 'Muy Fácil' | 'Fácil' | 'Media' | 'Avanzada';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: string;
  galleryImages?: { url: string; caption: string; sub?: string }[];
  ingredients: Ingredient[];
  steps: string[];
  recommendedIdeas?: string[];
  nutritionalBenefits: string;
  curiousFact?: { title: string; content: string };
  featuredProduct?: {
    name: string;
    category: string;
    link: string;
    image: string;
  };
}
