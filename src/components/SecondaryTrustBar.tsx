import React from 'react';
import { Sparkles, RefreshCw, BadgePercent, Heart } from 'lucide-react';

export const SecondaryTrustBar: React.FC = () => {
  const items = [
    {
      icon: Sparkles,
      title: 'TRENDING STYLES',
      sub: 'Stay ahead with the latest designs',
    },
    {
      icon: RefreshCw,
      title: 'EASY RETURNS',
      sub: '30-day hassle-free returns',
    },
    {
      icon: BadgePercent,
      title: 'BEST PRICES',
      sub: 'Premium quality at unbeatable prices',
    },
    {
      icon: Heart,
      title: 'LOVED BY 10K+',
      sub: 'Thousands of happy customers',
    },
  ];

  return (
    <section className="bg-[#FAF8F6] border-y border-[#E8E2DF] py-6 my-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2DF] flex items-center justify-center text-[#D81B68] shadow-sm flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5 leading-tight">
                  {item.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
