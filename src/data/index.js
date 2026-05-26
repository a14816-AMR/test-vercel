// ============================================================
// AquaWash — Static data (plans, services, stats, faqs)
// ============================================================

export const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: 19.90,
    accent: '#4a9eff',
    icon: '💧',
    washes: 2,
    popular: false,
    features: [
      'Lavagem exterior completa',
      'Enxaguamento desmineralizado',
      'Secagem manual',
      'Limpeza de vidros exteriores',
      'Cancelamento a qualquer momento',
    ],
    notIncluded: ['Limpeza interior', 'Cera protetora', 'Polimento'],
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 39.90,
    accent: '#00d4aa',
    icon: '✨',
    washes: 4,
    popular: true,
    features: [
      'Lavagem exterior completa',
      'Limpeza de interior',
      'Enxaguamento desmineralizado',
      'Secagem manual cuidada',
      'Aspiração gratuita',
      'Limpeza de vidros',
      'Cancelamento a qualquer momento',
    ],
    notIncluded: ['Cera protetora', 'Polimento'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 69.90,
    accent: '#ff9500',
    icon: '🏆',
    washes: 'Ilimitado',
    popular: false,
    features: [
      'Lavagens ilimitadas',
      'Exterior + interior completo',
      'Cera protetora mensal',
      'Polimento semestral',
      'Água desmineralizada premium',
      'Secagem detalhada',
      'Perfume de interior',
      'Prioridade de atendimento',
      'Cancelamento a qualquer momento',
    ],
    notIncluded: [],
  },
]

export const services = [
  {
    icon: '🚿',
    title: 'Lavagem Exterior',
    desc: 'Remoção completa de sujidade, pó e insetos com produtos de alta qualidade específicos para cada acabamento.',
  },
  {
    icon: '🧹',
    title: 'Limpeza Interior',
    desc: 'Aspiração detalhada, limpeza do painel, bancos e todos os recantos do habitáculo.',
  },
  {
    icon: '💎',
    title: 'Cera Protetora',
    desc: 'Proteção duradoura com cera carnaúba de alta qualidade que sela e brilha a pintura.',
  },
  {
    icon: '🌀',
    title: 'Polimento',
    desc: 'Restauração do brilho original da pintura, eliminando micro-riscos e oxidação.',
  },
  {
    icon: '🚗',
    title: 'Lavagem de Rodas',
    desc: 'Limpeza profunda de jantes e pneus com produtos específicos anti-travão.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly',
    desc: 'Produtos 100% biodegradáveis e sistema de recuperação e reutilização de água.',
  },
]

export const stats = [
  { value: '12.000+', label: 'Clientes satisfeitos' },
  { value: '98%',    label: 'Taxa de satisfação' },
  { value: '3',      label: 'Unidades no Porto' },
  { value: '8 anos', label: 'De experiência' },
]

export const faqs = [
  {
    q: 'Posso cancelar a mensalidade a qualquer momento?',
    a: 'Sim, sem compromisso. Pode cancelar quando quiser, sem taxas ou penalizações. A cobertura mantém-se até ao fim do período já pago.',
  },
  {
    q: 'As lavagens acumulam se não usar?',
    a: 'As lavagens dos planos Básico e Plus não acumulam para o mês seguinte. O plano Premium é ilimitado, por isso este ponto não se aplica.',
  },
  {
    q: 'Posso mudar de plano?',
    a: 'Sim! Pode fazer upgrade ou downgrade em qualquer momento. A alteração entra em vigor no próximo ciclo de faturação.',
  },
  {
    q: 'Os produtos são seguros para a pintura?',
    a: 'Absolutamente. Usamos apenas produtos certificados, desenvolvidos especificamente para cada tipo de acabamento, que preservam e protegem a pintura.',
  },
  {
    q: 'É necessário marcação prévia?',
    a: 'Recomendamos marcação pela app ou telefone. Aceitamos visitas sem marcação sujeitas a disponibilidade.',
  },
  {
    q: 'O serviço inclui garantia?',
    a: 'Sim. Se não ficar satisfeito com o resultado, refazemos o serviço gratuitamente. A sua satisfação é a nossa prioridade.',
  },
]

export const locations = [
  { name: 'AquaWash Boavista', address: 'Av. da Boavista, 1234 · Porto', hours: 'Seg–Sex 8h–20h' },
  { name: 'AquaWash Matosinhos', address: 'Rua de Serpa Pinto, 56 · Matosinhos', hours: 'Seg–Sáb 8h–19h' },
  { name: 'AquaWash Gaia', address: 'Av. da República, 789 · Vila Nova de Gaia', hours: 'Seg–Dom 9h–18h' },
]
