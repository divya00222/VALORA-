import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onNavigateCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onNavigateCategory,
}) => {
  return (
    <footer className="bg-white border-t border-[#E8E2DF] text-gray-700 text-xs pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#E8E2DF]">
        {/* BRAND COLUMN */}
        <div className="lg:col-span-1 space-y-3">
          <div
            className="cursor-pointer"
            onClick={() => onNavigateTab('home')}
          >
            <span className="font-serif text-2xl font-extrabold tracking-widest text-gray-900 block">
              VALORA
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans block mt-0.5">
              Handbags & Accessories
            </span>
          </div>

          <p className="text-gray-500 text-xs leading-relaxed">
            We bring you premium quality handcrafted leather handbags that combine style, elegance, and lifetime functionality.
          </p>

          <div className="flex items-center space-x-3 pt-2 text-gray-600">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="p-1.5 rounded-full bg-gray-100 hover:bg-[#D81B68] hover:text-white transition"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="p-1.5 rounded-full bg-gray-100 hover:bg-[#D81B68] hover:text-white transition"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="p-1.5 rounded-full bg-gray-100 hover:bg-[#D81B68] hover:text-white transition"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="p-1.5 rounded-full bg-gray-100 hover:bg-[#D81B68] hover:text-white transition"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* CATEGORIES */}
        <div>
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
            CATEGORIES
          </h4>
          <ul className="space-y-2 text-gray-600 font-medium">
            <li>
              <button
                onClick={() => onNavigateCategory('crossbody')}
                className="hover:text-[#D81B68] transition"
              >
                Crossbody Bags
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('shoulder')}
                className="hover:text-[#D81B68] transition"
              >
                Shoulder Bags
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('tote')}
                className="hover:text-[#D81B68] transition"
              >
                Leather Totes
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('satchel')}
                className="hover:text-[#D81B68] transition"
              >
                Dome Satchels
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('evening')}
                className="hover:text-[#D81B68] transition"
              >
                Evening Clutches
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateCategory('travel')}
                className="hover:text-[#D81B68] transition"
              >
                Travel Duffles
              </button>
            </li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
            INFORMATION
          </h4>
          <ul className="space-y-2 text-gray-600 font-medium">
            <li>
              <button
                onClick={() => onNavigateTab('home')}
                className="hover:text-[#D81B68] transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('catalog')}
                className="hover:text-[#D81B68] transition"
              >
                Search Products
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('blog')}
                className="hover:text-[#D81B68] transition"
              >
                Blog Journal
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('about')}
                className="hover:text-[#D81B68] transition"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('documentation')}
                className="hover:text-[#D81B68] transition"
              >
                Documentation
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('contact')}
                className="hover:text-[#D81B68] transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* MY ACCOUNT */}
        <div>
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
            MY ACCOUNT
          </h4>
          <ul className="space-y-2 text-gray-600 font-medium">
            <li>
              <button
                onClick={() => onNavigateTab('account')}
                className="hover:text-[#D81B68] transition"
              >
                My Account
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('orders')}
                className="hover:text-[#D81B68] transition"
              >
                My Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('wishlist')}
                className="hover:text-[#D81B68] transition"
              >
                My Wishlist
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigateTab('cart')}
                className="hover:text-[#D81B68] transition"
              >
                My Shopping Bag
              </button>
            </li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">
            CONTACT US
          </h4>
          <ul className="space-y-2.5 text-gray-600 font-medium">
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#D81B68] flex-shrink-0" />
              <span>+1 (800) 555-8256</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#D81B68] flex-shrink-0" />
              <span>concierge@valorahandbags.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#D81B68] flex-shrink-0 mt-0.5" />
              <span>740 Madison Avenue, New York, NY 10021</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
        <p>© 2026 VALORA Handbags Store. All Rights Reserved.</p>

        {/* Payment Badges */}
        <div className="flex items-center space-x-2">
          <span className="bg-gray-100 border border-gray-200 text-gray-700 font-extrabold px-2 py-0.5 rounded text-[10px]">
            VISA
          </span>
          <span className="bg-gray-100 border border-gray-200 text-gray-700 font-extrabold px-2 py-0.5 rounded text-[10px]">
            MC
          </span>
          <span className="bg-gray-100 border border-gray-200 text-gray-700 font-extrabold px-2 py-0.5 rounded text-[10px]">
            PayPal
          </span>
          <span className="bg-gray-100 border border-gray-200 text-gray-700 font-extrabold px-2 py-0.5 rounded text-[10px]">
            Pay
          </span>
        </div>
      </div>
    </footer>
  );
};
