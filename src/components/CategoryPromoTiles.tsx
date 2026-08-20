import React from 'react';
import { Truck } from 'lucide-react';
import pinkSatchelImg from '../assets/images/pink_satchel_bag_1787178388288.jpg';
import shoulderModelImg from '../assets/images/shoulder_model_bag_1787178401537.jpg';

interface CategoryPromoTilesProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryPromoTiles: React.FC<CategoryPromoTilesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* TILE 1: SATSATCHEL HANDBAGS */}
        <div className="bg-[#FAF8F6] border border-[#E8E2DF] rounded-xl p-6 flex items-center justify-between overflow-hidden relative group hover:shadow-md transition duration-200">
          <div className="z-10 max-w-[55%]">
            <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-gray-900 leading-tight">
              EXECUTIVE <br />
              <span className="text-[#D81B68]">HANDBAGS</span>
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 my-2 font-medium">
              FLORENTINE DOME EDIT
            </p>
            <button
              onClick={() => onSelectCategory('satchel')}
              className="bg-[#D81B68] hover:bg-[#A80F4F] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded transition"
            >
              Shop Now
            </button>
          </div>
          <div className="w-32 h-32 flex-shrink-0 relative">
            <img
              src={pinkSatchelImg}
              alt="Executive Handbag"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* TILE 2: SHOULDER HANDBAGS */}
        <div className="bg-[#F5EEE9] border border-[#E8E2DF] rounded-xl p-6 flex items-center justify-between overflow-hidden relative group hover:shadow-md transition duration-200">
          <div className="z-10 max-w-[55%]">
            <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-gray-900 leading-tight">
              SHOULDER <br />
              <span className="text-gray-800">HANDBAGS</span>
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 my-2 font-medium">
              SLEEK ARCHITECTURAL
            </p>
            <button
              onClick={() => onSelectCategory('shoulder')}
              className="bg-gray-900 hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded transition"
            >
              Shop Now
            </button>
          </div>
          <div className="w-32 h-32 flex-shrink-0 relative rounded-lg overflow-hidden border border-white/50 shadow-sm">
            <img
              src={shoulderModelImg}
              alt="Shoulder Handbags"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* TILE 3: FREE SHIPPING PROMO BANNER */}
        <div className="bg-[#D81B68] text-white rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-white/10 rounded-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-extrabold uppercase tracking-widest leading-tight">
                FREE SHIPPING
              </h3>
              <p className="text-xs font-semibold text-pink-100 uppercase tracking-wider">
                ON ORDERS OVER $99
              </p>
            </div>
          </div>
          <p className="text-[11px] text-pink-100 uppercase tracking-wide mb-3 leading-relaxed">
            THE OFFER IS VALID ON ALL OUR STORE ITEMS NATIONWIDE.
          </p>
          <button
            onClick={() => onSelectCategory('all')}
            className="self-start bg-white text-[#D81B68] hover:bg-pink-50 text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded shadow transition"
          >
            Claim Offer →
          </button>
        </div>
      </div>
    </section>
  );
};
