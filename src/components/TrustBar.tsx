import React from 'react';
import { Truck, CreditCard, RotateCcw, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'CASH ON DELIVERY',
      subtitle: 'Available across Nepal',
    },
    {
      icon: ShieldCheck,
      title: 'SECURE PAYMENTS',
      subtitle: 'Trusted digital options',
    },
    {
      icon: RotateCcw,
      title: 'EASY RETURNS',
      subtitle: '7-day return policy',
    },
    {
      icon: Truck,
      title: 'NATIONWIDE DELIVERY',
      subtitle: 'We deliver to all districts',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 border-y border-[#E8E2DF] my-6 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center flex-shrink-0 text-[#D81B68]">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
