import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface B2BPartnerCTAProps {
  onOpenEnquiry: () => void;
}

export const B2BPartnerCTA: React.FC<B2BPartnerCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-teal-500/40 text-teal-300 text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Strategic B2B Alliances & Contract Manufacturing</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans leading-tight">
          Looking for a Reliable Pharmaceutical Partner?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Partner with Medivanta Pharmaceuticals for quality-focused pharmaceutical manufacturing, supply and distribution solutions.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict cGMP Quality Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Flexible Minimum Order Quantities</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-teal-400" />
            <span>Dedicated Export Relationship Manager</span>
          </div>
        </div>

        {/* Required Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-sky-500/25 hover:shadow-2xl hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Business Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors"
          >
            <span>Contact Our Team</span>
            <PhoneCall className="w-4 h-4 text-teal-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
