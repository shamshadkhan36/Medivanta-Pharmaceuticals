import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  PRODUCTS, 
  PRODUCT_CATEGORIES 
} from '../data/products';
import type { Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Search, 
  RotateCcw, 
  Package, 
  FileText
} from 'lucide-react';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onEnquire: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onEnquire,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || 'All Categories'
  );
  const [selectedDosage, setSelectedDosage] = useState<string>('All');

  // Handle URL query parameter changes
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const dosageTypes = [
    'All',
    'Tablet',
    'Capsule',
    'Injection',
    'Liquid',
    'Topical',
    'Softgel'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category Filter
      const matchesCategory =
        selectedCategory === 'All Categories' || item.category === selectedCategory;

      // Dosage Form Filter
      const matchesDosage =
        selectedDosage === 'All' ||
        item.dosageForm.toLowerCase().includes(selectedDosage.toLowerCase());

      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.genericName.toLowerCase().includes(query) ||
        item.therapeuticSegment.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesDosage && matchesSearch;
    });
  }, [selectedCategory, selectedDosage, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedDosage('All');
    setSearchParams({});
  };

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/40 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Package className="w-3.5 h-3.5 text-teal-400" />
            <span>Formulation Directory & Dossiers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Pharmaceutical Product Portfolio
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of generic and specialty formulations manufactured under cGMP compliance. Click any product to review formulation specs and request export pricing.
          </p>
        </div>
      </section>

      {/* Main Catalog Explorer */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Search & Category Filter */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 mb-8 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Input */}
              <div className="md:col-span-8 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by brand name, active composition (e.g. Amoxicillin), or therapeutic segment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Reset Action */}
              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {PRODUCTS.length} products
                </span>

                {(selectedCategory !== 'All Categories' || selectedDosage !== 'All' || searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 text-xs text-sky-700 hover:text-sky-900 font-semibold px-3 py-1.5 bg-sky-50 rounded-lg border border-sky-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

            </div>

            {/* Category Tabs */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                  Category:
                </span>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchParams(cat === 'All Categories' ? {} : { category: cat });
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Dosage Form Filter Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 scrollbar-none">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Form:
              </span>
              {dosageTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedDosage(type)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap shrink-0 ${
                    selectedDosage === type
                      ? 'bg-teal-600 text-white font-bold'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={onSelectProduct}
                  onQuickEnquire={(name) => onEnquire(name)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
              <Package className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No Formulations Match Your Criteria</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We manufacture over 100+ generic formulations beyond this catalog. If you require a custom molecule or strength, please submit an enquiry.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Clear Filters
                </button>
                <button
                  onClick={() => onEnquire()}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Submit Custom Molecule Request
                </button>
              </div>
            </div>
          )}

          {/* Regulatory Support Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-xl">
            <div className="md:col-span-2 space-y-2 text-left">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Full Regulatory Dossier Support</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans">
                Need CTD / ACTD Dossiers for Your Country Registration?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Medivanta supplies complete Module 1 to 5 dossiers, accelerated stability test certificates (Zone IVb), Certificate of Pharmaceutical Product (COPP), and Free Sale Certificates.
              </p>
            </div>

            <div className="text-center md:text-right">
              <button
                onClick={() => onEnquire()}
                className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all inline-block"
              >
                Request Registration Dossier
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
