import React from 'react';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Leaf, 
  Globe2,
  Sparkles
} from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const leadership = [
    {
      name: 'Dr. Alok V. Mehta',
      role: 'Founder & Managing Director',
      credentials: 'Ph.D. in Pharmaceutical Technology, UICT Mumbai',
      bio: 'Over 28 years of pharmaceutical executive leadership steering bulk active formulations, global plant accreditations, and multinational strategic alliances.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Sunita Ramanathan',
      role: 'Head of Global Research & Development',
      credentials: 'M.Pharm, Ph.D. in Novel Drug Delivery Systems',
      bio: 'Pioneered stabilized pellet formulations and sustained-release delivery vehicles with over 18 international formulation patents to her name.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Rajesh K. Singhania',
      role: 'Vice President — Quality Assurance & Regulatory',
      credentials: 'Lead Auditor & Regulatory Affairs Specialist',
      bio: 'Leads an internal audit cadre of 45 QA professionals, overseeing computerized system validation, 21 CFR Part 11 integrity, and international eCTD dossiers.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Director — International Business & Global Exports',
      credentials: 'MBA International Trade, Geneva',
      bio: 'Manages Medivanta’s commercial network across 30+ export destinations, coordinating territorial licensing agreements and institutional hospital supply.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const values = [
    {
      title: 'Scientific Rigor',
      desc: 'Formulations engineered with empirical precision, validated analytical methods, and evidence-backed pharmacokinetic profiles.',
      icon: Target
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Zero tolerance for deviations. Every batch follows standardized operating procedures with three-tier analytical clearance.',
      icon: ShieldCheck
    },
    {
      title: 'Patient-Centric Ethics',
      desc: 'Affordability and therapeutic efficacy at the heart of our operations, ensuring vital medicines reach underserved populations.',
      icon: Compass
    },
    {
      title: 'Global Partnership',
      desc: 'Collaborative, transparent relationships with distributors, hospital groups, and government healthcare organizations worldwide.',
      icon: Globe2
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/40 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Corporate Profile & Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Advancing Healthcare. <br />
            <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">
              Improving Lives Across Borders.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Established with a vision to deliver world-class therapeutic formulations, Medivanta Pharmaceuticals has grown into a leading Indian manufacturer and exporter trusted by healthcare systems in 30+ countries.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-sans">Our Vision</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To be an internationally recognized pharmaceutical manufacturing leader, driving therapeutic innovation, expanding access to life-saving medicines, and setting enduring benchmarks for quality, integrity, and operational excellence.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-sans">Our Mission</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To develop, manufacture, and distribute safe, efficacious, and affordable pharmaceutical products. We empower healthcare professionals through state-of-the-art cGMP manufacturing, robust analytical testing, and seamless international regulatory compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Heritage & Journey */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
                25+ Years of Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
                From a Specialized Formulation Unit to an International Exporter
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded over two decades ago in Mumbai’s pharmaceutical ecosystem, Medivanta Pharmaceuticals commenced operations with a focused facility dedicated to solid oral dosage forms. Through continuous reinvestment in advanced processing machinery and analytical capabilities, we expanded into sterile injectables, oral suspensions, and topical preparations.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Today, our flagship manufacturing facility in the Sanand Industrial Corridor spans over 100,000 square feet, supporting high-throughput commercial batches for leading private hospitals, government healthcare programs, and global distributors across Asia, Africa, the Middle East, and the CIS.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-2xl font-bold text-sky-700 block">1999</span>
                  <span className="text-slate-500 font-medium">Inception & First Formulation Unit</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-2xl font-bold text-teal-700 block">2026</span>
                  <span className="text-slate-500 font-medium">30+ Global Markets & 100+ Formulations</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Medivanta Manufacturing Line"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Our Guiding Values
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The fundamental pillars that govern our formulations, corporate conduct, and scientific responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Leadership & Scientific Directors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Guided by experienced pharmaceutical scientists, manufacturing veterans, and international regulatory directors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-64 overflow-hidden bg-slate-100">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 font-sans leading-tight">
                      {person.name}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700">
                      {person.role}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      {person.credentials}
                    </p>
                    <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG & Environmental Responsibility */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                <Leaf className="w-3.5 h-3.5" />
                <span>Environmental, Social & Governance (ESG)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans">
                Sustainable Pharmaceutical Manufacturing
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Medivanta is dedicated to reducing industrial environmental footprints through a Zero Liquid Discharge (ZLD) effluent treatment plant, 40% rooftop solar generation at our Sanand facility, and recyclable secondary packaging standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="font-bold text-teal-400 block">Zero Liquid Discharge</span>
                  <span className="text-slate-400">100% water recycled internally</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="font-bold text-sky-400 block">Solar Clean Power</span>
                  <span className="text-slate-400">Rooftop green power integration</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="font-bold text-teal-400 block">Eco Packaging</span>
                  <span className="text-slate-400">FSC certified carton boards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-sm shadow-xl transition-all"
              >
                Inquire With Corporate Team
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
