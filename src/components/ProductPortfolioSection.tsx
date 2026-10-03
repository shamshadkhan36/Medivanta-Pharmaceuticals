import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PRODUCTS, 
  PRODUCT_CATEGORIES 
} from '../data/products';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ProductPortfolioSectionProps {
  onSelectProduct: (product: Product) => void;
  onEnquire: (productName?: string) => void;
}

export const ProductPortfolioSection: React.FC<ProductPortfolioSectionProps> = ({
  onSelectProduct,
  onEnquire,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Categories');

  const filteredProducts = activeCategory === 'All Categories'
    ? PRODUCTS.slice(0, 6) // showcase top 6 on homepage
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Therapeutic Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
              Comprehensive Product Portfolio
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Formulated to international pharmacopoeial standards (USP/BP/EP). Browse our primary manufacturing segments for hospital and distributor procurement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-sky-700 hover:text-sky-800 border border-slate-200 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>View Full 100+ Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 pr-2 text-xs font-semibold text-slate-400 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onSelectProduct}
              onQuickEnquire={onEnquire}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
              Need Contract Manufacturing or Specific Strengths?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans">
              Custom Formulation & Export Packaging Available
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We develop client-specific active formulations, customized blister configurations, and multilingual artwork.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => onEnquire()}
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
            >
              Request Custom Batch Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
