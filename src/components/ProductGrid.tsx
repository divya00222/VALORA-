import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  wishlistIds: string[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistIds,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
  onNavigateCatalog,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bestsellers' | 'new' | 'sale'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'bestsellers') return p.isBestseller;
    if (activeFilter === 'new') return p.isNew;
    if (activeFilter === 'sale') return p.isOnSale;
    return true;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8E2DF] pb-4 mb-6 gap-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D81B68] block mb-1">
            CURATED FOR YOU
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
            FEATURED PRODUCTS
          </h2>
        </div>

        {/* TAB FILTERS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full transition ${
              activeFilter === 'all'
                ? 'bg-[#D81B68] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveFilter('bestsellers')}
            className={`px-3 py-1.5 rounded-full transition ${
              activeFilter === 'bestsellers'
                ? 'bg-[#D81B68] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => setActiveFilter('new')}
            className={`px-3 py-1.5 rounded-full transition ${
              activeFilter === 'new'
                ? 'bg-[#D81B68] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => setActiveFilter('sale')}
            className={`px-3 py-1.5 rounded-full transition ${
              activeFilter === 'sale'
                ? 'bg-[#D81B68] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            On Sale
          </button>

          <button
            onClick={onNavigateCatalog}
            className="hidden lg:flex items-center space-x-1 text-[#D81B68] hover:text-[#A80F4F] font-extrabold text-xs ml-4 group"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlistIds.includes(product.id)}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>

      {/* VIEW ALL BUTTON (Mobile/Tablet) */}
      <div className="mt-8 text-center lg:hidden">
        <button
          onClick={onNavigateCatalog}
          className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-black text-white text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-md shadow transition"
        >
          <span>VIEW ALL PRODUCTS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
