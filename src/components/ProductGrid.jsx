import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Career Success Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select from our proven resources designed by career experts to help you 
            land your dream job faster and advance your career.
          </p>
        </div>

        {/* Category filter */}
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Not sure which to choose?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the Complete Career Success Bundle and save over 40%. 
            Includes all our resources with lifetime updates.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get the Bundle - Save 40%
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
