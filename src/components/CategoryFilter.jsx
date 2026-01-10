import { categories } from '../data/products';
import * as Icons from 'lucide-react';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const IconComponent = Icons[category.icon];
        
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-300 hover:shadow-md'
            }`}
          >
            {IconComponent && <IconComponent className="w-4 h-4" />}
            <span>{category.name}</span>
            {activeCategory === category.id && (
              <span className="ml-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
