import { RecipeItem } from '../types/recipe.types';

export const RECIPES_DATA: RecipeItem[] = [
  {
    id: 'receta-hinojo-parrilla',
    slug: 'bulbo-de-hinojo-a-la-parrilla',
    title: 'Bulbo de Hinojo Asado a la Parrilla',
    category: 'ensaladas',
    categoryLabel: 'Hortalizas y Ensaladas',
    time: '25 min',
    servings: '4 personas',
    difficulty: 'Fácil',
    shortDesc: 'Bulbos frescos de hinojo asados con aceite de oliva extra virgen, limón del valle y sal rosada de Maras.',
    fullDesc: 'Una de las preparaciones más sorprendentes de la gastronomía andina contemporánea. Al aplicar calor intenso, los azúcares naturales del bulbo de hinojo se caramelizan creando una capa exterior dorada mientras el interior queda tierno y jugoso, suavizando su delicado aroma anisado.',
    tags: ['Gourmet', 'Vegetariano', 'Digestivo', 'Hinojo'],
    image: '/img/fotos/bulbo-hinojo.jpeg',
    galleryImages: [
      { url: '/img/fotos/bulbo-hinojo.jpeg', caption: 'Bulbos Frescos de Willoq', sub: 'Cosecha matutina' },
      { url: '/img/fotos/bulbo-hinojo-2.jpeg', caption: 'Corte Longitudinal', sub: 'Listo para sazonar' }
    ],
    ingredients: [
      { name: 'Bulbos de hinojo frescos de Willoq', quantity: '2 unidades grandes', isFromGarden: true },
      { name: 'Aceite de oliva extra virgen', quantity: '3 cucharadas' },
      { name: 'Jugo de limón fresco', quantity: '1 cucharada' },
      { name: 'Sal rosada de Maras con hierbas', quantity: '1 pizca al gusto', isFromGarden: true },
      { name: 'Pimienta negra recién molida', quantity: 'Al gusto' }
    ],
    steps: [
      'Lavar bien los bulbos y cortar los tallos superiores guardando las hojas plumosas para decorar.',
      'Cortar cada bulbo longitudinalmente en rodajas de 1 a 1.5 cm de grosor manteniendo la base unida.',
      'Pincelar generosamente ambos lados con el aceite de oliva, jugo de limón y sal rosada.',
      'Colocar sobre la parrilla bien caliente a fuego medio durante 5-7 minutos por lado hasta marcar las líneas doradas.',
      'Servir caliente espolvoreando las hojas verdes frescas picadas por encima.'
    ],
    nutritionalBenefits: 'Extraordinariamente rico en vitamina C, fibra dietética y potasio. Contiene anetol, fitonutriente natural con propiedades antiinflamatorias y carminativas reconocidas.',
    curiousFact: {
      title: 'El Secreto de la Caramelización',
      content: 'El calor transforma el sabor punzante del anís en notas dulces y aterciopeladas que armonizan perfectamente con pescados, carnes o ensaladas tibias.'
    },
    featuredProduct: {
      name: 'Sal Culinaria de Finas Hierbas',
      category: 'Sales Medicinales',
      link: '/sales',
      image: '/img/fotos/sal-culinaria.jpeg'
    }
  },
  {
    id: 'receta-kale-rizada',
    slug: 'kale-rizada-superalimento',
    title: 'Kale Rizada (Col Rizada Andina)',
    category: 'ensaladas',
    categoryLabel: 'Superalimentos de Huerta',
    time: '15 min',
    servings: '4 personas',
    difficulty: 'Muy Fácil',
    shortDesc: 'Hojas verdes rizadas y crujientes de altísima densidad nutricional cultivadas en los andenes de Willoq.',
    fullDesc: 'Cultivada a más de 3,200 msnm con agua pura de montaña y abonos orgánicos. Nuestra kale rizada concentra antioxidantes, clorofila y una textura crujiente insuperable.',
    tags: ['Superfood', 'Detox', 'Antioxidante', 'Raw'],
    image: '/img/fotos/kale-rizada.jpeg',
    galleryImages: [
      { url: '/img/fotos/kale-rizada.jpeg', caption: 'Hojas Frescas de Huerta', sub: 'Cosecha manual' },
      { url: '/img/fotos/kale-rizada-2.jpeg', caption: 'Ramillete de Altura', sub: 'Textura crujiente' }
    ],
    ingredients: [
      { name: 'Hojas frescas de Kale Rizada de Willoq', quantity: '1 ramillete grande (300g)', isFromGarden: true },
      { name: 'Aceite de oliva virgen', quantity: '2 cucharadas' },
      { name: 'Jugo de limón andino', quantity: '1/2 unidad' },
      { name: 'Palta madura en cubos', quantity: '1 unidad' },
      { name: 'Tomates cherry en mitades', quantity: '1 taza' },
      { name: 'Sal de Maras', quantity: 'Al gusto', isFromGarden: true }
    ],
    steps: [
      'Lavar y secar las hojas de kale. Retirar el tallo central fibroso.',
      'Picar las hojas con las manos en trozos medianos colocándolas en un bol.',
      'El secreto del chef: Masajear las hojas durante 2 minutos con el aceite y la sal para romper la fibra y dejarlas tiernas y brillantes.',
      'Incorporar la palta, tomates cherry y jugo de limón.',
      'Mezclar suavemente y servir de inmediato.'
    ],
    recommendedIdeas: [
      'Chips crocantes al horno a 150°C durante 12 minutos con toque de sal.',
      'Batidos verdes desintoxicantes con manzana verde y jengibre.',
      'Salteados rápidos al wok con ajo picado.'
    ],
    nutritionalBenefits: 'Considerado uno de los vegetales más densos en nutrientes del planeta. Sobresale en vitaminas A, C y K, calcio vegetal altamente biodisponible y bioflavonoides cardioprotectores.',
    featuredProduct: {
      name: 'Sal Rosada con Muña',
      category: 'Sales Medicinales',
      link: '/sales',
      image: '/img/fotos/sal-rosada.jpeg'
    }
  },
  {
    id: 'receta-ensalada-flores',
    slug: 'ensalada-campesina-flores-comestibles',
    title: 'Ensalada Campesina con Flores Comestibles',
    category: 'ensaladas',
    categoryLabel: 'Ensaladas Frescas',
    time: '15 min',
    servings: '2-3 personas',
    difficulty: 'Fácil',
    shortDesc: 'Mix de hojas de huerto, pensamientos andinos comestibles, palta criolla y vinagreta de cedrón.',
    fullDesc: 'La máxima expresión del huerto vivo en tu mesa. Pétalos coloridos de pensamientos y caléndula cultivados sin pesticidas se funden con verduras crujientes y un aderezo cítrico herbal.',
    tags: ['Flores Comestibles', 'Orgánico', 'Gourmet', 'Colorido'],
    image: '/img/fotos/plato-ensalada-1.png',
    ingredients: [
      { name: 'Hojas tiernas variadas (kale, escarola, acelga baby)', quantity: '4 tazas', isFromGarden: true },
      { name: 'Pensamientos andinos comestibles frescos', quantity: '10 flores enteras', isFromGarden: true },
      { name: 'Palta criolla en láminas', quantity: '1 unidad' },
      { name: 'Queso fresco andino artesanal', quantity: '100g en cubitos' },
      { name: 'Vinagreta ligera de infusión de cedrón y oliva', quantity: '4 cucharadas' }
    ],
    steps: [
      'Disponer la base de hojas verdes bien frías y escurridas.',
      'Distribuir los dados de palta y queso andino.',
      'Coronar el plato colocando delicadamente los pensamientos comestibles.',
      'Rociar la vinagreta justo antes de llevar a la mesa para preservar la turgencia floral.'
    ],
    nutritionalBenefits: 'Aporta rutina, betacarotenos, vitamina E vegetal y minerales esenciales. Un plato ligero que activa la digestión y alegra la vista.',
    featuredProduct: {
      name: 'Pensamientos Andinos Comestibles',
      category: 'Flores Medicinales',
      link: '/flores',
      image: '/img/fotos/Pensamiento.jpeg'
    }
  },
  {
    id: 'receta-infusion-manzanilla',
    slug: 'infusion-manzanilla-real-andina',
    title: 'Infusión Reconfortante de Manzanilla Real',
    category: 'infusiones',
    categoryLabel: 'Infusiones Andinas',
    time: '8 min',
    servings: '1 taza',
    difficulty: 'Muy Fácil',
    shortDesc: 'Flores enteras de manzanilla de Willoq reposadas en agua pura de montaña con un toque de miel silvestre.',
    fullDesc: 'El ritual nocturno por excelencia de las familias del Valle Sagrado. Su delicado vapor dorado calma el espíritu, desinflama la mucosa estomacal y prepara el cuerpo para un descanso profundo y reparador.',
    tags: ['Relajante', 'Antiinsomnio', 'Digestiva', 'Tradicional'],
    image: '/img/fotos/Manzanilla.jpeg',
    ingredients: [
      { name: 'Flores secas enteras de manzanilla real', quantity: '4-5 flores', isFromGarden: true },
      { name: 'Agua pura de manantial o filtrada', quantity: '250ml' },
      { name: 'Miel de abeja pura', quantity: '1 cucharadita (opcional)' }
    ],
    steps: [
      'Calentar el agua hasta punto de ebullición y retirar del fuego.',
      'Añadir las flores enteras a la taza o tetera.',
      'Cubrir con un plato o tapa durante 6 a 8 minutos para concentrar los aceites volátiles.',
      'Filtrar suavemente y disfrutar tibia.'
    ],
    nutritionalBenefits: 'Rica en apigenina, flavonoide que se une a receptores cerebrales promoviendo relajación muscular y somnolencia natural.',
    featuredProduct: {
      name: 'Manzanilla Real Andina',
      category: 'Hierbas Medicinales',
      link: '/hierbas',
      image: '/img/fotos/Manzanilla.jpeg'
    }
  },
  {
    id: 'receta-infusion-muna-cedron',
    slug: 'infusion-digestiva-muna-cedron',
    title: 'Infusión Digestiva Bicolor: Muña y Cedrón',
    category: 'infusiones',
    categoryLabel: 'Infusiones Andinas',
    time: '7 min',
    servings: '2 tazas',
    difficulty: 'Muy Fácil',
    shortDesc: 'La sinergia andina perfecta: la frescura mentolada de la muña combinada con la nota cítrica y relajante del cedrón.',
    fullDesc: 'Tradicionalmente indicada para después del almuerzo o la cena. Neutraliza la sensación de pesadez y acelera el vaciamiento gástrico.',
    tags: ['Digestiva', 'Cítrica', 'Menta', 'Soroche'],
    image: '/img/fotos/hero-principal.jpeg',
    ingredients: [
      { name: 'Hojas de Muña de la Sierra', quantity: '1 cucharadita', isFromGarden: true },
      { name: 'Hojas de Cedrón deshidratado', quantity: '3 hojas', isFromGarden: true },
      { name: 'Agua caliente a 95°C', quantity: '500ml' }
    ],
    steps: [
      'Colocar las hojas en una tetera de vidrio o cerámica.',
      'Verter el agua caliente y dejar reposar tapado por 5 minutos.',
      'Servir caliente sin necesidad de endulzantes debido a la dulzura natural del cedrón.'
    ],
    nutritionalBenefits: 'Aporta carminativos naturales que previenen gases y cólicos. Excelente para aclimatarse al aire fino de Cusco.',
    featuredProduct: {
      name: 'Muña de la Sierra',
      category: 'Hierbas Medicinales',
      link: '/hierbas',
      image: '/img/fotos/muna-sierra.jpeg'
    }
  },
  {
    id: 'receta-jugo-verde-andino',
    slug: 'jugo-verde-vitalidad-andina',
    title: 'Jugo Verde Energizante "Vitalidad Andina"',
    category: 'jugos',
    categoryLabel: 'Jugos Naturales',
    time: '10 min',
    servings: '2 vasos',
    difficulty: 'Fácil',
    shortDesc: 'Kale de altura, pepino criollo, manzana verde, jugo de limón y un toque de menta fresca.',
    fullDesc: 'Un concentrado líquido de clorofila pura y enzimas vivas para iniciar la mañana con energía limpia sin cafeína.',
    tags: ['Detox', 'Energizante', 'Clorofila', 'Vegano'],
    image: '/img/fotos/flores-07.jpeg',
    ingredients: [
      { name: 'Hojas de Kale Rizada sin tallo', quantity: '3 hojas grandes', isFromGarden: true },
      { name: 'Manzana verde con cáscara', quantity: '1 unidad' },
      { name: 'Pepino criollo mediano', quantity: '1/2 unidad' },
      { name: 'Hojas de hierba buena fresca', quantity: '5 hojas', isFromGarden: true },
      { name: 'Agua de coco o agua pura', quantity: '300ml' }
    ],
    steps: [
      'Lavar todos los vegetales y frutas con agua limpia.',
      'Cortar la manzana y pepino en trozos medianos.',
      'Colocar en la licuadora junto al kale, la hierba buena y el agua.',
      'Procesar a velocidad alta durante 60 segundos hasta homogeneizar.',
      'Servir fresco de inmediato para aprovechar todos sus nutrientes vivos.'
    ],
    nutritionalBenefits: 'Potente remineralizante celular, alcalinizante suave y shot concentrado de hierro y vitamina C vegetal.'
  }
];
