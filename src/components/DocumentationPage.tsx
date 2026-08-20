import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Sparkles, HelpCircle, Ruler, RefreshCw, ChevronDown } from 'lucide-react';

export const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'care' | 'sizing' | 'warranty' | 'faq'>('care');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I protect my VALORA leather bag in rainy weather?',
      a: 'If caught in the rain, gently blot dry using a soft microfiber cloth. Allow it to air dry naturally away from direct radiators or heat sources. We recommend applying a moisture-barrier leather balm once every 3-4 months.',
    },
    {
      q: 'What is covered under the 2-Year Complimentary Warranty?',
      a: 'Our warranty covers all structural defects, stitching failures, broken zippers, zipper pulls, and hardware detachment. It does not cover natural leather wear, accidental tears, or third-party alterations.',
    },
    {
      q: 'How can I authenticate my VALORA handbag?',
      a: 'Every VALORA handbag is equipped with an integrated NFC microchip sewn discretely into the interior leather creed patch. Tap your smartphone against the creed to verify the unique digital certificate of authenticity and view artisan provenance.',
    },
    {
      q: 'Can I order bespoke monogramming after receiving my bag?',
      a: 'Yes! You can bring your bag to any VALORA Flagship Boutique within 90 days of purchase for complimentary hot-foil monogramming (up to 3 characters in gold, silver, or blind deboss).',
    },
    {
      q: 'What are the dimensions and laptop compatibility for totes?',
      a: 'The Florentine Large Leather Tote comfortably accommodates a 15.6" MacBook Pro, while the Structured Midi Satchel holds an 11" iPad Pro or standard tablet.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D81B68]">
          PRODUCT & ATELIER GUIDES
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4">
          Documentation & Care Guide
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
          Everything you need to know regarding leather maintenance, sizing standards, authenticity certification, and warranty services.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center border-b border-[#E8E2DF] mb-12">
        <div className="flex space-x-2 md:space-x-8 overflow-x-auto pb-px text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveSection('care')}
            className={`pb-3 border-b-2 flex items-center space-x-2 transition ${
              activeSection === 'care'
                ? 'border-[#D81B68] text-[#D81B68]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Leather Care</span>
          </button>

          <button
            onClick={() => setActiveSection('sizing')}
            className={`pb-3 border-b-2 flex items-center space-x-2 transition ${
              activeSection === 'sizing'
                ? 'border-[#D81B68] text-[#D81B68]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>Sizing & Dimensions</span>
          </button>

          <button
            onClick={() => setActiveSection('warranty')}
            className={`pb-3 border-b-2 flex items-center space-x-2 transition ${
              activeSection === 'warranty'
                ? 'border-[#D81B68] text-[#D81B68]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Warranty & NFC Auth</span>
          </button>

          <button
            onClick={() => setActiveSection('faq')}
            className={`pb-3 border-b-2 flex items-center space-x-2 transition ${
              activeSection === 'faq'
                ? 'border-[#D81B68] text-[#D81B68]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Client FAQs</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENTS */}
      <div className="max-w-4xl mx-auto">
        {/* LEATHER CARE */}
        {activeSection === 'care' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#E8E2DF]">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                4 Golden Rules of Handbag Longevity
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Italian full-grain leather is an organic material that matures gracefully when treated with appropriate conditioning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E8E2DF]">
                <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B68] font-bold text-xs flex items-center justify-center mb-3">
                  01
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Store in Provided Dust Bag</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Always store your handbag in its cotton dust bag stuffed with acid-free tissue paper to maintain its silhouette. Never store in plastic bags which trap moisture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E2DF]">
                <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B68] font-bold text-xs flex items-center justify-center mb-3">
                  02
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Avoid Direct Sun & Radiators</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Prolonged exposure to intense sunlight or heat sources will dry natural oils in the leather, causing premature cracking and discoloration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E2DF]">
                <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B68] font-bold text-xs flex items-center justify-center mb-3">
                  03
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Clean Spills Immediately</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Blot liquids with a dry microfibre towel without rubbing. For ink or oil stains, avoid chemical solvents and bring the bag to our repair atelier.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E8E2DF]">
                <span className="w-8 h-8 rounded-full bg-pink-50 text-[#D81B68] font-bold text-xs flex items-center justify-center mb-3">
                  04
                </span>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Condition Bi-Annually</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Use our organic beeswax and almond oil leather cream to nourish the grain and preserve water repellency before seasonal storage.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SIZING & DIMENSIONS */}
        {activeSection === 'sizing' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#E8E2DF]">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Handbag Silhouette & Fit Comparison
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Compare internal capacities across our staple silhouette families to discover your ideal daily carry.
              </p>
            </div>

            <div className="divide-y divide-[#E8E2DF] bg-white border border-[#E8E2DF] rounded-2xl overflow-hidden shadow-sm">
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D81B68]">Compact Carry</span>
                  <h4 className="font-serif font-bold text-base text-gray-900">Petite Crossbody & Evening Clutches</h4>
                  <p className="text-xs text-gray-500">Dimensions: 8.5" W × 5.5" H × 2.5" D</p>
                </div>
                <div className="text-xs text-gray-600 md:text-right">
                  <span className="font-bold text-gray-900 block">Holds:</span>
                  <span>iPhone 15 Pro Max, cardholder, lip tint, keys & compact mirror</span>
                </div>
              </div>

              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D81B68]">Medium Everyday</span>
                  <h4 className="font-serif font-bold text-base text-gray-900">Structured Satchel & Shoulder Hobo</h4>
                  <p className="text-xs text-gray-500">Dimensions: 11.5" W × 8.5" H × 4.2" D</p>
                </div>
                <div className="text-xs text-gray-600 md:text-right">
                  <span className="font-bold text-gray-900 block">Holds:</span>
                  <span>iPad 11", continental wallet, sunglasses case, cosmetic pouch & keys</span>
                </div>
              </div>

              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D81B68]">Spacious Work & Travel</span>
                  <h4 className="font-serif font-bold text-base text-gray-900">Florentine Work Tote & Travel Duffle</h4>
                  <p className="text-xs text-gray-500">Dimensions: 16.0" W × 12.0" H × 6.5" D</p>
                </div>
                <div className="text-xs text-gray-600 md:text-right">
                  <span className="font-bold text-gray-900 block">Holds:</span>
                  <span>15.6" Laptop, A4 documents, water bottle, full cosmetic bag & tablet</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WARRANTY & NFC */}
        {activeSection === 'warranty' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#E8E2DF] flex items-center space-x-4">
              <ShieldCheck className="w-12 h-12 text-[#D81B68] flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  2-Year International Craft Warranty
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  We guarantee the architectural integrity and artisan finishing of every VALORA bag worldwide.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2DF] space-y-4">
              <h4 className="font-serif text-base font-bold text-gray-900">
                NFC Digital Passport Authentication
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                To combat counterfeiting and ensure generational provenance, each VALORA bag contains an encrypted RFID/NFC chip. Hold any NFC-enabled smartphone against the interior heat-stamped leather badge to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                <li>Verify genuine atelier certification and origin year</li>
                <li>Access your encrypted digital ownership certificate</li>
                <li>Activate your 2-year warranty instantly without paper receipts</li>
                <li>Book complimentary atelier spa cleaning appointments</li>
              </ul>
            </div>
          </div>
        )}

        {/* FAQS */}
        {activeSection === 'faq' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E2DF] rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center text-xs font-bold text-gray-900 hover:text-[#D81B68] transition"
                >
                  <span className="font-serif text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ml-2 ${
                      openFaq === idx ? 'rotate-180 text-[#D81B68]' : 'text-gray-400'
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-[#E8E2DF]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
