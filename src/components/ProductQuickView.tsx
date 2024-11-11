import React, { useState } from 'react';
import { X, Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

export default function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-auto py-2">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                      selectedImage === idx ? 'border-green-500' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-green-600 text-xl font-bold mt-2">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-5 w-5 ${
                        idx < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              {product.variants?.map((variant) => (
                <div key={variant.type} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {variant.type}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {variant.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedVariants(prev => ({
                          ...prev,
                          [variant.type]: option
                        }))}
                        className={`px-4 py-2 rounded-md border ${
                          selectedVariants[variant.type] === option
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Specifications</h3>
                <dl className="space-y-1">
                  {product.specifications.map(spec => (
                    <div key={spec.label} className="grid grid-cols-2">
                      <dt className="text-gray-600">{spec.label}</dt>
                      <dd className="font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}