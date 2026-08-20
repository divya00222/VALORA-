import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { Product, FilterState } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogPageProps {
  products: Product[];
  wishlistIds: string[];
  initialCategory?: string;
  initialSearchQuery?: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  products,
  wishlistIds,
  initialCategory = 'all',
  initialSearchQuery = '',
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
}) => {
  const [filterState, setFilterState] = useState<FilterState>({
    category: initialCategory,
    priceRange: [0, 300],
    selectedColors: [],
    selectedMaterials: [],
    sortBy: 'featured',
    searchQuery: initialSearchQuery,
    onlySale: false,
    onlyInStock: false,
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique colors & materials
  const allColors = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.colors.forEach((c) => set.add(c.name)));
    return Array.from(set);
  }, [products]);

  const allMaterials = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.materials.toLowerCase().includes('leather')) set.add('Italian Leather');
      if (p.materials.toLowerCase().includes('canvas')) set.add('Woven Canvas');
      if (p.materials.toLowerCase().includes('velvet')) set.add('Embroidered Velvet');
    });
    return Array.from(set);
  }, [products]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (
          filterState.category !== 'all' &&
          filterState.category !== 'sale' &&
          p.category !== filterState.category
        ) {
          return false;
        }

        // Sale filter
        if (
          (filterState.category === 'sale' || filterState.onlySale) &&
          !p.isOnSale
        ) {
          return false;
        }

        // Price filter
        if (
          p.price < filterState.priceRange[0] ||
          p.price > filterState.priceRange[1]
        ) {
          return false;
        }

        // Colors filter
        if (filterState.selectedColors.length > 0) {
          const matchColor = p.colors.some((c) =>
            filterState.selectedColors.includes(c.name)
          );
          if (!matchColor) return false;
        }

        // In Stock
        if (filterState.onlyInStock && !p.inStock) return false;

        // Search Query
        if (filterState.searchQuery.trim()) {
          const q = filterState.searchQuery.toLowerCase();
          const match =
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q);
          if (!match) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filterState.sortBy === 'price-asc') return a.price - b.price;
        if (filterState.sortBy === 'price-desc') return b.price - a.price;
        if (filterState.sortBy === 'rating') return b.rating - a.rating;
        if (filterState.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0; // featured default
      });
  }, [products, filterState]);

  const toggleColor = (colorName: string) => {
    setFilterState((prev) => ({
      ...prev,
      selectedColors: prev.selectedColors.includes(colorName)
        ? prev.selectedColors.filter((c) => c !== colorName)
        : [...prev.selectedColors, colorName],
    }));
  };

  const handleResetFilters = () => {
    setFilterState({
      category: 'all',
      priceRange: [0, 300],
      selectedColors: [],
      selectedMaterials: [],
      sortBy: 'featured',
      searchQuery: '',
      onlySale: false,
      onlyInStock: false,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      {/* HEADER */}
      <div className="border-b border-[#E8E2DF] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D81B68]">
            THE VALORA ARCHIVE
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mt-1">
            Handbag Collection ({filteredProducts.length})
          </h1>
        </div>

        {/* CONTROLS (Mobile Drawer Button & Desktop Sort) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>

          {/* SORT DROPDOWN */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <span>Sort By:</span>
            <select
              value={filterState.sortBy}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  sortBy: e.target.value as FilterState['sortBy'],
                }))
              }
              className="bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs font-bold text-gray-900 focus:outline-none focus:border-[#D81B68]"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* DESKTOP SIDEBAR FILTERS */}
        <div className="hidden lg:block lg:col-span-3 space-y-6">
          <div className="bg-[#FAF8F6] border border-[#E8E2DF] rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2DF]">
              <div className="flex items-center space-x-2 font-serif text-sm font-bold uppercase text-gray-900">
                <Filter className="w-4 h-4 text-[#D81B68]" />
                <span>Refine Search</span>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-[11px] text-[#D81B68] font-bold hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* CATEGORY FILTER */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 mb-3">
                Category
              </h4>
              <ul className="space-y-1.5 text-xs font-medium text-gray-600">
                {[
                  { name: 'All Handbags', id: 'all' },
                  { name: 'Crossbody Bags', id: 'crossbody' },
                  { name: 'Shoulder Bags', id: 'shoulder' },
                  { name: 'Leather Totes', id: 'tote' },
                  { name: 'Dome Satchels', id: 'satchel' },
                  { name: 'Evening Clutches', id: 'evening' },
                  { name: 'Travel Duffles', id: 'travel' },
                  { name: 'Outlet Sale Items', id: 'sale' },
                ].map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() =>
                        setFilterState((prev) => ({ ...prev, category: cat.id }))
                      }
                      className={`w-full text-left py-1 px-2 rounded transition flex justify-between items-center ${
                        filterState.category === cat.id
                          ? 'bg-pink-100 text-[#D81B68] font-bold'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span>{cat.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRICE SLIDER */}
            <div className="pt-4 border-t border-[#E8E2DF]">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 mb-3">
                Max Price: ${filterState.priceRange[1]}
              </h4>
              <input
                type="range"
                min="40"
                max="300"
                step="10"
                value={filterState.priceRange[1]}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    priceRange: [0, Number(e.target.value)],
                  }))
                }
                className="w-full accent-[#D81B68]"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-semibold mt-1">
                <span>$40</span>
                <span>$300</span>
              </div>
            </div>

            {/* COLORS FILTER */}
            <div className="pt-4 border-t border-[#E8E2DF]">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-900 mb-3">
                Color Palette
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {allColors.map((col) => {
                  const isSelected = filterState.selectedColors.includes(col);
                  return (
                    <button
                      key={col}
                      onClick={() => toggleColor(col)}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition ${
                        isSelected
                          ? 'bg-[#D81B68] text-white border-[#D81B68]'
                          : 'bg-white text-gray-700 border-[#E8E2DF] hover:border-gray-400'
                      }`}
                    >
                      {col}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TOGGLES */}
            <div className="pt-4 border-t border-[#E8E2DF] space-y-2 text-xs font-semibold text-gray-700">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterState.onlySale}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      onlySale: e.target.checked,
                    }))
                  }
                  className="rounded text-[#D81B68] focus:ring-[#D81B68]"
                />
                <span>On Sale Only</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterState.onlyInStock}
                  onChange={(e) =>
                    setFilterState((prev) => ({
                      ...prev,
                      onlyInStock: e.target.checked,
                    }))
                  }
                  className="rounded text-[#D81B68] focus:ring-[#D81B68]"
                />
                <span>In Stock Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#FAF8F6] rounded-2xl border border-[#E8E2DF] p-12 text-center text-gray-500">
              <p className="font-serif text-lg font-bold text-gray-900 mb-2">
                No matching handbags found
              </p>
              <p className="text-xs max-w-sm mx-auto mb-6">
                Try loosening your filter criteria or search for a different style.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#D81B68] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg shadow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isWishlisted={wishlistIds.includes(p.id)}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative bg-white w-full max-w-xs p-6 overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex justify-between items-center pb-4 border-b border-[#E8E2DF]">
              <h3 className="font-serif text-base font-bold uppercase text-gray-900">
                Filter Handbags
              </h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Mobile Category */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">
                Category
              </h4>
              <div className="space-y-1 text-xs">
                {['all', 'crossbody', 'shoulder', 'tote', 'satchel', 'evening', 'travel', 'sale'].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setFilterState((prev) => ({ ...prev, category: cat }));
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left py-1.5 px-2 rounded capitalize ${
                        filterState.category === cat
                          ? 'bg-pink-100 text-[#D81B68] font-bold'
                          : 'text-gray-700'
                      }`}
                    >
                      {cat === 'all' ? 'All Bags' : cat}
                    </button>
                  )
                )}
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-[#D81B68] text-white text-xs font-bold uppercase py-3 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
