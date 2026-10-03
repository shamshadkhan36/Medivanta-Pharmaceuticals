import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Globe2, 
  Pill, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Building,
  FileCheck2
} from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '25+',
      unit: 'Years',
      label: 'Of Excellence',
      desc: 'Decades of formulation experience and reliable pharmaceutical supply.',
      color: 'from-sky-500 to-blue-600',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      icon: Globe2,
      value: '30+',
      unit: 'Countries',
      label: 'Markets Served',
      desc: 'Export footprints across MENA, Africa, Southeast Asia & CIS regions.',
      color: 'from-teal-500 to-emerald-600',
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200'
    },
    {
      icon: Pill,
      value: '100+',
      unit: 'Dossiers',
      label: 'Products Formulated',
      desc: 'Spanning tablets, capsules, injectables, syrups, and pediatric drops.',
      color: 'from-blue-600 to-indigo-600',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: Users,
      value: '500+',
      unit: 'Clients',
      label: 'Healthcare Partners',
      desc: 'Supplying hospitals, distributors, and global pharma organizations.',
      color: 'from-indigo-500 to-purple-600',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200'
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            About Medivanta Pharmaceuticals
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Committed to Better Healthcare
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Medivanta Pharmaceuticals is a premier Indian pharmaceutical manufacturer and exporter focused on developing, manufacturing, and supplying quality medicines and healthcare formulations globally.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Facility Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
                alt="Modern Pharmaceutical Analytical Laboratory"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="bg-sky-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-2 inline-block">
                  Analytical QC & QA Infrastructure
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Advanced High-Performance Liquid Chromatography (HPLC) & Cleanroom Isolation suites designed for precision batch testing.
                </p>
              </div>
            </div>

            {/* Experience Pill Accent */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Building className="w-6 h-6" />
              </div>
              <div className="text-left pr-2">
                <div className="text-lg font-extrabold text-slate-900 leading-tight">Sanand GIDC</div>
                <div className="text-xs text-slate-500">Flagship Production Facility</div>
              </div>
            </div>
          </div>

          {/* Corporate Profile Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Delivering High-Quality Formulations for Institutional & Commercial Supply
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Headquartered in Mumbai with advanced manufacturing facilities in Gujarat, Medivanta Pharmaceuticals bridges cutting-edge pharmaceutical sciences with cost-efficient, scalable manufacturing. We partner with healthcare distributors, hospital groups, and multinational pharmaceutical companies to manufacture high-yield, stable therapeutic formulations.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our facilities operate under strict cGMP principles, with specialized suites for solid orals, sterile injectables, oral suspensions, and pediatric formulations. Every batch is supported by comprehensive analytical documentation and CTD/ACTD registration dossiers.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Modern High-Throughput Automation</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Zone IVb Stability Tested</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>B2B Contract & Private Labeling</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Complete CTD/eCTD Dossier Support</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/manufacturing"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Tour Our Facilities</span>
              </Link>
            </div>
          </div>

        </div>

        {/* 4 Required Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {stat.unit}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans mb-1">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-slate-800 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
