import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Microscope, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Award,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white min-h-[85vh] flex items-center">
      {/* Background Graphic Patterns & Glows */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/30 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Advancing Healthcare. Improving Lives.</span>
              <span className="w-1 h-1 rounded-full bg-teal-400"></span>
              <span className="text-slate-300 font-normal">Established Manufacturer & Exporter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-sans">
              Advancing Healthcare <br className="hidden sm:inline" />
              Through <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-teal-400 bg-clip-text text-transparent">Science & Innovation</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Medivanta Pharmaceuticals develops and manufactures high-quality pharmaceutical products with an uncompromising commitment to safety, innovation, and global healthcare delivery across 30+ international markets.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 hover:border-slate-600 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm transition-all"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Quality Driven</h4>
                    <p className="text-[11px] text-slate-400 hidden sm:block">Stringent cGMP compliance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center shrink-0">
                    <Microscope className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Research Focused</h4>
                    <p className="text-[11px] text-slate-400 hidden sm:block">Advanced F&D laboratories</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Global Reach</h4>
                    <p className="text-[11px] text-slate-400 hidden sm:block">Active in 30+ countries</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 to-teal-500 opacity-20 blur-xl"></div>
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Pharmaceutical Manufacturing Cleanroom"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Floating facility tag */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-semibold text-slate-200">cGMP Class 100 Facility</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-teal-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Manufacturing Hub</span>
                    </div>
                    <span className="text-[11px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                      Ahmedabad, India
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    High-speed solid oral compression, automated blister lines & sterile parenteral filling suites.
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                      <span className="text-xs font-extrabold text-white block">100k+</span>
                      <span className="text-[10px] text-slate-400">Sq. Ft. Plant</span>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-teal-400 block">1.2B</span>
                      <span className="text-[10px] text-slate-400">Doses / Yr</span>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-sky-400 block">30+</span>
                      <span className="text-[10px] text-slate-400">Export Markets</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Pill - Top Right */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-md p-3 rounded-xl border border-sky-500/30 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">25+ Years</p>
                  <p className="text-[10px] text-slate-400">Pharma Heritage</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
