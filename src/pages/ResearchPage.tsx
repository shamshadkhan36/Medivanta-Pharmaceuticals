import React from 'react';
import { 
  FlaskRound as Flask, 
  Microscope, 
  Dna, 
  LineChart, 
  TestTubes, 
  ShieldCheck, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface ResearchPageProps {
  onOpenEnquiry: () => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onOpenEnquiry }) => {
  const pipeline = [
    {
      code: 'MV-FND-402',
      generic: 'Empagliflozin & Metformin HCl Sustained Release',
      dosage: 'Bilayer Tablet',
      segment: 'Endocrinology / Anti-Diabetic',
      status: 'Scale-Up Batch Stability Testing (ICH Zone IVb)',
      stage: 'Scale-Up'
    },
    {
      code: 'MV-FND-318',
      generic: 'Montelukast Sodium & Bilastine Dispersible',
      dosage: 'Orally Disintegrating Tablet (ODT)',
      segment: 'Pulmonology & Allergy',
      status: 'Analytical Method Validation (HPLC Dissolution)',
      stage: 'Method Dev'
    },
    {
      code: 'MV-FND-509',
      generic: 'Meropenem Trihydrate & Vaborbactam Lyophilized',
      dosage: 'Sterile Powder for Injection',
      segment: 'Critical Care / Carbapenem',
      status: 'Formulation Optimization & Lyophilization Cycle Setup',
      stage: 'Pre-Formulation'
    },
    {
      code: 'MV-FND-224',
      generic: 'Iron Bisglycinate, Folic Acid & B12 Liposomal',
      dosage: 'Liposomal Softgel Capsule',
      segment: 'Nutraceutical / Hematology',
      status: 'Pilot Bioavailability Evaluation Completed',
      stage: 'Dossier Prep'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/40 text-teal-300 text-xs font-semibold backdrop-blur-sm">
            <Flask className="w-3.5 h-3.5 text-teal-400" />
            <span>Formulation Sciences & Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Innovation Driven by Science
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Medivanta’s R&D division translates complex molecular entities into high-stability, commercial-scale generic formulations. Our formulation scientists and analytical chemists drive formulation optimization, stability assurance, and novel drug delivery systems.
          </p>
        </div>
      </section>

      {/* R&D Core Domains */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Formulation & Analytical Research
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From reverse-engineering reference listed drugs (RLDs) to commercial scale-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <TestTubes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Formulation Development (F&D)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Development of immediate-release and sustained-release pellets, multi-particulate systems, moisture-barrier dry suspensions, and micronized topical emulsions.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700">
                Solubility & Bioavailability Enhancement
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Analytical Method Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creation and validation of specific HPLC, UPLC, and GC analytical methods to detect low-level genotoxic impurities, degradation pathways, and active potency.
              </p>
              <div className="pt-2 text-xs font-semibold text-sky-700">
                ICH Q2(R1) Method Validation
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Stability & Photostability Studies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Walk-in photostability and climatic chambers running 6-month accelerated and 36-month real-time testing under Zone IVb (30°C / 75% RH) guidelines.
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700">
                Zone IVb Climatic Stability Guaranteed
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Bioequivalence (BE) Studies Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-vitro comparative dissolution profiling (f1 difference & f2 similarity factors) across varying pH media (pH 1.2, 4.5, 6.8) to ensure bioequivalence to innovator brands.
              </p>
              <div className="pt-2 text-xs font-semibold text-sky-700">
                f2 Dissolution Profile Matching
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Pilot Scale-Up Plant</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated pilot scale-up machinery (10 kg to 50 kg batch size) mimicking full production equipment to optimize critical process parameters (CPPs).
              </p>
              <div className="pt-2 text-xs font-semibold text-teal-700">
                Seamless Commercial Tech Transfer
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Taste-Masking & Pediatric NDDS</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Micro-encapsulation of bitter active substances to formulate patient-friendly pediatric drops, orally disintegrating tablets, and pleasant oral liquids.
              </p>
              <div className="pt-2 text-xs font-semibold text-sky-700">
                Patient-Centric Formulations
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* R&D Pipeline Table */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              Innovation Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Formulations Currently in Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Available for future territorial licensing, co-development, and distribution pre-booking.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-left">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6">Project ID</th>
                    <th className="py-4 px-6">Formulation Name</th>
                    <th className="py-4 px-6">Dosage Form</th>
                    <th className="py-4 px-6">Therapeutic Segment</th>
                    <th className="py-4 px-6">Current R&D Milestone</th>
                    <th className="py-4 px-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pipeline.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-sky-700">{item.code}</td>
                      <td className="py-4 px-6 font-semibold text-slate-900">{item.generic}</td>
                      <td className="py-4 px-6 text-slate-600">{item.dosage}</td>
                      <td className="py-4 px-6 text-slate-600">{item.segment}</td>
                      <td className="py-4 px-6 text-slate-500">{item.status}</td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                          {item.stage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Inquire About Pipeline Co-Development</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
