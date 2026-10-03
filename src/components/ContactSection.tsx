import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  User, 
  Globe, 
  Layers, 
  ShieldCheck,
  FileCheck2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
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

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-sky-600" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Initiate a Business Dialogue
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our global business development team is at your disposal for formulation licensing, distributor agreements, and contract manufacturing inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office & Plant Addresses */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Corporate HQ Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Corporate Headquarters</h3>
                  <span className="text-xs text-sky-700 font-semibold">Executive & International Business</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Level 11, Maker Maxity, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href="tel:+912248901200" className="hover:text-sky-700">+91 (022) 4890 1200 / 1201</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href="mailto:corporate@medivantapharma.com" className="hover:text-sky-700">corporate@medivantapharma.com</a>
                </p>
              </div>
            </div>

            {/* Manufacturing Plant Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Manufacturing Facility & Labs</h3>
                  <span className="text-xs text-teal-700 font-semibold">Sanand Pharma Industrial Corridor</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Plot 42-45, Pharma SEZ, Sanand GIDC, Ahmedabad, Gujarat 382170, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <a href="tel:+912717458900" className="hover:text-teal-700">+91 (02717) 458 900</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                  <a href="mailto:plant@medivantapharma.com" className="hover:text-teal-700">plant@medivantapharma.com</a>
                </p>
              </div>
            </div>

            {/* Working Hours & SLAs */}
            <div className="p-4 rounded-xl bg-sky-950 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400" />
                <div>
                  <span className="font-semibold block">Business Desk Hours</span>
                  <span className="text-slate-300">Mon – Sat: 09:00 AM – 06:30 PM IST</span>
                </div>
              </div>
              <span className="bg-teal-500/20 text-teal-300 px-2 py-1 rounded text-[11px] font-semibold border border-teal-500/30">
                24h Response
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl text-left">
              
              <div className="mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  Send a Business Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our regional market director will reach out with product dossiers and pricing models.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry on behalf of <strong>{formData.companyName}</strong> has been logged with reference code:
                  </p>
                  <div className="inline-block px-4 py-2 bg-slate-100 rounded-xl font-mono text-sm font-bold text-sky-800 border border-slate-200">
                    {ticketId}
                  </div>
                  <p className="text-xs text-slate-500">
                    A verification email has been dispatched to <strong>{formData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="bg-slate-900 hover:bg-sky-600 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sky-600" />
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-teal-600" />
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Health Logistics"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-sky-600" />
                        Official Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-teal-600" />
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Country */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-sky-600" />
                        Country / Jurisdiction <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Saudi Arabia, Vietnam, India"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Business Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-teal-600" />
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors"
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

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Message / Product Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please indicate product categories of interest, tentative batch quantities, packaging specifications, or market registration timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Demo Notice */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <FileCheck2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Inquiries processed according to B2B pharmaceutical compliance standards.</span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-sky-600/25 transition-all"
                    >
                      <span>Send Business Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
