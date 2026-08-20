import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, color: string, quantity: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onCheckout: () => void;
  onNavigateCatalog: () => void;
  onSelectProduct: (product: Product) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onNavigateCatalog,
  onSelectProduct,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 99;
  const freeShippingProgress = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoCode.trim().toUpperCase();

    if (code === 'WELCOME15' || code === 'VALORA15') {
      setDiscountPercent(15);
      setPromoSuccess('15% VIP discount applied!');
    } else if (code === 'SUMMER20') {
      setDiscountPercent(20);
      setPromoSuccess('20% discount applied!');
    } else {
      setPromoError('Invalid code. Try "WELCOME15"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* HEADER */}
          <div className="p-4 border-b border-[#E8E2DF] flex items-center justify-between bg-[#FAF8F6]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#D81B68]" />
              <h3 className="font-serif text-lg font-bold text-gray-900 uppercase">
                Shopping Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FREE SHIPPING PROGRESS BAR */}
          <div className="bg-pink-50/70 p-3 border-b border-pink-100 text-xs">
            <div className="flex items-center space-x-2 mb-1.5 text-gray-800 font-medium">
              <Truck className="w-4 h-4 text-[#D81B68]" />
              {amountToFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#D81B68]">${amountToFreeShipping.toFixed(2)}</strong> more for <strong>Free Express Shipping</strong>
                </span>
              ) : (
                <span className="text-green-700 font-bold">
                  🎉 You unlocked Free Express Shipping!
                </span>
              )}
            </div>
            <div className="w-full bg-pink-200/60 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#D81B68] h-full transition-all duration-300 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#E8E2DF]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-[#D81B68] mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Your bag is empty
                </h4>
                <p className="text-xs text-gray-500 mb-6 max-w-xs">
                  Discover our latest handcrafted Italian leather handbags and signature pieces.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateCatalog();
                  }}
                  className="bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-md shadow transition"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex space-x-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    onClick={() => onSelectProduct(item.product)}
                    className="w-20 h-20 object-cover rounded-lg border border-[#E8E2DF] bg-[#FAF8F6] flex-shrink-0 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4
                          onClick={() => onSelectProduct(item.product)}
                          className="text-xs font-bold text-gray-900 truncate pr-2 cursor-pointer hover:text-[#D81B68]"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                          className="text-gray-400 hover:text-red-600 transition p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Editor */}
                      <div className="flex items-center border border-[#E8E2DF] rounded-md overflow-hidden bg-[#FAF8F6]">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor, item.quantity - 1)
                          }
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor, item.quantity + 1)
                          }
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-xs font-bold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER & CHECKOUT SUMMARY */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-[#E8E2DF] bg-[#FAF8F6] space-y-3">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Promo Code (e.g. WELCOME15)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-[#E8E2DF] rounded-md pl-8 pr-3 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition"
                >
                  Apply
                </button>
              </form>
              {promoSuccess && (
                <p className="text-[11px] text-green-600 font-medium">{promoSuccess}</p>
              )}
              {promoError && (
                <p className="text-[11px] text-red-500 font-medium">{promoError}</p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs text-gray-600 pt-2 border-t border-[#E8E2DF]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#D81B68] font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-gray-900">
                    {subtotal >= freeShippingThreshold ? 'FREE' : '$15.00'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-gray-900 pt-2 border-t border-[#E8E2DF]">
                  <span>Total</span>
                  <span className="text-[#D81B68]">
                    $
                    {(
                      finalTotal + (subtotal >= freeShippingThreshold ? 0 : 15)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={onCheckout}
                className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-md shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-1 text-[11px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Encrypted 256-bit SSL Secure Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
