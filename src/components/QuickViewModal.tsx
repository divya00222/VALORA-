import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Star, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist,
  onSelectProduct,
}) => {
  if (!product) return null;

  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E8E2DF] relative max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT GALLERY */}
        <div className="md:w-1/2 bg-[#FAF8F6] p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#E8E2DF]">
          <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-xl">
            <img
              src={selectedImg || product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`w-14 h-14 rounded-lg border overflow-hidden transition ${
                    selectedImg === img
                      ? 'border-[#D81B68] ring-2 ring-pink-100'
                      : 'border-[#E8E2DF] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D81B68]">
              {product.category}
            </span>

            <h3 className="font-serif text-xl font-bold text-gray-900 mt-1 mb-2">
              {product.name}
            </h3>

            {/* RATING */}
            <div className="flex items-center space-x-1.5 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800">
                {product.rating}
              </span>
              <span className="text-xs text-gray-400">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-2xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-normal">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.isOnSale && (
                <span className="bg-pink-100 text-[#D81B68] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Save ${(product.originalPrice! - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* COLOR SWATCH SELECTOR */}
            {product.colors.length > 0 && (
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block mb-2">
                  Color: <span className="font-normal text-gray-600">{selectedColor}</span>
                </span>
                <div className="flex space-x-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full border-2 transition ${
                        selectedColor === c.name
                          ? 'border-[#D81B68] scale-110 shadow-sm'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SPECS BRIEF */}
            <div className="bg-[#FAF8F6] p-3 rounded-lg border border-[#E8E2DF] text-[11px] text-gray-600 space-y-1 mb-4">
              <div>
                <strong>Material:</strong> {product.materials}
              </div>
              <div>
                <strong>Dimensions:</strong> {product.dimensions}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="space-y-3 pt-3 border-t border-[#E8E2DF]">
            <div className="flex space-x-3">
              {/* Quantity */}
              <div className="flex items-center border border-[#E8E2DF] rounded-lg bg-[#FAF8F6]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-xs font-bold text-gray-700 hover:bg-gray-200 rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 text-xs font-extrabold text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-xs font-bold text-gray-700 hover:bg-gray-200 rounded-r-lg"
                >
                  +
                </button>
              </div>

              {/* Add to Bag */}
              <button
                onClick={handleAdd}
                className={`flex-1 font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-lg shadow transition flex items-center justify-center space-x-2 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-900 hover:bg-black text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG</span>
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-lg border transition ${
                  isWishlisted
                    ? 'bg-pink-50 border-pink-200 text-[#D81B68]'
                    : 'border-gray-300 text-gray-500 hover:text-[#D81B68]'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-[#D81B68]' : ''}`}
                />
              </button>
            </div>

            <button
              onClick={() => {
                onSelectProduct(product);
                onClose();
              }}
              className="w-full text-center text-xs font-bold text-[#D81B68] hover:underline"
            >
              View full product details & customer reviews →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
