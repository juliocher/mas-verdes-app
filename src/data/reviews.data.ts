import { ReviewItem } from '../types/review.types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Zoe Centro de Terapias',
    rating: 5,
    timeAgo: 'Hace 1 mes',
    quote: 'La mejor opción de comida saludable en Urubamba. La ensalada de hojas orgánicas con tomates cherry, palta, langostinos y flores comestibles es espectacular. La kombucha de kion es deliciosa y la atención es excelente.',
    avatarLetter: 'Z',
    avatarGradient: 'linear-gradient(135deg, var(--green-mid), var(--green-dark))',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Margarita Estrada',
    rating: 5,
    timeAgo: 'Hace 2 meses',
    quote: 'Un oasis de paz y salud. Los ingredientes van directo del huerto a la mesa y se nota en cada bocado. El postre de calabaza con chocolate es sorprendente y el uso de sabiduría ancestral en sus preparaciones es fascinante.',
    avatarLetter: 'M',
    avatarGradient: 'linear-gradient(135deg, #c9945a, var(--gold))',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Rina Estrada Huaman',
    rating: 5,
    timeAgo: 'Hace 2 meses',
    quote: 'Me fascinó la experiencia de hacer mi propio mix de mates medicinales y las ensaladas con flores comestibles curativas. Un ambiente inmejorable rodeado de montañas y naturaleza pura. ¡Totalmente recomendado!',
    avatarLetter: 'R',
    avatarGradient: 'linear-gradient(135deg, var(--green-light), var(--green-mid))',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Alan Estrada Huaman',
    rating: 5,
    timeAgo: 'Hace 2 meses',
    quote: 'Usan insumos nativos que usaban los incas: muña, moraya, y muchos más. Las hamburguesas vegetarianas son riquísimas y las limonadas orgánicas refrescantes. Todo en un ambiente rodeado de montañas. Una experiencia única en el Valle Sagrado.',
    avatarLetter: 'A',
    avatarGradient: 'linear-gradient(135deg, #497c55, #1b3322)',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Rashel Aguirre Achipa',
    rating: 5,
    timeAgo: 'Hace 8 meses',
    quote: 'Vine desde Bolivia y lo recomiendo al 100%. Ver las variedades de kale y lechugas en el huerto antes de que lleguen a tu plato es algo que no se olvida. Las ensaladas y kombuchas son exquisitas. ¡Volveré sin duda!',
    avatarLetter: 'R',
    avatarGradient: 'linear-gradient(135deg, #a4865e, #c5a880)',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Narda Aguirre',
    rating: 5,
    timeAgo: 'Hace 8 meses',
    quote: 'Una joya escondida en el Valle Sagrado. Pregunten por Dey para que les guíe en el tour privado por la huerta medicinal. La hamburguesa vegetariana es imperdible. Un concepto exclusivo y muy bien cuidado en todos sus detalles.',
    avatarLetter: 'N',
    avatarGradient: 'linear-gradient(135deg, #2c5234, #497c55)',
    verified: true
  }
];

export const GOOGLE_MAPS_DATA = {
  rating: 5.0,
  reviewsCount: 21,
  mapsUrl: 'https://www.google.com/maps/place/M%C3%A1s+verdes/@-13.2916662,-72.1378666,17z/data=!3m1!4b1!4m6!3m5!1s0x916dddac7b4412bd:0xa542f7dfd3d4c8ef!8m2!3d-13.2916662!4d-72.1378666!16s%2Fg%2F11nh486v8t'
};
