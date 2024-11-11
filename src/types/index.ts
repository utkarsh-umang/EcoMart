export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  subCategory: string;
  rating: number;
  reviews: number;
  stock: number;
  variants?: {
    type: string;
    options: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  sustainable: boolean;
  vegan: boolean;
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number;
  sustainable: boolean;
  vegan: boolean;
  inStock: boolean;
}

export interface SortOption {
  label: string;
  value: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export interface Review {
  id: number;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'netbanking' | 'cod';
  label: string;
  icon: string;
}