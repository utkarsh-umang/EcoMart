import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  onAddToCart: () => void;
}

export default function ProductCard({ title, price, image, category, rating, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-green-600 font-bold">₹{price.toLocaleString('en-IN')}</span>
          <div className="flex items-center">
            {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
          </div>
        </div>
        <button 
          onClick={onAddToCart}
          className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}