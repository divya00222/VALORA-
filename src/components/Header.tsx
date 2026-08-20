import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { Product, CartItem } from '../types';

interface HeaderProps {
  products: Product[];
  cart: CartItem[];
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenMobileMenu: () => void;
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog: (searchQuery?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  products,
  cart,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenMobileMenu,
  onSelectProduct,
  onNavigateCatalog,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Calculate cart total items
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Filter products for live search preview
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigateCatalog(searchQuery);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-[#E8E2DF] sticky top-0 z-40 transition-shadow duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={onOpenMobileMenu}
          aria-label="Open mobile menu"
          className="lg:hidden p-2 text-gray-700 hover:text-[#D81B68] focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* LOGO */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigateCatalog('')}>
          <div className="flex flex-col items-start">
            <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-widest text-gray-900 leading-none">
              VALORA
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gray-500 font-sans mt-0.5">
              Handbags & Accessories
            </span>
          </div>
        </div>

        {/* CENTER SEARCH BAR (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4 relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="w-full relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-full py-2.5 pl-4 pr-11 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D81B68] focus:ring-1 focus:ring-[#D81B68] transition"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#D81B68] hover:bg-[#A80F4F] text-white p-2 rounded-full transition"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Search Dropdown Modal / Live Results */}
          {isSearchOpen && searchQuery.trim().length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-[#E8E2DF] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="p-3 bg-[#FAF8F6] border-b border-[#E8E2DF] flex justify-between items-center text-xs text-gray-500 font-medium">
                <span>Matching Results ({searchResults.length})</span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {searchResults.length > 0 ? (
                <div className="divide-y divide-[#E8E2DF] max-h-80 overflow-y-auto">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        setIsSearchOpen(false);
                      }}
                      className="p-3 flex items-center space-x-3 hover:bg-pink-50/50 cursor-pointer transition"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 object-cover rounded-md border border-gray-200 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                          {product.category}
                        </p>
                        <p className="text-xs font-bold text-[#D81B68]">
                          ${product.price.toFixed(2)}
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-[11px] ml-1.5 font-normal">
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      onNavigateCatalog(searchQuery);
                      setIsSearchOpen(false);
                    }}
                    className="w-full py-2.5 text-center text-xs font-semibold text-[#D81B68] hover:bg-pink-50 transition"
                  >
                    View all matching results →
                  </button>
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-gray-500">
                  <p>No handbags matching "{searchQuery}"</p>
                  <button
                    onClick={() => {
                      onNavigateCatalog('');
                      setIsSearchOpen(false);
                    }}
                    className="mt-2 text-[#D81B68] font-semibold underline"
                  >
                    Browse full catalog
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT ACTION ICONS */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Account */}
          <button
            onClick={onOpenAccount}
            className="flex items-center text-gray-700 hover:text-[#D81B68] transition"
            title="Account"
            aria-label="User account"
          >
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="relative flex items-center text-gray-700 hover:text-[#D81B68] transition"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5 md:w-6 md:h-6" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#D81B68] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart button matching reference layout */}
          <button
            onClick={onOpenCart}
            className="flex items-center text-gray-900 hover:text-[#D81B68] transition group"
            title="Cart"
            aria-label="Shopping bag cart"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-800 group-hover:text-[#D81B68] transition" />
              <span className="absolute -top-1.5 -right-2 bg-[#D81B68] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile search input */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-full py-2 pl-4 pr-10 text-xs text-gray-800 focus:outline-none focus:border-[#D81B68]"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#D81B68] text-white p-1.5 rounded-full"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </header>
  );
};
