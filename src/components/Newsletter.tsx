import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface NewsletterProps {
  onShowToast: (msg: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      onShowToast("You're on the VIP list! Check your inbox for 15% off.");
      setEmail('');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-[#FAF0F4] border border-[#E8E2DF] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        {/* LEFT ICON & TEXT */}
        <div className="flex items-center space-x-4 max-w-xl">
          <div className="w-14 h-14 rounded-full bg-[#D81B68] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Get the latest updates on new arrivals, exclusive offers, and VIP styling guides.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-auto flex-1 max-w-md">
          {isSubscribed ? (
            <div className="flex items-center space-x-2 bg-white text-green-700 px-4 py-3 rounded-full border border-green-200 text-xs font-bold">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Thank you for subscribing! Check your email for your 15% code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-[#E8E2DF] rounded-full px-5 py-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D81B68] flex-1 shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#D81B68] hover:bg-[#A80F4F] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3 rounded-full shadow transition flex-shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
