import React from 'react';
import { Leaf, Recycle, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About EcoMart</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your destination for sustainable and vegan products that make a positive impact on our planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">All products are selected for their minimal environmental impact</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sustainable</h3>
            <p className="text-gray-600">Carefully sourced materials and responsible manufacturing</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cruelty-Free</h3>
            <p className="text-gray-600">No animal testing and plenty of vegan options</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">Every product meets our high standards</p>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At EcoMart, we believe in making sustainable living accessible to everyone. Our carefully curated selection 
                of eco-friendly and vegan products helps you make choices that are good for you and the planet.
              </p>
              <p className="text-gray-600">
                Every purchase you make supports our mission to reduce waste, promote sustainable practices, and create 
                a more environmentally conscious world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Sustainable living"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}