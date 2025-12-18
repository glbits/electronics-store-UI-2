import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock, Award } from 'lucide-react';
import { CATEGORIES, MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  const bestSellers = MOCK_PRODUCTS.filter(p => p.isBestSeller);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=2000" 
            alt="Electronics Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:w-2/3 lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded bg-accent/20 text-accent text-sm font-bold mb-6 tracking-widest uppercase">Premium Electronics Store</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Empowering Your <br />
              <span className="text-accent">Electrical Needs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Explore India's most trusted selection of high-performance electrical supplies, smart lighting, and industrial tools. Engineered for safety and durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-secondary hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/30 active:scale-95">
                Start Shopping
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 text-lg font-bold rounded-xl text-white hover:bg-white hover:text-primary transition-all backdrop-blur-md">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-2xl text-secondary mb-5">
              <ShieldCheck size={36} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Full Warranty</h3>
            <p className="text-sm text-gray-500 mt-2">Certified protection on all electronics</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-50 p-4 rounded-2xl text-accent mb-5">
              <Truck size={36} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Express Delivery</h3>
            <p className="text-sm text-gray-500 mt-2">Free shipping on orders over ₹1,999</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-50 p-4 rounded-2xl text-green-600 mb-5">
              <Award size={36} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">ISI Certified</h3>
            <p className="text-sm text-gray-500 mt-2">100% genuine quality standards</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-50 p-4 rounded-2xl text-purple-600 mb-5">
              <Clock size={36} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">Technical experts ready to help</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
            <p className="text-gray-500 mt-1">Find exactly what your project needs</p>
          </div>
          <Link to="/catalog" className="text-secondary hover:text-blue-700 font-bold flex items-center gap-2 group">
            See All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/catalog?category=${cat.id}`} className="group block text-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-secondary transition-all">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-secondary transition-colors text-lg">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Best Sellers</h2>
            <p className="text-gray-500 mt-2 text-lg">Our most trusted and highly-rated products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[40px] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-12 hidden lg:block opacity-20">
             <ShieldCheck size={200} className="text-accent" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-12 md:p-20 md:w-3/5 z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-accent text-primary text-xs font-bold mb-6">FESTIVE SEASON SALE</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Smart Home <br />Starter Bundle</h2>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                Transform your living space with our all-in-one smart kit. Includes premium smart bulbs, switches, and central hub. Save up to 25%.
              </p>
              <Link to="/catalog" className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95 inline-block">
                View Bundle Deal
              </Link>
            </div>
            <div className="md:w-2/5 w-full h-80 md:h-[600px] relative">
               <img 
                src="https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1200" 
                alt="Smart Home"
                className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent md:block hidden" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};