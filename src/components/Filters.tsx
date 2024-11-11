import React from 'react';
import { FilterState } from '../types';
import { Sliders } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
}

export default function Filters({ filters, onFilterChange, categories }: FiltersProps) {
  const handlePriceChange = (value: [number, number]) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Sliders className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div>
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category]
                    : filters.categories.filter(c => c !== category);
                  onFilterChange({ ...filters, categories: newCategories });
                }}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange([+e.target.value, filters.priceRange[1]])}
              className="w-24 rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
            <span>to</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange([filters.priceRange[0], +e.target.value])}
              className="w-24 rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Rating</h3>
        <select
          value={filters.rating}
          onChange={(e) => onFilterChange({ ...filters, rating: +e.target.value })}
          className="w-full rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
        >
          <option value={0}>All ratings</option>
          <option value={4}>4+ stars</option>
          <option value={3}>3+ stars</option>
          <option value={2}>2+ stars</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.sustainable}
            onChange={(e) => onFilterChange({ ...filters, sustainable: e.target.checked })}
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span>Sustainable Products</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.vegan}
            onChange={(e) => onFilterChange({ ...filters, vegan: e.target.checked })}
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span>Vegan Products</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({ ...filters, inStock: e.target.checked })}
            className="rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span>In Stock Only</span>
        </label>
      </div>

      <button
        onClick={() => onFilterChange({
          categories: [],
          priceRange: [0, 10000],
          rating: 0,
          sustainable: false,
          vegan: false,
          inStock: false
        })}
        className="w-full py-2 text-sm text-green-600 hover:text-green-700"
      >
        Clear all filters
      </button>
    </div>
  );
}