import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Quality & Compliance', path: '/quality' },
    { label: 'R&D', path: '/research' },
    { label: 'Global Presence', path: '/global-presence' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Corporate Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-colors hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>International Pharmaceutical Manufacturer & Exporter</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-slate-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span>B2B Contract Manufacturing & Global Dossier Licensing</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+912248901200" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 22 4890 1200</span>
            </a>
            <a 
              href="mailto:exports@medivantapharma.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>exports@medivantapharma.com</span>
            </a>
            <span className="bg-sky-950/80 text-sky-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-sky-800/60">
              Corporate Demo
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-slate-900 via-sky-950 to-teal-900 flex items-center justify-center shadow-md shadow-sky-900/10 group-hover:shadow-sky-600/20 transition-all">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400 group-hover:scale-105 transition-transform" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L33 13V27L20 35L7 27V13L20 5Z" stroke="#38BDF8" strokeWidth="2.5" fill="#0B2545" fillOpacity="0.4"/>
                  <path d="M17 14H23V18H27V24H23V28H17V24H13V18H17V14Z" fill="#0D9488"/>
                  <circle cx="20" cy="21" r="2.5" fill="#FFFFFF"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 font-sans">
                    MEDIVANTA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-sky-700">
                  Pharmaceuticals
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                      active
                        ? 'text-sky-700 bg-sky-50/80 font-semibold'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => onOpenEnquiry()}
                className="hidden sm:inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white px-3.5 py-2 rounded-lg font-medium text-xs shadow-sm"
              >
                <span>Enquire</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl transition-all">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
              <div className="p-3 mb-3 bg-gradient-to-r from-sky-50 to-teal-50 rounded-xl border border-sky-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-sky-900 uppercase tracking-wider">B2B Trade & Export</p>
                  <p className="text-xs text-slate-600">Supplying distributors & hospital groups globally</p>
                </div>
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>

              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${active ? 'text-sky-600' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md"
                >
                  <span>Request Business Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-600">
                  <a 
                    href="tel:+912248901200" 
                    className="p-2.5 rounded-lg bg-slate-50 flex items-center gap-2 justify-center border border-slate-200/60"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-600" />
                    <span>Call B2B Desk</span>
                  </a>
                  <a 
                    href="mailto:exports@medivantapharma.com" 
                    className="p-2.5 rounded-lg bg-slate-50 flex items-center gap-2 justify-center border border-slate-200/60"
                  >
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    <span>Email Exports</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
