import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, CreditCard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_CONFIG } from '../config';

const messages = [
  {
    text: `Free delivery inside Kathmandu Valley above रू ${STORE_CONFIG.shipping.freeThreshold.toLocaleString()}`,
    icon: <Truck className="w-3.5 h-3.5" />
  },
  {
    text: "Cash on Delivery available across Nepal",
    icon: <CreditCard className="w-3.5 h-3.5" />
  },
  {
    text: "Easy 7-day returns & exchanges",
    icon: <ShieldCheck className="w-3.5 h-3.5" />
  }
];

interface AnnouncementBarProps {
  currency: string;
  onCurrencyChange: (c: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currency,
  onCurrencyChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#D81B68] text-white py-2 px-4 border-b border-[#A80F4F]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 h-8 md:h-6">
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-widest border-r border-white/20 pr-4">
            <span className="opacity-70">Region:</span>
            <span>Nepal (+977)</span>
          </div>
        </div>

        {/* Messages Slider */}
        <div className="flex-1 flex justify-center items-center relative overflow-hidden h-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-center whitespace-nowrap"
            >
              {messages[currentIndex].icon}
              <span>{messages[currentIndex].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Currency selector */}
        <div className="flex items-center space-x-1 ml-auto text-[10px] font-bold uppercase tracking-widest">
          <span className="opacity-70 hidden sm:inline mr-1">Currency:</span>
          <div className="relative inline-block text-left">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="bg-white/10 hover:bg-white/20 text-white rounded px-2 py-0.5 pr-5 text-[10px] font-bold appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-white transition"
            >
              <option value="NPR" className="text-gray-900">NPR (रू)</option>
              <option value="USD" className="text-gray-900">USD ($)</option>
            </select>
            <ChevronDown className="w-3 h-3 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
};
