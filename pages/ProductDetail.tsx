import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Share2, Shield, ArrowLeft } from 'lucide-react';
import { MOCK_PRODUCTS, formatCurrency } from '../constants';
import { CartContext } from '../App';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, setIsCartOpen } = useContext(CartContext);
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/catalog" className="text-secondary hover:underline font-bold">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/catalog" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 font-medium transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Catalog
      </Link>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-square rounded-2xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-white rounded-lg flex items-center justify-center cursor-pointer border hover:border-secondary transition-colors overflow-hidden">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 lg:mt-0 px-4 sm:px-0">
          <div className="mb-6">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">{product.brand}</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mt-2">{product.name}</h1>
          </div>
          
          <div className="flex items-center mb-8">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-gray-300"} />
              ))}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-500">{product.reviews} customer reviews</span>
          </div>

          <div className="flex items-baseline gap-4 mb-8">
             <p className="text-4xl font-bold text-gray-900">{formatCurrency(product.price)}</p>
             {product.originalPrice && <p className="text-xl text-gray-400 line-through">{formatCurrency(product.originalPrice)}</p>}
          </div>

          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Product Overview</h3>
            <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 text-sm font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
               <Shield size={18} /> {product.stock > 0 ? 'In Stock & Shipping Immediately' : 'Temporarily Out of Stock'}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary border border-transparent rounded-xl py-4 px-8 flex items-center justify-center text-lg font-bold text-white hover:bg-gray-800 transition-all shadow-lg active:scale-95"
            >
              <ShoppingCart className="mr-3" size={24} /> Add to Cart
            </button>
            <button
              type="button"
              className="p-4 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Share2 size={24} />
            </button>
          </div>

          {/* Specs */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-white border border-gray-100 p-4 rounded-lg flex justify-between">
                  <span className="font-bold text-gray-500 text-sm uppercase tracking-wide">{key}</span>
                  <span className="text-gray-900 font-medium text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-16 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};