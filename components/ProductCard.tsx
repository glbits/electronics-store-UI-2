import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { CartContext } from '../App';
import { formatCurrency } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setIsCartOpen } = useContext(CartContext);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-2 right-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded">
            BEST SELLER
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{product.category}</p>
            <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-secondary transition-colors line-clamp-1">
              <Link to={`/product/${product.id}`}>
                {product.name}
              </Link>
            </h3>
          </div>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(product.price)}</p>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                className={i < Math.floor(product.rating) ? "" : "text-gray-300"} 
              />
            ))}
          </div>
          <p className="ml-1 text-[10px] text-gray-500">({product.reviews})</p>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-4 h-8">{product.shortDescription}</p>

        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center bg-gray-900 text-white py-2 px-4 rounded hover:bg-secondary transition-colors text-xs font-bold"
        >
          <ShoppingCart size={14} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};