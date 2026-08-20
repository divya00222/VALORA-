import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck, Lock, ArrowLeft, Landmark, Wallet, Phone } from 'lucide-react';
import { CartItem, NepalAddress, NepalPaymentMethod } from '../types';
import { STORE_CONFIG, NEPAL_REGIONS } from '../config';

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
  const [address, setAddress] = useState<NepalAddress>({
    fullName: '',
    mobileNumber: '',
    email: '',
    province: '',
    district: '',
    municipality: '',
    wardNumber: '',
    tole: '',
    landmark: '',
    instructions: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<NepalPaymentMethod>('cod');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Calculate shipping based on location
  const isKathmanduValley = STORE_CONFIG.shipping.kathmanduDistricts.includes(address.district);
  const isFreeShipping = subtotal >= STORE_CONFIG.shipping.freeThreshold;
  const shippingFee = isFreeShipping ? 0 : (isKathmanduValley ? STORE_CONFIG.shipping.valleyFee : STORE_CONFIG.shipping.outsideValleyFee);
  
  const total = subtotal + shippingFee;

  const handleCompleteOrder = () => {
    const randomOrderNum = `ORD-NP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrderNum);
    setStep('confirmed');
    onOrderSuccess();
  };

  const selectedProvinceData = NEPAL_REGIONS.find(r => r.province === address.province);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8E2DF] overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="p-5 border-b border-[#E8E2DF] flex justify-between items-center bg-[#FAF8F6]">
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-[#D81B68]" />
            <span className="font-serif font-bold text-gray-900 uppercase tracking-wider text-sm">
              {STORE_CONFIG.name} Secure Checkout
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
                  1. Delivery Details
                </h3>
                <span className="text-xs text-gray-400">Step 1 of 2</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Mobile Number</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">+977</span>
                    <input
                      type="tel"
                      required
                      placeholder="98XXXXXXXX"
                      value={address.mobileNumber}
                      onChange={(e) => setAddress({ ...address, mobileNumber: e.target.value })}
                      className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg pl-12 pr-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Province</label>
                  <select
                    required
                    value={address.province}
                    onChange={(e) => setAddress({ ...address, province: e.target.value, district: '' })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  >
                    <option value="">Select Province</option>
                    {NEPAL_REGIONS.map(r => <option key={r.province} value={r.province}>{r.province}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">District</label>
                  <select
                    required
                    disabled={!address.province}
                    value={address.district}
                    onChange={(e) => setAddress({ ...address, district: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68] disabled:opacity-50"
                  >
                    <option value="">Select District</option>
                    {selectedProvinceData?.districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Municipality / City</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Kathmandu Metro"
                    value={address.municipality}
                    onChange={(e) => setAddress({ ...address, municipality: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Ward No.</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. 1"
                    value={address.wardNumber}
                    onChange={(e) => setAddress({ ...address, wardNumber: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Tole / Area</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Durbarmarg"
                    value={address.tole}
                    onChange={(e) => setAddress({ ...address, tole: e.target.value })}
                    className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Nearby Landmark (Optional)</label>
                <input
                  type="text"
                  placeholder="E.g. Near Narayanhiti Palace"
                  value={address.landmark}
                  onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                  className="w-full bg-[#FAF8F6] border border-[#E8E2DF] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#D81B68]"
                />
              </div>

              {/* Delivery Info Banner */}
              <div className="p-4 bg-pink-50 rounded-xl border border-pink-100 flex items-center space-x-3 text-xs text-gray-700">
                <Truck className="w-5 h-5 text-[#D81B68] flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-900 block">Nationwide Delivery by Local Partners</span>
                  <span>
                    {isKathmanduValley 
                      ? 'Kathmandu Valley: 1-2 business days delivery.' 
                      : 'Outside Valley: 3-5 business days delivery.'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep('payment')}
                disabled={!address.fullName || !address.mobileNumber || !address.district}
                className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl shadow transition disabled:opacity-50"
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
                2. Select Payment Method
              </h3>

              {/* PAYMENT OPTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border text-left transition flex items-center justify-between group ${
                    paymentMethod === 'cod'
                      ? 'border-[#D81B68] bg-pink-50'
                      : 'border-[#E8E2DF] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${paymentMethod === 'cod' ? 'bg-[#D81B68] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Cash on Delivery</div>
                      <div className="text-[10px] text-gray-500">Pay when your order arrives</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-[#D81B68] bg-[#D81B68]' : 'border-gray-200'}`}>
                    {paymentMethod === 'cod' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('esewa')}
                  className={`p-4 rounded-xl border text-left transition flex items-center justify-between group ${
                    paymentMethod === 'esewa'
                      ? 'border-[#D81B68] bg-pink-50'
                      : 'border-[#E8E2DF] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${paymentMethod === 'esewa' ? 'bg-[#60bb46] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">eSewa / Khalti</div>
                      <div className="text-[10px] text-gray-500">Fast & Secure Digital Payment</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'esewa' ? 'border-[#D81B68] bg-[#D81B68]' : 'border-gray-200'}`}>
                    {paymentMethod === 'esewa' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('fonepay')}
                  className={`p-4 rounded-xl border text-left transition flex items-center justify-between group ${
                    paymentMethod === 'fonepay'
                      ? 'border-[#D81B68] bg-pink-50'
                      : 'border-[#E8E2DF] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${paymentMethod === 'fonepay' ? 'bg-[#D81B68] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Fonepay / Bank</div>
                      <div className="text-[10px] text-gray-500">Scan QR or Direct Transfer</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'fonepay' ? 'border-[#D81B68] bg-[#D81B68]' : 'border-gray-200'}`}>
                    {paymentMethod === 'fonepay' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              </div>

              {/* COD Instructions */}
              {paymentMethod === 'cod' && (
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-[10px] text-gray-600 leading-relaxed italic">
                  Note: Please keep the exact amount ready for our delivery partner. Cash on Delivery is available across all supported districts in Nepal.
                </div>
              )}

              {/* ORDER SUMMARY */}
              <div className="space-y-2 text-xs text-gray-600 border-t border-[#E8E2DF] pt-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)</span>
                  <span className="font-semibold text-gray-900">{STORE_CONFIG.currency.symbol} {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge ({isKathmanduValley ? 'Inside Valley' : 'Outside Valley'})</span>
                  <span className={`font-semibold ${shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {shippingFee === 0 ? 'FREE' : `${STORE_CONFIG.currency.symbol} ${shippingFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-[#E8E2DF]">
                  <span>Total Amount</span>
                  <span className="text-[#D81B68]">{STORE_CONFIG.currency.symbol} {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-xl shadow-lg transition"
              >
                PLACE ORDER ({STORE_CONFIG.currency.symbol} {total.toLocaleString()})
              </button>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900">
                Order Received!
              </h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for your order, <strong>{address.fullName}</strong>. Your LUMANA handbag is being prepared for delivery.
              </p>
              
              <div className="bg-[#FAF8F6] p-4 rounded-xl border border-[#E8E2DF] max-w-sm mx-auto text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order Number:</span>
                  <span className="font-bold text-[#D81B68]">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Method:</span>
                  <span className="font-semibold text-gray-900 uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery Area:</span>
                  <span className="font-semibold text-gray-900">{address.district}, {address.municipality}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={onClose}
                  className="bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl shadow transition"
                >
                  Continue Shopping
                </button>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <Phone className="w-3 h-3" />
                  <span>Support: {STORE_CONFIG.contact.phone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
