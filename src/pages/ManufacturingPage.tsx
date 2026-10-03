import React from 'react';
import { 
  MANUFACTURING_STATS, 
  PRODUCTION_LINES 
} from '../data/facilities';
import { 
  Cpu, 
  CheckCircle2, 
  Droplets, 
  Wind, 
  PackageCheck, 
  Boxes 
} from 'lucide-react';

interface ManufacturingPageProps {
  onOpenEnquiry: () => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({
  onOpenEnquiry,
}) => {
  const facilityHighlights = [
    {
      title: 'Water Treatment Infrastructure',
      subtitle: 'USP-Grade Purified Water & WFI Generation',
      desc: 'Double-pass Reverse Osmosis (RO), Electro-deionization (EDI), and multi-column distillation generating pharmacopoeial Water For Injection (WFI). Continuous inline Total Organic Carbon (TOC) and conductivity sensors ensure zero bio-burden.',
      icon: Droplets
    },
    {
      title: 'Advanced HVAC Air Handling',
      subtitle: 'Classified Cleanroom Cascades & HEPA H14',
      desc: 'Separate terminal HEPA-filtered Air Handling Units (AHUs) maintain strict positive pressure cascades, 40+ air changes per hour, and relative humidity control (<30% RH for hygroscopic antibiotic suites).',
      icon: Wind
    },
    {
      title: '2D Barcode Serialization & Packaging',
      subtitle: 'Global Track-and-Trace Compliance',
      desc: 'Integrated automated packaging suites equipped with high-resolution cameras, optical character recognition (OCR), online weight checkweighers, and aggregation software.',
      icon: PackageCheck
    },
    {
      title: 'Controlled Cold Chain Warehousing',
      subtitle: 'Validated 2°C–8°C & 15°C–25°C Storage',
      desc: 'Computerized warehouse management system (WMS) managing over 6,500 pallet positions with automated temperature logging, dual-backup power generators, and dedicated quarantine zones.',
      icon: Boxes
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/40 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>Industrial Infrastructure & Capacity</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Pharmaceutical Manufacturing Facility
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Our 100,000+ sq. ft. manufacturing campus in Sanand, Gujarat is engineered to international cGMP standards, featuring closed-loop material flows, automated rotary tableting, and isolator-based sterile filling.
          </p>
        </div>
      </section>

      {/* Required Statistics Grid */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {MANUFACTURING_STATS.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 shadow-sm transition-all">
                <span className="text-3xl font-extrabold text-slate-900 font-sans block mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-sky-700 block mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 leading-relaxed block">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Lines In-Depth Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              Unit Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Dedicated Dosage Form Suites
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Engineered with segregated corridors, differential air cascades, and automated machinery to completely eliminate cross-contamination risk.
            </p>
          </div>

          <div className="space-y-12">
            {PRODUCTION_LINES.map((line, idx) => (
              <div 
                key={line.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
              >
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100 border border-slate-200">
                  <img
                    src={line.image}
                    alt={line.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-teal-300 border border-slate-700">
                    Annual: {line.annualCapacity}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-sky-50 text-sky-700 text-xs font-bold px-2.5 py-1 rounded-md border border-sky-100">
                      Unit {idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {line.cleanroomGrade}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-sans">
                    {line.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {line.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Machinery & Technical Specifications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {line.equipment.map((item, eIdx) => (
                        <div key={eIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cleanroom & Utility Systems */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
              Plant Engineering & Utilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Critical Engineering Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built on pharmaceutical engineering best practices to guarantee uninterrupted sterility, temperature stability, and cleanroom air classifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {facilityHighlights.map((fh, idx) => {
              const Icon = fh.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-600 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">{fh.title}</h3>
                  <p className="text-xs font-semibold text-sky-700">{fh.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{fh.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contract Manufacturing & Technical Transfer CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
            Third-Party Manufacturing & Loan Licensing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
            Scale Your Pharmaceutical Production With Medivanta
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you require pilot batch validation, technology transfer of high-potency formulations, or commercial volume contract manufacturing, our engineering and regulatory teams ensure turnkey readiness.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Request Plant Audit & Batch Capacity
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
