import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

import { STORE_CONFIG } from '../config';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentImage =
    isHovered && product.images[1] ? product.images[1] : product.images[0];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      className="bg-white border border-[#E8E2DF] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BADGE (Top Right) */}
      {product.isOnSale && (
        <span className="absolute top-0 right-0 bg-[#D81B68] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-bl-lg z-10 shadow-sm">
          SALE
        </span>
      )}
      {!product.isOnSale && product.isNew && (
        <span className="absolute top-0 right-0 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-bl-lg z-10 shadow-sm">
          NEW
        </span>
      )}

      {/* WISHLIST BUTTON (Top Left) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleWishlist(product);
        }}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-2 left-2 z-10 p-2 rounded-full border shadow-sm transition ${
          isWishlisted
            ? 'bg-pink-50 border-pink-200 text-[#D81B68]'
            : 'bg-white/90 border-gray-200 text-gray-500 hover:text-[#D81B68] hover:bg-white'
        }`}
      >
        <Heart
          className={`w-4 h-4 transition ${isWishlisted ? 'fill-[#D81B68]' : ''}`}
        />
      </button>

      {/* PRODUCT IMAGE CONTAINER */}
      <div
        className="relative bg-[#FAF8F6] p-0 flex items-center justify-center cursor-pointer overflow-hidden aspect-square"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={currentImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-1">
            {product.category}
          </span>
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-xs font-bold text-gray-900 cursor-pointer hover:text-[#D81B68] transition line-clamp-1 mb-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* PRICES */}
          <div className="flex items-center space-x-2 my-2">
            <span className="text-sm font-extrabold text-gray-900">
              {STORE_CONFIG.currency.symbol} {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through font-normal">
                {STORE_CONFIG.currency.symbol} {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* ACTION BUTTONS (Matching Reference Style) */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#E8E2DF]">
          <button
            onClick={handleAdd}
            className={`text-[10px] font-extrabold uppercase tracking-wider py-2 px-2 rounded flex items-center justify-center space-x-1 transition duration-200 ${
              addedAnimation
                ? 'bg-green-600 text-white'
                : 'bg-gray-900 hover:bg-black text-white'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3 h-3" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="border border-[#D81B68] text-[#D81B68] hover:bg-pink-50 text-[10px] font-extrabold uppercase tracking-wider py-2 px-2 rounded flex items-center justify-center space-x-1 transition duration-200"
          >
            <Eye className="w-3 h-3" />
            <span>VIEW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
