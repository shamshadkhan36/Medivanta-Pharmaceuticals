import React from 'react';
import { Link } from 'react-router-dom';
import { 
  QUALITY_PILLARS, 
  COMPLIANCE_BADGES 
} from '../data/quality';
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

export const QualitySection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Integrity & Verification</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Quality You Can Trust
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From raw API qualification to finished batch commercial release, Medivanta adheres to rigorous scientific governance, data integrity, and validated analytical processes.
          </p>
        </div>

        {/* 6 Key Quality Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {QUALITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {pillar.metrics}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-sky-800 mb-2">
                  {pillar.shortDesc}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Audited Standard Operating Procedure</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification-Style Badges Section (Compliant with Demo Guidelines) */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="max-w-2xl mb-8 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
              Regulatory Framework & Plant Badges
            </span>
            <h3 className="text-2xl font-bold font-sans">
              Benchmarked Quality Systems & Compliance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our quality management system is structured to meet rigorous global standards, ensuring seamless technical transfer and dossier filings for our export partners.
            </p>
          </div>

          {/* Compliance Badge Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {COMPLIANCE_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-sky-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-400 mb-4">
                    <Award className="w-5 h-5" />
                  </div>

                  {/* Placeholder Badge Label as requested */}
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-300 block mb-1">
                    {badge.badgeLabel}
                  </span>

                  <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                    {badge.subtitle}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {badge.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <span className="text-sky-300 font-semibold">{badge.status}</span>
                  <span>Demo Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated CTA Button as requested */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Need comprehensive stability data sheets or certificate of analysis (COA) templates?
            </p>
            <Link
              to="/quality"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Learn About Our Quality Standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
