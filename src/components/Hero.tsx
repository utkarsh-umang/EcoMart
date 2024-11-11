import React from 'react';
import { ArrowRight, Leaf, Recycle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-6">
              Eco-Friendly Living Made Simple
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop sustainable products that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-sm text-gray-600">100% Eco-friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="h-6 w-6 text-green-600" />
                <span className="text-sm text-gray-600">Sustainable</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80"
              alt="Eco-friendly products"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}