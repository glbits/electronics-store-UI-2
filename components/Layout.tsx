import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartContext } from '../App';
import { formatCurrency } from '../constants';

export const Header: React.FC = () => {
  const { cartTotal, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return '';
    return location.pathname.startsWith(path) ? 'text-accent font-bold' : 'text-gray-700 font-medium';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/catalog' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center gap-1"><Phone size={12} /> +91 (555) 123-4567</span>
          <span className="flex items-center gap-1"><Mail size={12} /> sales@electromart.in</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-accent transition-colors">Support</a>
          <a href="#" className="hover:text-accent transition-colors">Track Order</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="bg-accent text-white p-1 rounded">E</span>
              <span className="hidden sm:inline">ElectroMart</span>
            </Link>
          </div>

          {/* Nav Links (Centered) */}
          <div className="hidden md:flex space-x-8 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative px-1 py-2 text-sm transition-all hover:text-accent ${isActive(link.path)}`}
              >
                {link.name}
                {isActive(link.path).includes('text-accent') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-100 transition-transform origin-left"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-600 hover:text-accent transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={24} />
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartTotal}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`block px-3 py-3 text-base rounded-lg transition-colors ${isActive(link.path).includes('text-accent') ? 'bg-accent/10 text-accent font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Handle hash scrolling if navigating from another page
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const footerLinkClass = "block py-1 hover:text-accent hover:translate-x-1 transition-all duration-200 cursor-pointer";

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
              <span className="bg-accent text-white p-1.5 rounded text-base">E</span> ElectroMart
            </h3>
            <p className="text-sm leading-relaxed">
              Leading the electrical supply industry in India since 2010. Quality, safety, and innovation at your fingertips.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className={footerLinkClass}>Home</Link></li>
              <li><Link to="/catalog" className={footerLinkClass}>Products</Link></li>
              <li><Link to="/about" className={footerLinkClass}>About Us</Link></li>
              <li><Link to="/faq" className={footerLinkClass}>FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services#smart-home" className={footerLinkClass}>Smart Home Setup</Link></li>
              <li><Link to="/services#wiring" className={footerLinkClass}>Wiring Solutions</Link></li>
              <li><Link to="/services#safety" className={footerLinkClass}>Safety Audits</Link></li>
              <li><Link to="/services#lighting-design" className={footerLinkClass}>Lighting Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 text-accent" />
                <span>456 Electronic City, Bengaluru, Karnataka 560100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <span>+91 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <span>support@electromart.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ElectroMart. All rights reserved. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white shadow-xl flex flex-col animate-slide-in-right">
          
          <div className="px-4 py-6 bg-gray-50 border-b flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart ({cartTotal})</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-500">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <ShoppingCart size={64} className="text-gray-200 mb-4" />
                <p className="text-gray-500 mb-4">Your cart is empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-accent font-semibold hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-1"><Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>{item.name}</Link></h3>
                          <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center border rounded">
                          <button 
                            className="p-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button 
                            className="p-1 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          type="button" 
                          className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>{formatCurrency(subtotal)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">Shipping and GST calculated at checkout.</p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-gray-800 transition-colors"
              >
                Checkout <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
