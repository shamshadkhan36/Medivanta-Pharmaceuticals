import React from 'react';
import { 
  QUALITY_PILLARS, 
  COMPLIANCE_BADGES 
} from '../data/quality';
import { 
  ShieldCheck, 
  Award, 
  FlaskConical, 
  CheckCircle2, 
  ClipboardList
} from 'lucide-react';

interface QualityPageProps {
  onOpenEnquiry: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenEnquiry }) => {
  const threeTierRelease = [
    {
      step: '01',
      title: 'Raw Material & API Clearance',
      desc: 'Active Pharmaceutical Ingredients (APIs) and excipients undergo strict quarantine, sampling, Fourier-Transform Infrared (FTIR) identification, assay, and microbial bioburden testing before release into dispensing.',
      specs: '100% Vendor Testing & Lot Verification'
    },
    {
      step: '02',
      title: 'In-Process Quality Control (IPQC)',
      desc: 'Automated monitoring during manufacturing stages: tablet hardness, weight variation, friability, disintegration time, seal integrity, and sterile particulate checks at 15-minute intervals.',
      specs: 'Statistical Process Control (SPC)'
    },
    {
      step: '03',
      title: 'Finished Product Commercial Release',
      desc: 'Finished formulation validation by independent Quality Assurance: assay by HPLC, dissolution profiling, impurity profiling, sterility testing (for parentals), and batch manufacturing record (BMR) reconciliation.',
      specs: 'Authorized Qualified Person (QP) Sign-off'
    }
  ];

  const analyticalInstruments = [
    { name: 'High-Performance Liquid Chromatography (HPLC)', detail: 'Waters & Shimadzu quaternary systems with UV/PDA detectors for assay & related substances.' },
    { name: 'Gas Chromatography (GC)', detail: 'Headspace GC systems for residual solvent profiling and volatile purity analysis.' },
    { name: 'Automated Dissolution Testers', detail: 'USP Apparatus I & II with online autosamplers for multi-point comparative dissolution.' },
    { name: 'FTIR Spectrophotometers', detail: 'Diamond crystal ATR for rapid, non-destructive chemical identity verification.' },
    { name: 'Stability Chambers (Walk-in)', detail: 'ICH Zone II & IVb validated walk-in chambers with 24/7 temperature/humidity backup alarms.' },
    { name: 'Total Organic Carbon (TOC) Analyzers', detail: 'Online continuous TOC monitoring for Purified Water & WFI loops.' }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/40 text-teal-300 text-xs font-semibold backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Quality Assurance & Regulatory Governance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Quality You Can Trust
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Medivanta operates with an unwavering quality philosophy. Our dedicated QA and QC departments enforce international pharmacopoeial standards through end-to-end documentation, validated analytical equipment, and strict three-tier batch release protocols.
          </p>
        </div>
      </section>

      {/* 6 Core Quality Pillars */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              Governance Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              The 6 Pillars of Quality Assurance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Systematic quality controls integrated across raw material procurement, manufacturing execution, and post-market pharmacovigilance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {QUALITY_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 font-extrabold flex items-center justify-center text-sm">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                      {pillar.metrics}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">{pillar.title}</h3>
                  <p className="text-xs font-semibold text-sky-700 mb-2">{pillar.shortDesc}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Documented in Medivanta Quality Manual</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Three-Tier Release Architecture */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
              Validation Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Three-Tier Batch Release Protocol
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every production lot traverses three distinct analytical checkpoints before receiving market dispatch authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {threeTierRelease.map((tier, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-sky-600 font-mono">
                    Stage {tier.step}
                  </span>
                  <ClipboardList className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  {tier.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tier.desc}
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-teal-700">
                  {tier.specs}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QC Laboratory Analytical Instrumentation */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              Analytical Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Quality Control Laboratory Instrumentation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Equipped with calibrated precision instruments to verify chemical purity, dissolution dynamics, and physicochemical attributes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {analyticalInstruments.map((inst, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-teal-400 transition-colors space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-sans">{inst.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{inst.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Compliance Badges Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
              Regulatory Audit Ready
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
              Compliance Badges & System Benchmarks
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Our quality management system is designed to fulfill national and international regulatory expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {COMPLIANCE_BADGES.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-300 block">
                  {b.badgeLabel}
                </span>
                <h4 className="text-sm font-bold text-white font-sans">{b.subtitle}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{b.scope}</p>
                <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                  {b.note}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenEnquiry}
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all"
            >
              Request Plant Quality Manual & Audit Documentation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
