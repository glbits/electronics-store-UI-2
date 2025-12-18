import React from 'react';
import { ShieldCheck, Users, Target, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Circuit background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About ElectroMart</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering India with cutting-edge electrical solutions since 2010. We are more than just a store; we are your partners in power.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At ElectroMart, our mission is to provide every household and business in India with access to safe, high-quality, and energy-efficient electrical components. We believe that technology should be accessible and reliable.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the smallest switch to complex industrial wiring, we ensure that every product passing through our hands meets the highest ISI safety standards.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Engineers working" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 w-fit mx-auto mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Uncompromised Safety</h3>
              <p className="text-gray-500">Every product is certified and tested for maximum electrical safety.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600 w-fit mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Top Brands</h3>
              <p className="text-gray-500">Partnerships with world-leading manufacturers to bring you the best.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full text-green-600 w-fit mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Expert Support</h3>
              <p className="text-gray-500">Our technical team is always ready to assist with your requirements.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600 w-fit mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Customer Centric</h3>
              <p className="text-gray-500">Your satisfaction is our primary metric for success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};