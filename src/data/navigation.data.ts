export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  children?: { id: string; label: string; href: string }[];
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'nosotros', label: 'Nosotros', href: '/nosotros' },
  {
    id: 'coleccion',
    label: 'Nuestra Colección',
    href: '/coleccion',
    children: [
      { id: 'hierbas', label: 'Hierbas Medicinales', href: '/hierbas' },
      { id: 'flores', label: 'Flores Medicinales', href: '/flores' },
      { id: 'sales', label: 'Sales Medicinales', href: '/sales' },
      { id: 'muna', label: 'Variedades de Muña', href: '/muna' },
    ]
  },
  { id: 'sabores', label: 'Sabores de la Tierra', href: '/sabores' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contacto', label: 'Contacto', href: '/contacto' },
];

export const FOOTER_COLLECTION_LINKS = [
  { label: 'Hierbas Medicinales', href: '/hierbas' },
  { label: 'Flores Medicinales', href: '/flores' },
  { label: 'Sales Medicinales', href: '/sales' },
  { label: 'Variedades de Muña', href: '/muna' },
];

export const FOOTER_STAR_VARIETIES = [
  { label: 'Muña de la Sierra', href: '/hierbas#muna-de-la-sierra' },
  { label: 'Muña Blanca', href: '/hierbas#muna-blanca' },
  { label: 'Muña Negra', href: '/hierbas#muna-negra' },
  { label: 'Manzanilla Real', href: '/hierbas#manzanilla-real-andina' },
  { label: 'Rosas de la Cordillera', href: '/flores#rosas-de-la-cordillera' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mas_verdes_in_valley_urubamba?utm_source=qr&igsh=ZDY1Zjk1aXJsc2di',
  googleMaps: 'https://www.google.com/maps/place/M%C3%A1s+verdes/@-13.2916662,-72.1378666,17z/data=!3m1!4b1!4m6!3m5!1s0x916dddac7b4412bd:0xa542f7dfd3d4c8ef!8m2!3d-13.2916662!4d-72.1378666!16s%2Fg%2F11nh486v8t',
  whatsapp: 'https://wa.me/51993028601',
  phone: '+51 993 028 601',
  location: 'Comunidad de Willoq, Urubamba, Cusco, Perú',
};
