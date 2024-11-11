import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState<(typeof products[0] & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Sustainable' | 'Vegan'>('all');

  const addToCart = (product: typeof products[0]) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={scrollToTop}
        onAboutClick={() => setShowAbout(true)}
      />
      <Hero />
      
      {showAbout && <About />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Sustainable and vegan products for a better tomorrow.
          </p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('Sustainable')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'Sustainable'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Sustainable
            </button>
            <button
              onClick={() => setSelectedCategory('Vegan')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'Vegan'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Vegan
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              title={product.name}
              price={product.price}
              image={product.images[0]}
              category={product.category}
              rating={product.rating}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </main>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        setItems={setCartItems}
      />
    </div>
  );
}

export default App;