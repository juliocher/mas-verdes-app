export type ProductCategory = 'hierbas' | 'flores' | 'sales' | 'muna';

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  scientificName?: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  effects?: string;
  clinicalEffects?: string;
  benefits: string[];
  image: string;
  gallery?: string[];
  altitude?: string;
  origin?: string;
  howToUse?: string;
  storage?: string;
  featured?: boolean;
  price?: number; // Precio sugerido en Soles (S/.)
  unit?: string;  // e.g. 'Bolsa 50g', 'Frasco 100g', 'Ramillete'
  stock?: number; // Unidades disponibles en stock (por defecto disponible)
}

