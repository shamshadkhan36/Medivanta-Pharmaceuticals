import React, { useState } from 'react';
import { GLOBAL_MARKETS } from '../data/globalMarkets';
import type { GlobalMarket } from '../data/globalMarkets';
import { 
  Globe2, 
  ArrowRight
} from 'lucide-react';

interface GlobalPresencePageProps {
  onOpenEnquiry: () => void;
}

export const GlobalPresencePage: React.FC<GlobalPresencePageProps> = ({
  onOpenEnquiry,
}) => {
  const [selectedMarket, setSelectedMarket] = useState<GlobalMarket>(GLOBAL_MARKETS[0]);

  const onboardingSteps = [
    {
      step: '01',
      title: 'Territory & Product Selection',
      desc: 'Identify desired therapeutic categories and check territorial exclusivity in your target jurisdiction.'
    },
    {
      step: '02',
      title: 'Dossier Review & Regulatory Filing',
      desc: 'Medivanta provides validated CTD/ACTD dossiers, Certificate of Pharmaceutical Product (COPP), and stability data.'
    },
    {
      step: '03',
      title: 'Commercial Supply Agreement',
      desc: 'Finalize minimum order quantities, private branding or Medivanta-branded packaging, and payment milestones.'
    },
    {
      step: '04',
      title: 'Manufacturing & Bonded Dispatch',
      desc: 'Quality release of commercial batches followed by temperature-monitored sea/air freight documentation.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/40 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Globe2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Global Export Operations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Healthcare Without Borders
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Medivanta Pharmaceuticals exports high-grade therapeutic formulations to over 30 countries across the Middle East, Africa, Southeast Asia, and CIS markets, supporting hospitals, distributors, and national healthcare ministries.
          </p>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              International Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Strategic Export Hubs & Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click on any regional marker to view active dossiers, therapeutic focus, and distributor networks.
            </p>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl overflow-hidden mb-12 border border-slate-800">
            
            <div className="relative w-full aspect-[2/1] min-h-[320px] sm:min-h-[440px] flex items-center justify-center">
              <svg 
                className="w-full h-full opacity-35" 
                viewBox="0 0 1000 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Continents Simplified Mesh */}
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

              {/* Glowing Location Pins */}
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

            {/* Region Details Display */}
            <div className="mt-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-left grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                    Selected Market Overview
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="text-xs text-sky-300 font-semibold">{selectedMarket.region}</span>
                </div>
                <h3 className="text-2xl font-bold font-sans">
                  {selectedMarket.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedMarket.description}
                </p>
                <div className="pt-2 text-xs">
                  <span className="text-slate-400">Therapeutic Focus: </span>
                  <span className="font-semibold text-teal-300">{selectedMarket.therapeuticFocus}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Active Dossiers:</span>
                  <span className="font-bold text-white">{selectedMarket.activeDossiers}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Distributor Network:</span>
                  <span className="font-bold text-teal-300">{selectedMarket.distributorPartners}</span>
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-lg text-xs font-bold transition-all"
                >
                  Apply for Territory Rights
                </button>
              </div>
            </div>

          </div>

          {/* 5 Regions Comparison Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {GLOBAL_MARKETS.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMarket(m)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedMarket.id === m.id
                    ? 'bg-sky-50 border-sky-400 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <h4 className="text-sm font-bold text-slate-900 mb-1">{m.name}</h4>
                <p className="text-[11px] text-slate-500 mb-2">{m.region}</p>
                <span className="text-xs font-semibold text-sky-700 block">{m.activeDossiers}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Distributor Onboarding Roadmap */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
              Partnership Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              4-Step Distributor Partnership Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Transparent, structured collaboration to accelerate your country-level product registration and sales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="text-3xl font-extrabold text-sky-600 font-mono block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-sans">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Required CTA: Become Our Distribution Partner */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
            Territorial Licensing & Supply
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
            Become Our Distribution Partner
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expand your healthcare portfolio with high-yield, premium manufactured pharmaceutical products backed by full technical documentation.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenEnquiry}
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>Submit Distribution Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
