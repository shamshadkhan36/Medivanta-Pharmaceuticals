import React from 'react';
import type { Product } from '../data/products';
import { ArrowUpRight, Shield, Layers, FileCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onQuickEnquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onQuickEnquire,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Image container */}
      <div className="relative h-52 bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden flex items-center justify-center p-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-md text-sky-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-sky-100 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            {product.category}
          </span>
        </div>

        {/* Demo Watermark Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-slate-900/80 backdrop-blur-md text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
            Demo Form
          </span>
        </div>

        {/* Dosage Form pill at bottom */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-white/95 backdrop-blur-md text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-md shadow-sm border border-slate-200">
            {product.dosageForm}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-teal-700 font-semibold mb-1">
            <Shield className="w-3.5 h-3.5 text-teal-600" />
            <span>{product.therapeuticSegment}</span>
          </div>

          <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-sky-800 font-mono mt-1 font-medium line-clamp-1 bg-sky-50/60 p-1 rounded border border-sky-100/60">
            {product.genericName}
          </p>

          <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Specs highlights */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              Packing:
            </span>
            <span className="font-medium text-slate-700 truncate max-w-[170px]" title={product.packaging}>
              {product.packaging}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-slate-400" />
              Dossier:
            </span>
            <span className="font-semibold text-emerald-600">
              CTD / ACTD Ready
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200/80 hover:border-sky-200"
          >
            <span>View Product</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onQuickEnquire(product.name)}
            className="bg-slate-900 hover:bg-sky-600 text-white p-2.5 rounded-xl text-xs font-medium transition-colors"
            title="Quick B2B Enquiry"
            aria-label="Enquire for this product"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
