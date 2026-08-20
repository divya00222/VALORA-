import React from 'react';
import { ShieldCheck, Headphones, Award, Gift } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'SECURE PAYMENT',
      subtitle: '100% secure & trusted',
    },
    {
      icon: Headphones,
      title: '24/7 CUSTOMER SUPPORT',
      subtitle: "We're here to help anytime",
    },
    {
      icon: Award,
      title: 'PREMIUM QUALITY',
      subtitle: 'Stylish, durable & elegant',
    },
    {
      icon: Gift,
      title: 'SPECIAL OFFERS',
      subtitle: 'Exciting deals & discounts',
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
