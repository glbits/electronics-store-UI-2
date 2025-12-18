import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, SearchX } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES, formatCurrency } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { SortOption } from '../types';

export const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q');

  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.Relevance);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    let filtered = MOCK_PRODUCTS;

    // Filter by Search Query
    if (queryParam) {
      const q = queryParam.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by Price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortBy === SortOption.PriceLowHigh) {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === SortOption.PriceHighLow) {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === SortOption.Rating) {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    setProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, queryParam]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
        setSelectedCategory('all');
    }
  }, [categoryParam]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 10000]);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-gray-200 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            {queryParam ? `Results for "${queryParam}"` : (selectedCategory === 'all' ? 'All Products' : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Products')}
          </h1>
          {queryParam && products.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">{products.length} products found</p>
          )}
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative inline-block text-left mr-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md bg-white border cursor-pointer"
            >
              <option value={SortOption.Relevance}>Relevance</option>
              <option value={SortOption.PriceLowHigh}>Price: Low to High</option>
              <option value={SortOption.PriceHighLow}>Price: High to Low</option>
              <option value={SortOption.Rating}>Top Rated</option>
            </select>
          </div>
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-gray-500 flex items-center gap-2 border rounded-md px-3"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter size={20} /> <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
        {/* Filters - Desktop */}
        <div className={`lg:block ${showMobileFilters ? 'block' : 'hidden'} space-y-8 bg-white md:bg-transparent p-4 md:p-0 rounded-xl`}>
          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase border-b pb-2 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    if (queryParam) setSearchParams({ q: queryParam });
                    else setSearchParams({});
                  }}
                  className={`text-sm transition-colors ${selectedCategory === 'all' ? 'text-secondary font-bold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  All Categories
                </button>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      if (queryParam) setSearchParams({ category: cat.id, q: queryParam });
                      else setSearchParams({ category: cat.id });
                    }}
                    className={`text-sm transition-colors ${selectedCategory === cat.id ? 'text-secondary font-bold' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 tracking-wide uppercase border-b pb-2 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-gray-500">
                <span>{formatCurrency(priceRange[0])}</span>
                <span>{formatCurrency(priceRange[1])}+</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />
            </div>
          </div>
          
          {(selectedCategory !== 'all' || queryParam || priceRange[1] < 10000) && (
            <button 
                onClick={clearFilters}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
                Clear All Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {products.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <SearchX size={64} className="mx-auto text-gray-200 mb-6" />
              <h3 className="text-xl font-bold text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500 max-w-xs mx-auto">We couldn't find any items matching your current filters or search query.</p>
              <button 
                onClick={clearFilters}
                className="mt-8 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
              >
                Reset Everything
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
