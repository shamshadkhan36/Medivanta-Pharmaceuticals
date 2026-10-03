import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTION_LINES } from '../data/facilities';
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  ShieldAlert, 
  Microscope, 
  ChevronRight
} from 'lucide-react';

export const ManufacturingSection: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState(PRODUCTION_LINES[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>Industrial Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Manufacturing Excellence
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our state-of-the-art pharmaceutical plant in Sanand, Gujarat operates under strict cGMP protocols, featuring automated production lines, cleanroom cascades, and closed-loop material transfer.
          </p>
        </div>

        {/* 4 Required Statistics in Dark Navy Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-left hover:border-sky-500/50 transition-colors">
            <div className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-sky-400" />
              Facility Area
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              100,000+ sq. ft.
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Manufacturing Facility & cGMP Warehousing
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-left hover:border-teal-500/50 transition-colors">
            <div className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-teal-400" />
              Capability
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Multiple Production Lines
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Solid Orals, Parenterals, Syrups & Topicals
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-left hover:border-sky-500/50 transition-colors">
            <div className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-sky-400" />
              Assurance
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Strict Quality Control
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Continuous In-Process & Batch Analytical Release
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-left hover:border-teal-500/50 transition-colors">
            <div className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-teal-400" />
              Instrumentation
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Modern Laboratory
            </div>
            <div className="text-xs text-slate-400 mt-1">
              HPLC, GC, TOC & Dissolution Testing
            </div>
          </div>

        </div>

        {/* Interactive Production Line Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
          
          {/* Production Lines Selector */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Dedicated Manufacturing Units
            </h3>

            {PRODUCTION_LINES.map((line) => (
              <button
                key={line.id}
                onClick={() => setSelectedLine(line)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  selectedLine.id === line.id
                    ? 'bg-sky-950/80 border-sky-400 text-white shadow-lg shadow-sky-900/40'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div>
                  <h4 className="text-sm font-bold">{line.title}</h4>
                  <span className="text-xs text-slate-400 block mt-0.5">{line.cleanroomGrade}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${selectedLine.id === line.id ? 'text-sky-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Active Line Detail Card */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-64 sm:h-72">
              <img
                src={selectedLine.image}
                alt={selectedLine.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-teal-300 border border-slate-700">
                Capacity: {selectedLine.annualCapacity}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-slate-300 uppercase tracking-wider block font-mono">
                  Cleanroom Rating: {selectedLine.cleanroomGrade}
                </span>
                <h4 className="text-xl font-bold font-sans mt-1">
                  {selectedLine.title}
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedLine.description}
            </p>

            {/* Key Equipment Bullet points */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Installed Machinery & Technology:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedLine.equipment.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-300 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                to="/manufacturing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold text-xs shadow-md transition-all"
              >
                <span>Explore Full Manufacturing Facility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
