import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  FileCheck2,
  Clock
} from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Intro */}
          <div className="lg:col-span-2 space-y-5 text-left">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
                <svg className="w-6 h-6 text-slate-950" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L33 13V27L20 35L7 27V13L20 5Z" stroke="#040d1a" strokeWidth="2.5" fill="#FFFFFF"/>
                  <path d="M17 14H23V18H27V24H23V28H17V24H13V18H17V14Z" fill="#0D9488"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
                    MEDIVANTA
                  </span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-sky-400 block -mt-1">
                  Pharmaceuticals
                </span>
              </div>
            </Link>

            <p className="text-sm font-medium text-teal-400 italic">
              “Advancing Healthcare. Improving Lives.”
            </p>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Medivanta Pharmaceuticals is a research-driven Indian pharmaceutical manufacturer and global exporter. We specialize in advanced solid oral dosages, sterile injectables, oral suspensions, and topical preparations supplied to institutional healthcare buyers and distributors across 30+ international markets.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 0 0 1.6-1.6 1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
              <a
                href="mailto:exports@medivantapharma.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950 border border-sky-800 text-sky-300 text-xs font-medium hover:bg-sky-900 transition-colors"
              >
                <span>B2B Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Corporate
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">About Our Company</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Manufacturing Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Quality & Compliance</span>
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">R&D & Formulations</span>
                </Link>
              </li>
              <li>
                <Link to="/global-presence" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Global Presence</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Careers & Inquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              Therapeutics
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/products?category=Tablets+%26+Capsules" className="hover:text-white transition-colors">
                  Tablets & Capsules
                </Link>
              </li>
              <li>
                <Link to="/products?category=Injectables" className="hover:text-white transition-colors">
                  Sterile Injectables & LVPs
                </Link>
              </li>
              <li>
                <Link to="/products?category=Syrups+%26+Suspensions" className="hover:text-white transition-colors">
                  Syrups & Suspensions
                </Link>
              </li>
              <li>
                <Link to="/products?category=Topical+Preparations" className="hover:text-white transition-colors">
                  Topical Creams & Ointments
                </Link>
              </li>
              <li>
                <Link to="/products?category=Nutraceuticals" className="hover:text-white transition-colors">
                  Nutraceuticals & Softgels
                </Link>
              </li>
              <li>
                <Link to="/products?category=Pediatric+Care" className="hover:text-white transition-colors">
                  Pediatric Care Drops
                </Link>
              </li>
            </ul>
          </div>

          {/* Plant & Contact Info */}
          <div className="space-y-4 text-left">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Headquarters
            </h4>

            <div className="text-xs text-slate-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate Tower:</strong> Level 11, Maker Maxity, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Manufacturing Plant:</strong> Plot 42-45, Pharma SEZ, Sanand GIDC, Ahmedabad, Gujarat 382170, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+912248901200" className="hover:text-white transition-colors">
                  +91 (022) 4890 1200 / 1201
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:business@medivantapharma.com" className="hover:text-white transition-colors">
                  business@medivantapharma.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Mon – Sat: 09:00 AM – 06:30 PM IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Fictional Demo Disclaimer */}
        <div className="pt-8 pb-4 text-xs text-slate-500 space-y-3 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
            <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-300">Regulatory & Demonstration Notice:</strong> Medivanta Pharmaceuticals is a conceptual corporate pharmaceutical demo created for prospective B2B client presentations. Product names, dosages, clinical indications, certifications, and facility statistics displayed across this website are fictitious and intended strictly for technological and corporate UI evaluation. Not intended for commercial prescription or direct patient dispensing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© 2026 Medivanta Pharmaceuticals. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/quality" className="hover:text-slate-300 transition-colors">Quality Policy</Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">Pharmacovigilance</Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">B2B Terms</Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Statement</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
