import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlist: Product[];
  onClose: () => void;
  onRemoveItem: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlist,
  onClose,
  onRemoveItem,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* HEADER */}
          <div className="p-4 border-b border-[#E8E2DF] flex items-center justify-between bg-[#FAF8F6]">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-[#D81B68] fill-[#D81B68]" />
              <h3 className="font-serif text-lg font-bold text-gray-900 uppercase">
                My Wishlist ({wishlist.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* LIST */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#E8E2DF]">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#D81B68] mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Your wishlist is empty
                </h4>
                <p className="text-xs text-gray-500 max-w-xs">
                  Save your favorite handcrafted handbags by clicking the heart icon on any product card.
                </p>
              </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="py-4 flex space-x-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-20 h-20 object-cover rounded-lg border border-[#E8E2DF] bg-[#FAF8F6] flex-shrink-0 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="text-xs font-bold text-gray-900 truncate cursor-pointer hover:text-[#D81B68]"
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product)}
                          className="text-gray-400 hover:text-red-600 transition p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                        {product.category}
                      </p>
                      <p className="text-xs font-bold text-[#D81B68] mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(product);
                      }}
                      className="mt-2 bg-gray-900 hover:bg-black text-white text-[10px] font-extrabold uppercase tracking-wider py-1.5 px-3 rounded flex items-center justify-center space-x-1 transition"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
