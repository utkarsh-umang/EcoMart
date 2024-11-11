import React from 'react';
import { ShoppingCart, Menu, Leaf } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
  onAboutClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onLogoClick, onAboutClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onLogoClick}
              className="flex-shrink-0 flex items-center hover:text-green-600 transition-colors"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-green-800">EcoMart</span>
            </button>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <button onClick={onLogoClick} className="text-green-900 hover:text-green-600 px-3 py-2">Shop</button>
                <button onClick={onAboutClick} className="text-green-900 hover:text-green-600 px-3 py-2">About</button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2" onClick={onCartClick}>
              <ShoppingCart className="h-6 w-6 text-green-800" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-green-800" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}