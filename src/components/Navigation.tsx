import React, { useState } from 'react';
import { ChevronDown, Tag, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface NavigationProps {
  products: Product[];
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onNavigateCategory: (category: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  products,
  activeTab,
  onSelectTab,
  onNavigateCategory,
  onSelectProduct,
}) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const featuredProduct = products.find((p) => p.isBestseller) || products[0];

  const categoriesList = [
    { name: 'Crossbody Bags', category: 'crossbody' },
    { name: 'Shoulder Bags', category: 'shoulder' },
    { name: 'Leather Totes', category: 'tote' },
    { name: 'Dome Satchels', category: 'satchel' },
    { name: 'Evening Clutches', category: 'evening' },
    { name: 'Travel Duffles', category: 'travel' },
  ];

  return (
    <nav className="hidden lg:block bg-white border-b border-[#E8E2DF] text-xs font-semibold tracking-wider uppercase text-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-8 h-12 relative">
        {/* HOME */}
        <button
          onClick={() => onSelectTab('home')}
          className={`py-3.5 border-b-2 transition ${
            activeTab === 'home'
              ? 'border-[#D81B68] text-[#D81B68]'
              : 'border-transparent hover:text-[#D81B68]'
          }`}
        >
          Home
        </button>

        {/* CATALOG WITH MEGA MENU */}
        <div
          className="relative group py-3.5 cursor-pointer"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <button
            onClick={() => onSelectTab('catalog')}
            className={`flex items-center space-x-1 border-b-2 transition ${
              activeTab === 'catalog'
                ? 'border-[#D81B68] text-[#D81B68]'
                : 'border-transparent group-hover:text-[#D81B68]'
            }`}
          >
            <span>Catalog</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {/* MEGA MENU DROPDOWN */}
          {isMegaMenuOpen && (
            <div className="absolute top-full left-0 w-[720px] bg-white border border-[#E8E2DF] shadow-2xl rounded-b-xl p-6 grid grid-cols-3 gap-6 z-50 animate-in fade-in slide-in-from-top-1 duration-150 normal-case">
              {/* Column 1: Shop By Category */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D81B68] mb-3 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Handbag Types</span>
                </h4>
                <ul className="space-y-2 text-xs font-medium text-gray-600">
                  {categoriesList.map((cat) => (
                    <li key={cat.category}>
                      <button
                        onClick={() => {
                          onNavigateCategory(cat.category);
                          setIsMegaMenuOpen(false);
                        }}
                        className="hover:text-[#D81B68] hover:translate-x-1 transition duration-150 block w-full text-left"
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Seasonal Collections */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">
                  Curated Edits
                </h4>
                <ul className="space-y-2 text-xs font-medium text-gray-600">
                  <li>
                    <button
                      onClick={() => {
                        onNavigateCategory('all');
                        setIsMegaMenuOpen(false);
                      }}
                      className="hover:text-[#D81B68] transition block"
                    >
                      New Autumn Arrivals 2026
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onNavigateCategory('satchel');
                        setIsMegaMenuOpen(false);
                      }}
                      className="hover:text-[#D81B68] transition block"
                    >
                      The Florentine Leather Series
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onNavigateCategory('evening');
                        setIsMegaMenuOpen(false);
                      }}
                      className="hover:text-[#D81B68] transition block"
                    >
                      Red Carpet Evening Clutches
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onNavigateCategory('travel');
                        setIsMegaMenuOpen(false);
                      }}
                      className="hover:text-[#D81B68] transition block text-[#D81B68] font-bold"
                    >
                      Flash Sale (Up to 50% Off)
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Featured Product Spotlight */}
              {featuredProduct && (
                <div
                  onClick={() => {
                    onSelectProduct(featuredProduct);
                    setIsMegaMenuOpen(false);
                  }}
                  className="bg-[#FAF8F6] p-3 rounded-lg border border-[#E8E2DF] hover:border-[#D81B68] cursor-pointer transition group/card"
                >
                  <div className="relative overflow-hidden rounded-md mb-2">
                    <img
                      src={featuredProduct.images[0]}
                      alt={featuredProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-32 object-cover group-hover/card:scale-105 transition duration-300"
                    />
                    <span className="absolute top-2 right-2 bg-[#D81B68] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      Featured
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 truncate">
                    {featuredProduct.name}
                  </h5>
                  <p className="text-[11px] text-[#D81B68] font-bold mt-0.5">
                    ${featuredProduct.price.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* BLOG */}
        <button
          onClick={() => onSelectTab('blog')}
          className={`py-3.5 border-b-2 transition ${
            activeTab === 'blog'
              ? 'border-[#D81B68] text-[#D81B68]'
              : 'border-transparent hover:text-[#D81B68]'
          }`}
        >
          Blog
        </button>

        {/* ABOUT US */}
        <button
          onClick={() => onSelectTab('about')}
          className={`py-3.5 border-b-2 transition ${
            activeTab === 'about'
              ? 'border-[#D81B68] text-[#D81B68]'
              : 'border-transparent hover:text-[#D81B68]'
          }`}
        >
          About Us
        </button>

        {/* DOCUMENTATION */}
        <button
          onClick={() => onSelectTab('documentation')}
          className={`py-3.5 border-b-2 transition ${
            activeTab === 'documentation'
              ? 'border-[#D81B68] text-[#D81B68]'
              : 'border-transparent hover:text-[#D81B68]'
          }`}
        >
          Documentation
        </button>

        {/* CONTACT US */}
        <button
          onClick={() => onSelectTab('contact')}
          className={`py-3.5 border-b-2 transition ${
            activeTab === 'contact'
              ? 'border-[#D81B68] text-[#D81B68]'
              : 'border-transparent hover:text-[#D81B68]'
          }`}
        >
          Contact Us
        </button>

        {/* SALE TAG */}
        <button
          onClick={() => {
            onNavigateCategory('sale');
          }}
          className="ml-auto flex items-center space-x-1 text-[#D81B68] hover:text-[#A80F4F] font-bold tracking-wider py-3.5 transition"
        >
          <Tag className="w-3.5 h-3.5" />
          <span>Outlet Sale</span>
        </button>
      </div>
    </nav>
  );
};
