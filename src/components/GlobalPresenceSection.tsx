import React, { useState } from 'react';
import { 
  GLOBAL_MARKETS, 
  PARTNERSHIP_PERKS 
} from '../data/globalMarkets';
import type { GlobalMarket } from '../data/globalMarkets';
import { 
  Globe2, 
  ArrowRight, 
  FileText, 
  Users, 
  CheckCircle2
} from 'lucide-react';

interface GlobalPresenceSectionProps {
  onOpenEnquiry: () => void;
}

export const GlobalPresenceSection: React.FC<GlobalPresenceSectionProps> = ({
  onOpenEnquiry,
}) => {
  const [selectedMarket, setSelectedMarket] = useState<GlobalMarket>(GLOBAL_MARKETS[0]);

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-sky-600" />
            <span>International Export & Distribution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Healthcare Without Borders
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Supplying essential pharmaceuticals across 30+ countries through verified institutional tenders, hospital groups, and authorized distributor networks.
          </p>
        </div>

        {/* World Map Container & Interactive Markers */}
        <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden mb-12 border border-slate-800">
          
          {/* Subtle World Map SVG Background */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] sm:min-h-[420px] flex items-center justify-center">
            
            <svg 
              className="w-full h-full opacity-35" 
              viewBox="0 0 1000 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World Map Continents Simplified Mesh */}
              <path d="M120 100 C150 80, 240 70, 270 120 C290 150, 270 200, 240 230 C200 240, 150 200, 130 160 Z" fill="#38BDF8" fillOpacity="0.25"/>
              <path d="M260 250 C300 270, 320 340, 290 420 C260 450, 230 400, 240 320 Z" fill="#38BDF8" fillOpacity="0.2"/>
              <path d="M470 90 C530 80, 560 120, 530 160 C500 180, 460 150, 450 120 Z" fill="#38BDF8" fillOpacity="0.28"/>
              <path d="M470 180 C540 180, 570 260, 540 360 C510 420, 460 380, 450 280 C440 220, 450 190, 470 180 Z" fill="#0D9488" fillOpacity="0.3"/>
              <path d="M540 140 C600 130, 640 180, 600 220 C570 230, 540 200, 540 160 Z" fill="#38BDF8" fillOpacity="0.3"/>
              <path d="M630 190 C680 180, 710 240, 680 300 C650 320, 620 260, 630 200 Z" fill="#0D9488" fillOpacity="0.4"/>
              <path d="M690 120 C780 110, 830 180, 810 260 C780 300, 720 270, 700 200 Z" fill="#38BDF8" fillOpacity="0.25"/>
              <path d="M780 320 C840 310, 880 360, 850 420 C800 440, 760 390, 780 320 Z" fill="#38BDF8" fillOpacity="0.2"/>

              {/* Connecting Arcs */}
              <path d="M680 230 Q 600 170 560 180" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
              <path d="M680 230 Q 580 240 500 270" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
              <path d="M680 230 Q 740 240 760 260" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
              <path d="M680 230 Q 640 150 610 130" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
            </svg>

            {/* Glowing Location Markers */}
            {GLOBAL_MARKETS.map((market) => {
              const isSelected = selectedMarket.id === market.id;
              return (
                <button
                  key={market.id}
                  onClick={() => setSelectedMarket(market)}
                  style={{
                    left: `${market.mapCoords.x}%`,
                    top: `${market.mapCoords.y}%`,
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  aria-label={market.name}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full ${isSelected ? 'bg-teal-400/40 animate-ping' : 'bg-sky-400/20 group-hover:animate-ping'}`}></span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      isSelected 
                        ? 'bg-teal-400 ring-4 ring-teal-400/30 scale-125' 
                        : 'bg-sky-500 hover:bg-teal-400 ring-2 ring-sky-300/40 group-hover:scale-110'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                    </div>

                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md transition-all pointer-events-none ${
                      isSelected 
                        ? 'bg-white text-slate-900 ring-2 ring-teal-400 opacity-100 z-30' 
                        : 'bg-slate-900/90 text-slate-200 border border-slate-700 opacity-80 group-hover:opacity-100'
                    }`}>
                      {market.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Market Insight Drawer */}
          <div className="mt-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-left grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                  Region Spotlight
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                <span className="text-xs text-sky-300 font-semibold">{selectedMarket.region}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans">
                {selectedMarket.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedMarket.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
                <span className="text-slate-400">Key Markets:</span>
                {selectedMarket.keyCountries.map((c, idx) => (
                  <span key={idx} className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  Regulatory Filings:
                </span>
                <span className="font-bold text-white">{selectedMarket.activeDossiers}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-teal-400" />
                  Active Network:
                </span>
                <span className="font-bold text-teal-300">{selectedMarket.distributorPartners}</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for {selectedMarket.region}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Global Distribution Partnership Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {PARTNERSHIP_PERKS.map((perk, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1 font-sans">{perk.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Required CTA */}
        <div className="text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Become Our Distribution Partner</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
