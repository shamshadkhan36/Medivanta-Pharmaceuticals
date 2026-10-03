import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope, 
  FlaskRound as Flask, 
  Dna, 
  LineChart, 
  ArrowRight,
  TestTubes,
  ShieldCheck
} from 'lucide-react';

export const RDSection: React.FC = () => {
  const rdFocusAreas = [
    {
      title: 'Formulation Development (F&D)',
      description: 'Designing stable, bio-equivalent oral solids, sustained-release matrix pellets, and micro-emulsified topical systems using modern pre-formulation screening.',
      icon: TestTubes,
      highlight: 'Solubility Enhancement'
    },
    {
      title: 'Product Improvement & Optimization',
      description: 'Reformulating mature therapeutic molecules to improve dissolution rates, reduce pill size, improve palatability for pediatric suspensions, and minimize GI irritation.',
      icon: LineChart,
      highlight: 'Bioavailability'
    },
    {
      title: 'Analytical Research & Method Development',
      description: 'Developing and validating HPLC, UPLC, and GC analytical methods to quantify ultra-trace impurities, assay active ingredients, and establish strict shelf-life specs.',
      icon: Microscope,
      highlight: 'Validated Methods'
    },
    {
      title: 'ICH Climatic Stability Studies',
      description: 'Dedicated stability chambers executing long-term and accelerated testing under ICH guidelines for climatic zones I, II, III, IVa, and IVb (hot & humid tropics).',
      icon: ShieldCheck,
      highlight: 'Zone IVb Testing'
    },
    {
      title: 'New Product Pipeline Development',
      description: 'Proactively exploring novel fixed-dose combinations (FDCs), patient-centric dispersible tablets, and specialized nutraceutical complexes ready for international licensing.',
      icon: Dna,
      highlight: 'Future Pipeline'
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Flask className="w-3.5 h-3.5 text-teal-600" />
            <span>Research & Development</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Innovation Driven by Science
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our scientific team integrates formulation chemistry, pharmacokinetics, and advanced analytical sciences to engineer high-potency, commercially viable therapeutic generics.
          </p>
        </div>

        {/* Feature Grid with Laboratory Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Scientific Capabilities List */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {rdFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-sans">
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-xl">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 text-[11px] font-bold text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-lg border border-teal-200 self-end sm:self-center">
                    {area.highlight}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Laboratory Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 text-white relative">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
                alt="Pharmaceutical Formulation Research Lab"
                className="w-full h-[450px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-left space-y-3">
                <span className="bg-teal-500 text-slate-950 text-[11px] font-extrabold uppercase px-2.5 py-1 rounded shadow-md inline-block">
                  Dedicated F&D Center
                </span>
                <h4 className="text-xl font-bold font-sans">
                  From Molecule Characterization to Scale-Up Batches
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our pilot plant replicates full-scale production parameters to ensure seamless scale-up and reproducible bioavailability.
                </p>

                <div className="pt-2">
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>Explore F&D Capabilities & Pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
