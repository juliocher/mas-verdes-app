export type RoutePath =
  | '/'
  | '/nosotros'
  | '/coleccion'
  | '/hierbas'
  | '/flores'
  | '/sales'
  | '/muna'
  | '/sabores'
  | '/blog'
  | '/contacto'
  | '/reclamaciones'
  | '/politicas';

export interface RouteConfig {
  path: RoutePath;
  title: string;
}

export const ROUTES: Record<string, RouteConfig> = {
  '/': { path: '/', title: 'Más Verdes | Hierbas Medicinales y Flores Orgánicas del Cusco' },
  '/nosotros': { path: '/nosotros', title: 'Sobre Nosotros | Nuestra Historia y Propósito Andino - Más Verdes' },
  '/coleccion': { path: '/coleccion', title: 'Nuestra Colección | Hierbas, Flores y Sales Medicinales — Más Verdes' },
  '/hierbas': { path: '/hierbas', title: 'Hierbas Medicinales de Cusco | Catálogo Orgánico - Más Verdes' },
  '/flores': { path: '/flores', title: 'Flores Frescas de Cusco | Galería y Pedidos - Más Verdes' },
  '/sales': { path: '/sales', title: 'Sales Medicinales Andinas | Más Verdes — Cusco, Perú' },
  '/muna': { path: '/muna', title: 'Variedades de Muña Andina | Más Verdes — Cusco, Perú' },
  '/sabores': { path: '/sabores', title: 'Sabores de la Tierra | Recetas Naturales con Hierbas Andinas — Más Verdes' },
  '/blog': { path: '/blog', title: 'Blog | Bienestar Natural y Plantas Medicinales Andinas — Más Verdes' },
  '/contacto': { path: '/contacto', title: 'Contacto | Pedidos y Asesoría Botánica Directa - Más Verdes' },
  '/reclamaciones': { path: '/reclamaciones', title: 'Libro de Reclamaciones | Más Verdes — Willoq, Cusco' },
  '/politicas': { path: '/politicas', title: 'Políticas, Envíos y Privacidad | Más Verdes — Cusco, Perú' },
};
