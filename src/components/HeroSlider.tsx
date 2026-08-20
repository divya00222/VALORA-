import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroHandbagImg from '../assets/images/hero_fashion_handbag_1787178377040.jpg';
import pinkSatchelImg from '../assets/images/pink_satchel_bag_1787178388288.jpg';
import shoulderModelImg from '../assets/images/shoulder_model_bag_1787178401537.jpg';

interface HeroSliderProps {
  onShopNow: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onShopNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      eyebrow: 'CROSS BODY & TOTES',
      badge: 'GET UP TO 50% OFF',
      headline: 'Discover Our Gorgeous Collection',
      subtext: 'FIND YOUR PERFECT HANDCRAFTED LEATHER BAG TODAY!',
      cta: 'SHOP NOW',
      image: heroHandbagImg,
      bgColor: 'bg-[#F9F6F0]',
    },
    {
      id: 2,
      eyebrow: 'THE FLORENTINE SATSatchel',
      badge: 'NEW SEASON 2026',
      headline: 'Vivid Fuchsia Polish',
      subtext: 'HAND-PAINTED EDGES AND POLISHED 18K GOLD HARDWARE ACCENTS.',
      cta: 'EXPLORE SATSATCHELS',
      image: pinkSatchelImg,
      bgColor: 'bg-[#FAF0F4]',
    },
    {
      id: 3,
      eyebrow: 'EXECUTIVE SHOULDER EDIT',
      badge: 'LIMITED EDITION',
      headline: 'Sleek Modern Architecture',
      subtext: 'CRAFTED FOR THE CONFIDENT PROFESSIONAL IN FULL-GRAIN BOX CALF.',
      cta: 'DISCOVER THE EDIT',
      image: shoulderModelImg,
      bgColor: 'bg-[#F3F4F6]',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      <div
        className={`relative rounded-2xl overflow-hidden border border-[#E8E2DF] shadow-md transition-colors duration-500 ${slide.bgColor}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px] md:min-h-[480px] lg:min-h-[500px]">
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 flex flex-col justify-center z-10">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-gray-800">
                {slide.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#D81B68] leading-tight tracking-tight mb-2">
              {slide.badge}
            </h2>

            <p className="text-base sm:text-lg text-gray-800 font-sans font-medium uppercase tracking-wider mb-6 max-w-lg leading-relaxed">
              {slide.subtext}
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={onShopNow}
                className="bg-[#D81B68] hover:bg-[#A80F4F] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200 flex items-center space-x-2 group"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* RIGHT EDITORIAL IMAGE AREA */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
            <img
              src={slide.image}
              alt={slide.headline}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-opacity duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* CAROUSEL CONTROLS */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-3 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="p-1 hover:text-[#D81B68] transition text-gray-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex space-x-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#D81B68] w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="p-1 hover:text-[#D81B68] transition text-gray-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
