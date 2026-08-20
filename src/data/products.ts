import { Product } from '../types';

// Using our custom generated images + high resolution curated luxury handbag photography
import heroHandbagImg from '../assets/images/hero_fashion_handbag_1787178377040.jpg';
import pinkSatchelImg from '../assets/images/pink_satchel_bag_1787178388288.jpg';
import shoulderModelImg from '../assets/images/shoulder_model_bag_1787178401537.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'valora-01',
    name: 'Artisan Exquisite Beaded Evening Bag',
    subtitle: 'Hand-embroidered vintage silhouette with chain strap',
    category: 'evening',
    price: 99.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Antique Bronze', hex: '#8C6239' },
      { name: 'Midnight Black', hex: '#1A1A1A' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'Crafted with intricate glass beadwork on fine velvet, this evening clutch features a classic kiss-lock clasp and a removable delicate gold chain strap for versatile hand or shoulder wear.',
    materials: 'Velvet, Hand-beaded glass, Polished brass hardware',
    dimensions: '9.5" W x 6" H x 2.5" D',
    features: [
      'Hand-stitched metallic bead pattern',
      'Removable 22" gold shoulder chain',
      'Interior silk slip pocket',
      'Secure frame clasp closure'
    ]
  },
  {
    id: 'valora-02',
    name: "Artisan's Woven Carpet Tote",
    subtitle: 'Tapestry woven weekend shopper with rolled leather handles',
    category: 'tote',
    price: 60.00,
    rating: 4.8,
    reviewCount: 29,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Terracotta Floral', hex: '#B85235' },
      { name: 'Olive Jacquard', hex: '#556B2F' }
    ],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'Inspired by traditional heirloom tapestries, this spacious tote blends rich textured textiles with durable full-grain leather straps. Ideal for weekend market runs and daily errands.',
    materials: 'Cotton tapestry weave, Vegetable-tan leather handles',
    dimensions: '15" W x 12" H x 6" D',
    features: [
      'Durable jacquard woven body',
      'Reinforced leather corner pads',
      'Double magnetic closure',
      'Fits 15-inch laptop and daily essentials'
    ]
  },
  {
    id: 'valora-03',
    name: "Artisan's Leather Wallet Tote",
    subtitle: 'Structured everyday tote with integrated wallet compartment',
    category: 'tote',
    price: 78.00,
    rating: 4.7,
    reviewCount: 54,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Cognac Brown', hex: '#964B00' },
      { name: 'Espresso', hex: '#3B2F2F' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: false,
    inStock: true,
    description: 'An architectural everyday tote crafted from burnished Italian leather. Features an exterior RFID-blocking wallet organizer with 12 card slots and zippered coin pouch.',
    materials: 'Top-grain Italian calfskin, Brushed brass hardware',
    dimensions: '14" W x 11.5" H x 5" D',
    features: [
      'Built-in front zip wallet compartment',
      'Padded central iPad sleeve',
      'Protective metal feet on base',
      'Water-resistant micro-suede lining'
    ]
  },
  {
    id: 'valora-04',
    name: 'Boyd Edge Designer Carpet Duffle',
    subtitle: 'Weekender travel duffle in crimson embossed finish',
    category: 'travel',
    price: 199.00,
    originalPrice: 210.00,
    rating: 4.95,
    reviewCount: 88,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Ruby Crimson', hex: '#A80F4F' },
      { name: 'Onyx Black', hex: '#111111' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'The ultimate getaway bag. Built with rich embossed crimson leather and spacious dual zip compartments. Perfectly sized as a cabin carry-on with detachable shoulder pad.',
    materials: 'Embossed grain leather, Heavy-duty YKK zippers',
    dimensions: '20" W x 12" H x 9.5" D',
    features: [
      'TSA-friendly cabin carry-on dimensions',
      'Separate zippered shoe compartment',
      'Detachable padded leather shoulder strap',
      'Monogrammable luggage tag included'
    ]
  },
  {
    id: 'valora-05',
    name: 'Brooklyn Heights Satchel',
    subtitle: 'Slouchy navy hobo bag with slouchy relaxed drape',
    category: 'shoulder',
    price: 40.00,
    rating: 4.6,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#1B263B' },
      { name: 'Soft Taupe', hex: '#8B8580' }
    ],
    isNew: false,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'Effortless cool meets functional daily storage. Made from ultra-soft supple pebbled leather that drapes gracefully against your body.',
    materials: 'Pebbled nappa leather, Silver-tone hardware',
    dimensions: '13.5" W x 10" H x 4.5" D',
    features: [
      'Comfortable wide shoulder strap',
      'Internal zippered security pocket',
      'Key leash attachment',
      'Magnetic top snap closure'
    ]
  },
  {
    id: 'valora-06',
    name: 'Valora Classic Flap Cover Bag',
    subtitle: 'Quilted leather shoulder bag with convertible gold chain',
    category: 'crossbody',
    price: 170.00,
    rating: 5.0,
    reviewCount: 112,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Signature Magenta', hex: '#D81B68' },
      { name: 'Classic Black', hex: '#111111' },
      { name: 'Ivory White', hex: '#FFFDD0' }
    ],
    isNew: true,
    isBestseller: true,
    isOnSale: false,
    inStock: true,
    description: 'A timeless silhouette defined by signature diamond quilting and a turn-lock front seal. Wear it doubled over the shoulder or single-strap as a crossbody.',
    materials: 'Supple lambskin leather, 24k gold-plated hardware',
    dimensions: '10" W x 6.5" H x 3" D',
    features: [
      'Convertible chain and leather strap',
      'Iconic turn-lock flap seal',
      'Back exterior slip pocket',
      'Double interior compartment'
    ]
  },
  {
    id: 'valora-07',
    name: 'Dakine Grid Messenger Satchel',
    subtitle: 'Plaid canvas messenger bag with adjustable shoulder strap',
    category: 'crossbody',
    price: 120.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewCount: 19,
    images: [
      'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Plaid Blue', hex: '#2A4365' },
      { name: 'Charcoal Grid', hex: '#4A5568' }
    ],
    isNew: false,
    isBestseller: false,
    isOnSale: true,
    inStock: true,
    description: 'Preppy plaid pattern combined with water-resistant cotton canvas and genuine leather trims. Features a magnetic quick-release flap for busy commuters.',
    materials: 'Waxed cotton canvas, Leather trim',
    dimensions: '12" W x 9" H x 3.5" D',
    features: [
      'Adjustable webbing shoulder strap',
      'Front quick-access pockets under flap',
      'Internal organizer for pens & phone',
      'Waterproof nylon interior'
    ]
  },
  {
    id: 'valora-08',
    name: 'Doppio Pocket Canvas Tote',
    subtitle: 'Dual pocket structural shopper in crisp indigo blue canvas',
    category: 'tote',
    price: 165.00,
    rating: 4.9,
    reviewCount: 47,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Indigo Blue', hex: '#1D3557' },
      { name: 'Natural Oatmeal', hex: '#E2D3C1' }
    ],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'Architectural minimalism featuring two exterior utility patch pockets and sturdy tubular grab handles. Hand-stitched with heavy thread for supreme durability.',
    materials: 'Heavyweight organic canvas, Bridle leather handles',
    dimensions: '16" W x 13" H x 6" D',
    features: [
      'Dual front exterior sleeve pockets',
      'Reinforced box-stitched handles',
      'Internal zip pocket & bottle sleeve',
      'Flat rigid bottom with metal studs'
    ]
  },
  {
    id: 'valora-09',
    name: 'Atelier Dome Magenta Satchel',
    subtitle: 'Structured Italian leather dome bag in signature fuchsia',
    category: 'satchel',
    price: 215.00,
    originalPrice: 250.00,
    rating: 5.0,
    reviewCount: 76,
    images: [
      pinkSatchelImg,
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Vivid Fuchsia', hex: '#D81B68' },
      { name: 'Blush Pink', hex: '#F8E8ED' },
      { name: 'Polished Black', hex: '#111111' }
    ],
    isNew: true,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'Our flagship dome satchel handcrafted in Florence. Features hand-painted edge finishing, dual top handles, and a detachable long shoulder cross-strap.',
    materials: 'Full-grain Italian calfskin, Polished 18k gold hardware',
    dimensions: '11.5" W x 9" H x 5" D',
    features: [
      'Hand-painted leather edges',
      'Two-way smooth zip closure',
      'Detachable adjustable cross strap',
      'Includes signature dust bag & care kit'
    ]
  },
  {
    id: 'valora-10',
    name: 'Sienna Executive Shoulder Tote',
    subtitle: 'Clean architectural shoulder bag with gold chain accent',
    category: 'shoulder',
    price: 185.00,
    rating: 4.85,
    reviewCount: 62,
    images: [
      shoulderModelImg,
      heroHandbagImg
    ],
    colors: [
      { name: 'Camel Tan', hex: '#C19A6B' },
      { name: 'Nero Black', hex: '#000000' }
    ],
    isNew: false,
    isBestseller: true,
    isOnSale: false,
    inStock: true,
    description: 'Designed for the modern professional. Sleek rectangular lines, high-grade leather construction, and a jewelry-grade gold chain strap accent.',
    materials: 'Smooth box calf leather, Gold-plated stainless chain',
    dimensions: '13" W x 10" H x 4" D',
    features: [
      'Padded sleeve fits 13" MacBook Pro',
      'Hidden magnetic key pocket',
      'Ultra-lightweight ergonomic shoulder drop',
      'Scratch-resistant leather treatment'
    ]
  },
  {
    id: 'valora-11',
    name: 'Atelier Grand Travel & City Bag',
    subtitle: 'Dual-tone luxury carryall with double top handles',
    category: 'travel',
    price: 240.00,
    originalPrice: 280.00,
    rating: 4.9,
    reviewCount: 94,
    images: [
      heroHandbagImg,
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Warm Cognac & Espresso', hex: '#8C6239' },
      { name: 'Cream & Black', hex: '#EAE6DF' }
    ],
    isNew: true,
    isBestseller: true,
    isOnSale: true,
    inStock: true,
    description: 'As featured on our campaign hero. Two-tone premium leather construction with spacious interior pockets and refined side expansion snaps.',
    materials: 'Vegetable-tanned calfskin & suede paneling',
    dimensions: '17" W x 12.5" H x 7.5" D',
    features: [
      'Side expandable brass snap buttons',
      'Central zippered divider panel',
      'Luggage sleeve for trolley handles',
      'Five protective brass feet'
    ]
  },
  {
    id: 'valora-12',
    name: 'Marlow Woven Leather Crossbody',
    subtitle: 'Hand-woven lattice pattern with subtle magnetic flap',
    category: 'crossbody',
    price: 135.00,
    rating: 4.75,
    reviewCount: 38,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
    ],
    colors: [
      { name: 'Honey Tan', hex: '#D2B48C' },
      { name: 'Sage Green', hex: '#8F9779' }
    ],
    isNew: true,
    isBestseller: false,
    isOnSale: false,
    inStock: true,
    description: 'Artisanal basket weave technique crafted strip by strip. Ultra-lightweight with an adjustable slender shoulder strap.',
    materials: 'Intrecciato hand-woven leather',
    dimensions: '9" W x 6.5" H x 2.5" D',
    features: [
      'Seamless hand-woven exterior',
      'Breathable organic cotton lining',
      'Adjustable pin-buckle strap',
      'Internal card slot panel'
    ]
  }
];
