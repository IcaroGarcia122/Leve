export interface HighlightItem {
  id: string;
  name: string;
  emoji: string;
  categoryTitle: string;
  description: string;
  tagline: string;
  phoneTarget: 'confecção' | 'calçados';
  features: string[];
}

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'cmeb',
    name: 'CMeB',
    emoji: '✨',
    categoryTitle: 'Cama, Mesa & Banho',
    description: 'Edredons macios, lençóis de puro algodão, toalhas encorpadas, mantas térmicas e cortinas para renovar o aconchego do seu lar.',
    tagline: 'Conforto e qualidade incomparável para a sua casa',
    phoneTarget: 'confecção',
    features: [
      'Jogos de Cama Queen, Casal e Solteiro',
      'Edredons fofos & Mantas térmicas',
      'Toalhas de banho e rosto de alta absorção',
      'Caminhos de mesa, toalhas e utilidades'
    ]
  },
  {
    id: 'feminino',
    name: 'Feminino',
    emoji: '💖',
    categoryTitle: 'Moda Feminina',
    description: 'Blusas, vestidos leves, conjuntos elegantes, calças jeans com caimento impecável e novidades de todas as estações.',
    tagline: 'Tendências elegantes para o seu dia a dia e ocasiões especiais',
    phoneTarget: 'confecção',
    features: [
      'Vestidos e macacões confortáveis',
      'Jeans de alta elasticidade e alfaiataria',
      'T-shirts, camisas e blusas em viscose',
      'Casacos, jaquetas e cardigãs'
    ]
  },
  {
    id: 'bebe',
    name: 'Bebê',
    emoji: '👶',
    categoryTitle: 'Moda Bebê & Infantil',
    description: 'Bodies macios, macacões antialérgicos, conjuntinhos fofos e roupinhas que abraçam com carinho os primeiros passos.',
    tagline: 'Delicadeza, conforto e proteção para quem você mais ama',
    phoneTarget: 'confecção',
    features: [
      'Bodies e macacões 100% algodão',
      'Conjuntos de moletom quentinhos',
      'Enxoval infantil e mantinhas fofas',
      'Calçadinhos e meinhas antiderrapantes'
    ]
  },
  {
    id: 'vitrines',
    name: 'Vitrines',
    emoji: '🛍️',
    categoryTitle: 'Vitrines da Semana',
    description: 'As combinações mais pedidas e os looks em destaque na entrada da loja física em Pinhão. Peças selecionadas para você!',
    tagline: 'Os lançamentos mais comentados direto da nossa vitrine',
    phoneTarget: 'confecção',
    features: [
      'Looks completos prontos para vestir',
      'Combinações de cores da estação',
      'Acessórios e novidades semanais',
      'Edições limitadas a preços especiais'
    ]
  },
  {
    id: 'tenis-esport',
    name: 'Tênis Esport',
    emoji: '👟',
    categoryTitle: 'Tênis Esportivo',
    description: 'Amortecimento de alto impacto, tecidos respiráveis e marcas consagradas para caminhada, corrida e treinos.',
    tagline: 'Performance, resistência e leveza para as suas atividades',
    phoneTarget: 'calçados',
    features: [
      'Tênis masculinos e femininos com amortecimento',
      'Solados antiderrapantes e flexíveis',
      'Linhas leves para caminhada diária',
      'Modelos resistentes para treinos intensos'
    ]
  },
  {
    id: 'tenis-casual',
    name: 'Tênis Casual',
    emoji: '👟',
    categoryTitle: 'Tênis & Calçados Casuais',
    description: 'Sneakers urbanos, slip-ons versáteis, sapatilhas, rasteiras e sandálias que unem estilo atemporal ao conforto de caminhar o dia todo.',
    tagline: 'O calçado perfeito para qualquer hora do seu dia',
    phoneTarget: 'calçados',
    features: [
      'Sneakers brancos e modelos versáteis',
      'Sapatos sociais, mocassins e sapatilhas',
      'Sandálias rasteiras e de salto confortável',
      'Botas, coturnos e calçados para o inverno'
    ]
  },
  {
    id: 'fitness',
    name: 'Fitness',
    emoji: '🏋️‍♀️',
    categoryTitle: 'Moda Fitness',
    description: 'Leggings zero transparência, tops com sustentação, bermudas ciclista e regatas térmicas para treinar com liberdade e beleza.',
    tagline: 'Movimento, estilo e segurança nos seus treinos',
    phoneTarget: 'confecção',
    features: [
      'Leggings com cós alto e compressão ideal',
      'Tops anatômicos com boa sustentação',
      'Camisetas dry-fit respiráveis',
      'Conjuntos fitness monocromáticos e modernos'
    ]
  }
];
