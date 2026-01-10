import { Star, Check, ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card group relative">
      {/* Popular badge */}
      {product.popular && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-3 py-1 rounded-full text-xs font-semibold z-10 shadow-lg">
          Most Popular
        </div>
      )}

      {/* Product header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(4.8)</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
        {product.description}
      </p>

      {/* Features list */}
      <div className="mb-6">
        <ul className="space-y-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-sm text-primary-600 font-medium">
              +{product.features.length - 3} more features
            </li>
          )}
        </ul>
      </div>

      {/* Price and CTA */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <span className="text-gray-500 ml-1">USD</span>
          </div>
          {product.popular && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Best Value
            </span>
          )}
        </div>

        <button className="w-full btn-primary flex items-center justify-center gap-2 group">
          Get Access
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Instant download • Lifetime access
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
