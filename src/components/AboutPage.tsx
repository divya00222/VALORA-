import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Gem, Truck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D81B68]">
          THE VALORA STORY
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 mb-4">
          Timeless Luxury, Handcrafted Without Compromise
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">
          Born from a passion for Florentine leatherwork and architectural silhouettes, VALORA designs
          everyday luxury handbags that celebrate intentional craftsmanship, durable elegance, and modern empowerment.
        </p>
      </div>

      {/* BRAND IMAGERY & FOUNDER STORY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E2DF]">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000"
            alt="VALORA Atelier artisan leather crafting"
            referrerPolicy="no-referrer"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/40">
            <p className="text-xs font-serif italic text-gray-800 text-center">
              "We believe a truly great handbag is both a practical companion and an intimate work of wearable art."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D81B68]">
            OUR HERITAGE
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Preserving Centuries of Leather Artistry
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Every VALORA piece begins with ethically certified Italian full-grain hides, curated for natural grain density and tactile softness. Our master artisans in Florence and Porto employ traditional saddle-stitching techniques alongside precision laser edge-finishing.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Unlike mass-produced accessories that degrade with time, our vegetable-tanned leathers develop an exquisite, rich patina that tells the unique journey of each owner.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E2DF]">
            <div className="p-4 bg-[#FAF8F6] rounded-xl border border-[#E8E2DF]">
              <span className="block font-serif text-2xl font-extrabold text-[#D81B68]">48+</span>
              <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold">
                Hours of Crafting Per Bag
              </span>
            </div>
            <div className="p-4 bg-[#FAF8F6] rounded-xl border border-[#E8E2DF]">
              <span className="block font-serif text-2xl font-extrabold text-[#D81B68]">100%</span>
              <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold">
                Ethical Italian Sourcing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D81B68]">
            OUR COMMITMENTS
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            Built On Uncompromising Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-[#E8E2DF] shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#D81B68] flex items-center justify-center mb-4">
              <Gem className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
              Full-Grain Italian Leather
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We exclusively use top-tier full-grain and vegetable-tanned calfskin leathers, paired with scratch-resistant 18k gold-plated brass hardware.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E8E2DF] shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#D81B68] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
              Lifetime Repair Guarantee
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We stand firmly behind our artisanal quality. Enjoy a 2-year full structural warranty and complimentary lifetime conditioning at any VALORA boutique.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E8E2DF] shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#D81B68] flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
              Zero-Waste Sustainability
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Offcut leather scraps are repurposed into petite cardholders and key charms, ensuring a near-zero waste production cycle across all collections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
