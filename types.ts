export interface Product {
  id: string;
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  specs: Record<string, string>;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

export enum SortOption {
  Relevance = 'relevance',
  PriceLowHigh = 'price_asc',
  PriceHighLow = 'price_desc',
  Rating = 'rating',
}