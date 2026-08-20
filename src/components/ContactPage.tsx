import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D81B68]">
          CONCIERGE & SUPPORT
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4">
          We’re Here To Assist You
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
          Whether you need styling advice, bespoke personalization, order tracking, or leather care guidance, our dedicated VIP concierge team is at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* CONTACT INFO & STORES */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#E8E2DF] space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              VALORA Concierge Service
            </h3>
            
            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#D81B68] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-gray-900">Email Inquiries</span>
                  <span className="text-gray-600">concierge@valoraluxury.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#D81B68] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-gray-900">VIP Phone Line</span>
                  <span className="text-gray-600">+1 (800) 825-6721 (Toll-free)</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#D81B68] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-gray-900">Operating Hours</span>
                  <span className="text-gray-600">Mon - Fri: 8:00 AM – 8:00 PM EST</span>
                  <span className="text-gray-600 block">Sat - Sun: 10:00 AM – 6:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E8E2DF] space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-900">
              Flagship Boutiques
            </h3>
            
            <div className="space-y-3 text-xs text-gray-600">
              <div className="border-b border-[#E8E2DF] pb-3">
                <span className="font-bold text-gray-900 block">New York Flagship</span>
                <p>742 Madison Avenue, New York, NY 10065</p>
                <p className="text-[11px] text-gray-400">Tel: (212) 555-0198</p>
              </div>

              <div>
                <span className="font-bold text-gray-900 block">Paris Atelier</span>
                <p>28 Rue du Faubourg Saint-Honoré, 75008 Paris, France</p>
                <p className="text-[11px] text-gray-400">Tel: +33 1 42 68 00 00</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2DF] shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-pink-50 text-[#D81B68] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  Message Dispatched
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {name}. A dedicated VALORA VIP advisor will reply to <strong>{email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-4 bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Please provide details about your inquiry and our team will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Katherine Pierce"
                      className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. katherine@example.com"
                      className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Subject / Department
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  >
                    <option value="Product Inquiry">Product Inquiry & Sizing</option>
                    <option value="Order Status">Order Status & Tracking</option>
                    <option value="Leather Care & Repairs">Leather Care, Restoration & Warranty</option>
                    <option value="VIP Bespoke Monogramming">VIP Bespoke Monogramming</option>
                    <option value="Press & Partnership">Press & Wholesale Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How may we assist you today?"
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow-md transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
