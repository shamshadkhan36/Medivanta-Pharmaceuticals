import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  FlaskConical, 
  FileCheck2, 
  Truck, 
  Globe2,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Quality First',
      description: 'End-to-end quality assurance governing vendor qualification, in-process controls, and finished batch analytical validation under strict pharmacopoeial protocols.',
      icon: ShieldCheck,
      color: 'sky',
      badge: 'Zero-Defect Goal'
    },
    {
      title: 'Advanced Manufacturing',
      description: 'Over 100,000 sq. ft. of cleanroom manufacturing suites featuring automated rotary tableting, closed isolator vial filling, and high-speed blister packaging.',
      icon: Cpu,
      color: 'teal',
      badge: 'Automation'
    },
    {
      title: 'Research & Development',
      description: 'Dedicated Formulation & Development (F&D) center developing enhanced bioavailability generics, complex release profiles, and pediatric-friendly liquids.',
      icon: FlaskConical,
      color: 'indigo',
      badge: 'F&D Excellence'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Robust regulatory affairs division supporting partners with CTD, ACTD, and eCTD submission dossiers, stability zone IVb data, and complete traceability.',
      icon: FileCheck2,
      color: 'blue',
      badge: 'eCTD Ready'
    },
    {
      title: 'Reliable Supply Chain',
      description: 'Predictable manufacturing schedules, bonded cold-chain capabilities, buffer inventory agreements, and end-to-end global freight logistical coordination.',
      icon: Truck,
      color: 'cyan',
      badge: 'On-Time SLA'
    },
    {
      title: 'Global Distribution',
      description: 'Established distributor presence across 30+ international markets in South Asia, the Middle East, Sub-Saharan Africa, Southeast Asia, and CIS countries.',
      icon: Globe2,
      color: 'emerald',
      badge: '30+ Markets'
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>The Medivanta Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Why Choose Medivanta Pharmaceuticals
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering the reliability, regulatory rigor, and technological capability required by leading hospitals, governments, and commercial distributors worldwide.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-sky-600 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors font-sans">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn how we uphold {pillar.title}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
