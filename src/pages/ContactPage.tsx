import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  User, 
  Globe, 
  Layers, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    businessType: 'Distributor',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `MV-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      businessType: 'Distributor',
      message: '',
    });
  };

  const faqs = [
    {
      q: 'What are the typical Minimum Order Quantities (MOQs) for commercial batches?',
      a: 'For solid oral dosages (tablets/capsules), standard minimum batch runs start from 100,000 to 200,000 units depending on strip/blister configuration. For liquid orals, MOQs start from 10,000 bottles, and sterile injectables from 15,000 vials.'
    },
    {
      q: 'Do you provide ready-to-submit regulatory dossiers in CTD / eCTD format?',
      a: 'Yes. Medivanta maintains complete Common Technical Dossiers (CTD) and ASEAN Common Technical Dossiers (ACTD) for our active product formulations, including Modules 1 to 5 with stability data under Zone IVb (30°C / 75% RH) conditions.'
    },
    {
      q: 'Can international clients schedule a physical or virtual plant audit?',
      a: 'Absolutely. We facilitate vendor qualification audits for authorized distributors, institutional buyers, and pharmaceutical partners. Both on-site visits to our Sanand manufacturing plant and live virtual audits can be scheduled with our QA team.'
    },
    {
      q: 'What are the standard production and shipping lead times?',
      a: 'Standard commercial batch manufacturing cycles average 4 to 6 weeks from purchase order and artwork approval, followed by expedited air freight or bonded temperature-controlled sea container dispatch.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-sky-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-sky-500/40 text-sky-300 text-xs font-semibold backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Corporate Communications & B2B Inquiry Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
            Contact Medivanta Pharmaceuticals
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Connect directly with our international business development, contract manufacturing, or regulatory affairs divisions. We respond to verified pharmaceutical inquiries within 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 text-left">
              <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
                
                <div className="mb-6 pb-4 border-b border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 font-sans">
                    Business Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide your corporate details to receive product catalogs, indicative pricing, and regulatory dossier summaries.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Enquiry Successfully Logged!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.companyName}</strong> has been assigned tracking code:
                    </p>
                    <div className="inline-block px-4 py-2 bg-white rounded-xl font-mono text-sm font-bold text-sky-800 border border-slate-300 shadow-sm">
                      {ticketId}
                    </div>
                    <p className="text-xs text-slate-500">
                      Our commercial director for <strong>{formData.country || 'your territory'}</strong> will contact you via {formData.email}.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-sky-600" />
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-teal-600" />
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Global Health Care Ltd."
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-sky-600" />
                          Corporate Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="procurement@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-teal-600" />
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-sky-600" />
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kenya, Saudi Arabia, India"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-teal-600" />
                          Business Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors"
                        >
                          <option value="Distributor">Distributor</option>
                          <option value="Pharmaceutical Company">Pharmaceutical Company</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Pharmacy">Pharmacy</option>
                          <option value="Healthcare Organization">Healthcare Organization</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Detailed Message & Procurement Specs <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please mention specific products (e.g. Medivanta-CV 625), estimated volume, packaging requirements, or import registration support needed..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
                      >
                        <span>Send Official Enquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Office Locations & Direct Contacts */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-sans">
                      Corporate Headquarters
                    </h4>
                    <span className="text-xs text-sky-700 font-medium">Mumbai, India</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Level 11, Maker Maxity, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>+91 (022) 4890 1200 / 1201</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>exports@medivantapharma.com</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-sans">
                      Sanand Manufacturing Campus
                    </h4>
                    <span className="text-xs text-teal-700 font-medium">Gujarat, India</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Plot 42-45, Pharma SEZ, Sanand GIDC, Ahmedabad, Gujarat 382170, India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>+91 (02717) 458 900</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>manufacturing@medivantapharma.com</span>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
                  Department Direct Lines
                </span>
                <div className="divide-y divide-slate-800 text-xs space-y-2">
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-400">Institutional Tenders:</span>
                    <span className="font-semibold text-slate-200">tenders@medivantapharma.com</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-400">Regulatory Affairs:</span>
                    <span className="font-semibold text-slate-200">regulatory@medivantapharma.com</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-400">Pharmacovigilance:</span>
                    <span className="font-semibold text-slate-200">pv@medivantapharma.com</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
              B2B Partner Inquiries
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-sky-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
