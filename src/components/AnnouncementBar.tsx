import React from 'react';
import { Truck, RotateCcw, ShieldCheck, ChevronDown } from 'lucide-react';

interface AnnouncementBarProps {
  currency: string;
  onCurrencyChange: (c: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currency,
  onCurrencyChange,
}) => {
  return (
    <div className="bg-[#D81B68] text-white text-xs py-2 px-4 border-b border-[#A80F4F]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="hidden lg:flex items-center space-x-6 mx-auto md:mx-0">
          <div className="flex items-center space-x-2">
            <Truck className="w-3.5 h-3.5" />
            <span className="font-medium tracking-wide uppercase text-[11px]">
              FREE SHIPPING on orders over $99
            </span>
          </div>
          <span className="text-pink-200">|</span>
          <div className="flex items-center space-x-2">
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="font-medium tracking-wide uppercase text-[11px]">
              Easy Returns 30-Day Guarantee
            </span>
          </div>
          <span className="text-pink-200">|</span>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-medium tracking-wide uppercase text-[11px]">
              Handcrafted Italian Leather
            </span>
          </div>
        </div>

        {/* Mobile carousel / simple single announcement */}
        <div className="lg:hidden flex items-center space-x-2 text-center text-[11px] uppercase tracking-wider font-medium">
          <Truck className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Complimentary Express Shipping over $99</span>
        </div>

        {/* Currency selector */}
        <div className="flex items-center space-x-1 ml-auto text-[11px] font-semibold">
          <span className="text-pink-100 hidden sm:inline mr-1">Currency:</span>
          <div className="relative inline-block text-left">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="bg-white/10 hover:bg-white/20 text-white rounded px-2 py-0.5 pr-5 text-xs font-bold appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-white transition"
            >
              <option value="USD" className="text-gray-900">USD $</option>
              <option value="EUR" className="text-gray-900">EUR €</option>
              <option value="GBP" className="text-gray-900">GBP £</option>
              <option value="CAD" className="text-gray-900">CAD $</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
};
