import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product, FilterState, SortOption } from '../types';
import ProductQuickView from './ProductQuickView';

interface ProductGridProps {
  products: Product[];
  filters: FilterState;
  sort: SortOption['value'];
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export default function ProductGrid({ 
  products, 
  filters, 
  sort, 
  view, 
  onViewChange 
}: ProductGridProps) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(product => {
    if (filters.categories.length && !filters.categories.includes(product.category)) return false;
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
    if (filters.rating && product.rating < filters.rating) return false;
    if (filters.sustainable && !product.sustainable) return false;
    if (filters.vegan && !product.vegan) return false;
    if (filters.inStock && product.stock === 0) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {sortedProducts.length} products
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewChange('grid')}
            className={`p-2 rounded ${view === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400'}`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => onViewChange('list')}
            className={`p-2 rounded ${view === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400'}`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={`grid gap-6 ${
        view === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
            onQuickView={() => setQuickViewProduct(product)}
          />
        ))}
      </div>

      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}