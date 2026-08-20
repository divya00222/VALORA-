export interface NepalAddress {
  fullName: string;
  mobileNumber: string;
  email: string;
  province: string;
  district: string;
  municipality: string;
  wardNumber: string;
  tole: string;
  landmark?: string;
  instructions?: string;
}

export type NepalPaymentMethod = 'cod' | 'esewa' | 'khalti' | 'fonepay' | 'connectips' | 'bank' | 'card';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'crossbody' | 'shoulder' | 'tote' | 'satchel' | 'evening' | 'travel' | 'accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: { name: string; hex: string; image?: string }[];
  isNew?: boolean;
  isBestseller?: boolean;
  isOnSale?: boolean;
  inStock: boolean;
  description: string;
  materials: string;
  dimensions: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  selectedColors: string[];
  selectedMaterials: string[];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
  searchQuery: string;
  onlySale: boolean;
  onlyInStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}
