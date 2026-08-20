import { Product } from '../types';

// Using our custom generated images + high resolution curated luxury handbag photography
import heroHandbagImg from '../assets/images/hero_fashion_handbag_1787178377040.jpg';
import pinkSatchelImg from '../assets/images/pink_satchel_bag_1787178388288.jpg';
import shoulderModelImg from '../assets/images/shoulder_model_bag_1787178401537.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'lumana-01',
    name: 'Aarya Structured Tote',
    subtitle: 'Refined architectural silhouette for the modern Kathmandu professional',
    category: 'tote',
    price: 8990,
    originalPrice: 10500,
    rating: 4.9,
    reviewCount: 42,
    images: [
      heroHandbagImg,
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Heritage Tan', hex: '#8C6239' },
      { name: 'Onyx Black', hex: '#1A1A1A' }
    ],
    isNew: true,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'Designed for the urban rhythm of Kathmandu, the Aarya Tote blends traditional leather craftsmanship with modern utility. Spacious enough for a 14" laptop and daily essentials.',
    materials: 'Premium full-grain leather, Solid brass hardware',
    dimensions: '14" W x 11" H x 5.5" D',
    features: [
      'Reinforced leather handles',
      'Padded laptop compartment',
      'Internal smartphone & pen organizer',
      'Hand-painted edge finishing'
    ]
  },
  {
    id: 'lumana-02',
    name: 'Mira Mini Crossbody',
    subtitle: 'Compact elegance for weekend strolls and evening plans',
    category: 'crossbody',
    price: 4490,
    rating: 4.8,
    reviewCount: 29,
    images: [
      pinkSatchelImg,
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Lush Magenta', hex: '#D81B68' },
      { name: 'Soft Blush', hex: '#F8E8ED' }
    ],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'The Mira Mini is a statement of minimalist luxury. Its sculptural form and vibrant palette make it the perfect companion for modern Nepalese celebrations.',
    materials: 'Supple Nappa leather, 18k gold-plated hardware',
    dimensions: '8" W x 6" H x 3" D',
    features: [
      'Adjustable slender shoulder strap',
      'Signature turn-lock closure',
      'Soft micro-suede lining',
      'Internal card holder slots'
    ]
  },
  {
    id: 'lumana-03',
    name: 'Sora Everyday Shoulder',
    subtitle: 'Graceful hobo silhouette in buttery soft pebbled leather',
    category: 'shoulder',
    price: 6500,
    rating: 4.7,
    reviewCount: 54,
    images: [
      shoulderModelImg,
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Forest Green', hex: '#2D4B3F' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: false,
    inStock: true,
    description: 'Effortless and slouchy, the Sora bag drapes perfectly against the body. Handcrafted for longevity, it develops a beautiful patina over time.',
    materials: 'Pebbled Italian leather, Brushed gold accents',
    dimensions: '13" W x 10" H x 4.5" D',
    features: [
      'Ergonomic shoulder strap',
      'Magnetic top snap closure',
      'Wide-opening main compartment',
      'Protective dust bag included'
    ]
  },
  {
    id: 'lumana-04',
    name: 'Niva Soft Carryall',
    subtitle: 'Spacious multi-compartment bag for the busy multi-tasker',
    category: 'tote',
    price: 7990,
    originalPrice: 8500,
    rating: 4.95,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Deep Burgundy', hex: '#800020' },
      { name: 'Slate Gray', hex: '#708090' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'The Niva is designed for those who carry their world with them. Featuring intuitive pockets and a modular interior, it adapts to your needs.',
    materials: 'Full-grain calfskin, Water-resistant interior',
    dimensions: '15" W x 12" H x 6" D',
    features: [
      'Dual exterior slip pockets',
      'Central zippered security pocket',
      'Integrated key leash',
      'Removable organizer insert'
    ]
  },
  {
    id: 'lumana-05',
    name: 'Vanya Evening Mini',
    subtitle: 'Sculptural frame bag with jewel-grade hardware',
    category: 'evening',
    price: 5990,
    rating: 5.0,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Gold Leaf', hex: '#D4AF37' },
      { name: 'Ruby', hex: '#A80F4F' }
    ],
    isNew: true,
    isBestseller: true,
    isOnSale: false,
    inStock: true,
    description: 'A masterpiece of form and function. The Vanya is inspired by architectural lines of old Kathmandu palaces, reimagined for the contemporary woman.',
    materials: 'Metallic leather finish, Solid brass frame',
    dimensions: '9" W x 7" H x 3.5" D',
    features: [
      'Removable gold chain strap',
      'Luxurious silk-satin lining',
      'Internal vanity mirror',
      'Limited edition artisan series'
    ]
  },
  {
    id: 'lumana-06',
    name: 'Riya City Tote',
    subtitle: 'Minimalist vertical tote for sleek urban navigation',
    category: 'tote',
    price: 4990,
    rating: 4.6,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Stone', hex: '#A8A8A8' }
    ],
    isNew: false,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'Clean, lightweight, and incredibly durable. The Riya Tote is made from premium canvas with leather reinforcements, built to withstand daily use.',
    materials: 'Reinforced canvas, Leather grab handles',
    dimensions: '12" W x 15" H x 4" D',
    features: [
      'Flat-packable design',
      'Internal zippered valuables pocket',
      'Reinforced base panel',
      'Open-top quick access'
    ]
  }
];
