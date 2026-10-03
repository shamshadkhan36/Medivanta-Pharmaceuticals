import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Package, 
  Thermometer, 
  Clock, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Info
} from 'lucide-react';
import type { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-md border border-teal-500/30">
              {product.category}
            </span>
            <span className="bg-sky-500/20 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-md border border-sky-500/30">
              Demo Formulation
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Main Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square flex items-center justify-center group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center bg-white/90 backdrop-blur-sm py-1 px-2 rounded text-[11px] font-semibold text-slate-700 shadow-sm">
                  {product.dosageForm}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 font-sans leading-tight">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg inline-block border border-sky-100">
                {product.genericName}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Dosage Form:</span>
                  <span className="font-semibold text-slate-800">{product.dosageForm}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block">Strength:</span>
                  <span className="font-semibold text-slate-800">{product.strength}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-100/80 px-4 py-2 font-bold text-slate-700 border-b border-slate-200 uppercase tracking-wider text-[11px]">
              Technical Specifications & Logistics
            </div>
            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-sky-600" />
                  Primary Packaging
                </span>
                <span className="col-span-2 font-medium text-slate-800">{product.packaging}</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5 bg-slate-50/50">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" />
                  Therapeutic Segment
                </span>
                <span className="col-span-2 font-medium text-slate-800">{product.therapeuticSegment}</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  Shelf Life
                </span>
                <span className="col-span-2 font-medium text-slate-800">{product.shelfLife}</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5 bg-slate-50/50">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                  Storage Instructions
                </span>
                <span className="col-span-2 font-medium text-slate-800">{product.storageCondition}</span>
              </div>
              <div className="grid grid-cols-3 px-4 py-2.5">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  Regulatory Dossier
                </span>
                <span className="col-span-2 font-medium text-emerald-700 font-semibold">{product.regulatoryDossier}</span>
              </div>
            </div>
          </div>

          {/* Key Pharmaceutical Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              Manufacturing & Quality Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 p-2.5 rounded-lg bg-teal-50/60 border border-teal-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Note */}
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-800">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>B2B Catalog Note:</strong> Commercial supply is subject to mutual regulatory registration in your designated importing country. No medical advice or individual dosage instructions are provided.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Interested in distribution or private label manufacturing?
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-200 font-medium text-xs transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(product.name);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold text-xs shadow-md shadow-sky-600/20 transition-all"
            >
              <span>Enquire for Product</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
