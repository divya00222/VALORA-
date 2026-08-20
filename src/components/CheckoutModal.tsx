import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck, Lock, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  cart,
  onClose,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmed'>('shipping');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@example.com',
    address: '450 Park Avenue, Apt 14B',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    country: 'United States',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'applepay' | 'paypal'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 99 ? 0 : 15;
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;

  const handleCompleteOrder = () => {
    const randomOrderNum = `VLR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrderNum);
    setStep('confirmed');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8E2DF] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="p-5 border-b border-[#E8E2DF] flex justify-between items-center bg-[#FAF8F6]">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-[#D81B68]" />
            <span className="font-serif font-bold text-gray-900 uppercase tracking-wider text-sm">
              VALORA Secure Checkout
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8">
          {step === 'shipping' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  1. Delivery Address
                </h3>
                <span className="text-xs text-gray-400">Step 1 of 2</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">First Name</label>
                  <input
                    type="text"
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Last Name</label>
                  <input
                    type="text"
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Email for Delivery Tracking</label>
                <input
                  type="email"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Street Address</label>
                <input
                  type="text"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">City</label>
                  <input
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">State</label>
                  <input
                    type="text"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
              </div>

              <div className="p-4 bg-pink-50 rounded-xl border border-pink-100 flex items-center space-x-3 text-xs text-gray-700">
                <Truck className="w-5 h-5 text-[#D81B68] flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900 block">Complimentary White-Glove Courier Delivery</span>
                  <span>Estimated delivery: 2-3 business days in signature branded protective storage box.</span>
                </div>
              </div>

              <button
                onClick={() => setStep('payment')}
                className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow transition"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep('shipping')}
                  className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-900"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Address</span>
                </button>
                <span className="text-xs text-gray-400">Step 2 of 2</span>
              </div>

              <h3 className="font-serif text-lg font-bold text-gray-900">
                2. Payment Details
              </h3>

              {/* PAYMENT TABS */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center space-y-1 transition ${
                    paymentMethod === 'card'
                      ? 'border-[#D81B68] bg-pink-50 text-[#D81B68]'
                      : 'border-[#E8E2DF] text-gray-700'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('applepay')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center space-y-1 transition ${
                    paymentMethod === 'applepay'
                      ? 'border-[#D81B68] bg-pink-50 text-[#D81B68]'
                      : 'border-[#E8E2DF] text-gray-700'
                  }`}
                >
                  <span> Apple Pay</span>
                  <span className="text-[10px] font-normal text-gray-500">1-Touch Express</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center space-y-1 transition ${
                    paymentMethod === 'paypal'
                      ? 'border-[#D81B68] bg-pink-50 text-[#D81B68]'
                      : 'border-[#E8E2DF] text-gray-700'
                  }`}
                >
                  <span>PayPal</span>
                  <span className="text-[10px] font-normal text-gray-500">Pay in 4</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 bg-[#FAF8F6] p-4 rounded-xl border border-[#E8E2DF]">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-white border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Expiration</label>
                      <input
                        type="text"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full bg-white border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">CVC / CVV</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-white border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ORDER SUMMARY */}
              <div className="space-y-2 text-xs text-gray-600 border-t border-[#E8E2DF] pt-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Insured Shipping</span>
                  <span className="font-semibold text-green-700">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-[#E8E2DF]">
                  <span>Total Authorized</span>
                  <span className="text-[#D81B68]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-xl shadow-lg transition"
              >
                AUTHORIZE & PLACE ORDER (${total.toFixed(2)})
              </button>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900">
                Order Confirmed!
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for your order, <strong>{shippingInfo.firstName}</strong>. Your artisanal VALORA handbag is being prepared at our atelier.
              </p>
              
              <div className="bg-[#FAF8F6] p-4 rounded-xl border border-[#E8E2DF] max-w-sm mx-auto text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Reference:</span>
                  <span className="font-bold text-[#D81B68]">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Courier Tracking:</span>
                  <span className="font-semibold text-gray-900">DHL Express Luxury (Pending dispatch)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Recipient Email:</span>
                  <span className="font-semibold text-gray-900">{shippingInfo.email}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl shadow transition"
              >
                Return To Storefront
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
