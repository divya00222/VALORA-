import React, { useState } from 'react';
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import { Product, Review } from '../types';
import { ProductCard } from './ProductCard';

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  wishlistIds: string[];
  onAddToCart: (product: Product, quantity: number, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onNavigateCatalog: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  allProducts,
  wishlistIds,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
  onNavigateCatalog,
}) => {
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || 'Standard'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'materials' | 'shipping'>('description');
  const [added, setAdded] = useState(false);

  // Review state
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'r1',
      author: 'Sophia L.',
      rating: 5,
      date: 'August 10, 2026',
      title: 'Obsessed with the craftsmanship!',
      comment:
        'The stitching and gold hardware on this bag are even more striking in person. Lightweight yet holds all my essentials.',
      verified: true,
    },
    {
      id: 'r2',
      author: 'Victoria M.',
      rating: 5,
      date: 'July 24, 2026',
      title: 'Perfect evening companion',
      comment:
        'Received so many compliments at a gala dinner last weekend. The velvet and beadwork feel truly heirloom quality.',
      verified: true,
    },
  ]);

  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewAuthor && newReviewComment) {
      const rev: Review = {
        id: `rev-${Date.now()}`,
        author: newReviewAuthor,
        rating: newReviewRating,
        date: 'Today',
        title: newReviewTitle || 'Great purchase',
        comment: newReviewComment,
        verified: true,
      };
      setReviews([rev, ...reviews]);
      setNewReviewAuthor('');
      setNewReviewTitle('');
      setNewReviewComment('');
      setShowReviewForm(false);
    }
  };

  const isWishlisted = wishlistIds.includes(product.id);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(allProducts.filter((p) => p.id !== product.id))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      {/* BREADCRUMB */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
        <button onClick={onNavigateCatalog} className="hover:text-[#D81B68]">
          Catalog
        </button>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <button
          onClick={onNavigateCatalog}
          className="hover:text-[#D81B68] capitalize"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-gray-900 font-bold truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT GALLERY */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#FAF8F6] border border-[#E8E2DF] rounded-2xl p-8 flex items-center justify-center overflow-hidden aspect-[4/3] relative">
            <img
              src={selectedImg || product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
            {product.isOnSale && (
              <span className="absolute top-4 right-4 bg-[#D81B68] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                SALE
              </span>
            )}
          </div>

          {/* Thumbnails Strip */}
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 rounded-xl border overflow-hidden transition flex-shrink-0 bg-[#FAF8F6] ${
                  selectedImg === img
                    ? 'border-[#D81B68] ring-2 ring-pink-100'
                    : 'border-[#E8E2DF] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} gallery ${idx}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PRODUCT INFO */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D81B68] block mb-1">
              {product.category}
            </span>

            <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>

            <p className="text-xs text-gray-500 mb-3">{product.subtitle}</p>

            {/* REVIEWS SUMMARY */}
            <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-[#E8E2DF]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
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
                ({reviews.length + product.reviewCount} verified reviews)
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-3xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through font-normal">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* COLOR SELECTION */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-800 block mb-2">
                  Color: <span className="font-normal text-gray-600">{selectedColor}</span>
                </label>
                <div className="flex space-x-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-8 h-8 rounded-full border-2 transition ${
                        selectedColor === c.name
                          ? 'border-[#D81B68] scale-110 shadow'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY & ADD TO BAG */}
            <div className="flex space-x-3 mb-6">
              <div className="flex items-center border border-[#E8E2DF] rounded-xl bg-[#FAF8F6]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-xs font-bold text-gray-700 hover:bg-gray-200 rounded-l-xl"
                >
                  -
                </button>
                <span className="px-4 text-sm font-extrabold text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-xs font-bold text-gray-700 hover:bg-gray-200 rounded-r-xl"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-md transition flex items-center justify-center space-x-2 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-[#D81B68] hover:bg-[#A80F4F] text-white'
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

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition ${
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

            {/* TRUST BADGES BRIEF */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#FAF8F6] rounded-xl border border-[#E8E2DF] text-[11px] text-gray-600 font-medium mb-6">
              <div className="flex items-center space-x-1.5">
                <Truck className="w-4 h-4 text-[#D81B68]" />
                <span>Free Shipping &gt;$99</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <RotateCcw className="w-4 h-4 text-[#D81B68]" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D81B68]" />
                <span>100% Genuine</span>
              </div>
            </div>

            {/* TABS */}
            <div className="border-b border-[#E8E2DF] flex space-x-6 text-xs font-bold uppercase tracking-wider mb-4">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-2 border-b-2 transition ${
                  activeTab === 'description'
                    ? 'border-[#D81B68] text-[#D81B68]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`pb-2 border-b-2 transition ${
                  activeTab === 'materials'
                    ? 'border-[#D81B68] text-[#D81B68]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Materials & Specs
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`pb-2 border-b-2 transition ${
                  activeTab === 'shipping'
                    ? 'border-[#D81B68] text-[#D81B68]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Care & Returns
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="text-xs text-gray-600 leading-relaxed mb-8">
              {activeTab === 'description' && (
                <div className="space-y-2">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-4 space-y-1 pt-2 text-gray-700">
                    {product.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'materials' && (
                <div className="space-y-2">
                  <p>
                    <strong>Primary Materials:</strong> {product.materials}
                  </p>
                  <p>
                    <strong>Dimensions:</strong> {product.dimensions}
                  </p>
                  <p>
                    <strong>Hardware:</strong> Polished 18k gold-plated brass
                    hardware with scratch-resistant coating.
                  </p>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p>
                    <strong>Shipping:</strong> Standard orders ship within 24
                    hours. Free express delivery on orders over $99.
                  </p>
                  <p>
                    <strong>Returns:</strong> Complimentary 30-day returns or
                    exchanges. Product must be unused with original dust bag.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <section className="mt-16 pt-12 border-t border-[#E8E2DF]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Customer Reviews
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Verified buyers share their thoughts on {product.name}
            </p>
          </div>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition self-start sm:self-auto"
          >
            {showReviewForm ? 'Cancel Review' : 'Write a Review'}
          </button>
        </div>

        {/* WRITE REVIEW FORM */}
        {showReviewForm && (
          <form
            onSubmit={handleAddReview}
            className="bg-[#FAF8F6] p-6 rounded-2xl border border-[#E8E2DF] mb-8 space-y-4 max-w-xl animate-in fade-in duration-200"
          >
            <h4 className="font-serif text-lg font-bold text-gray-900">
              Write Your Review
            </h4>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                Rating
              </label>
              <div className="flex space-x-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReviewRating(star)}
                    className="p-1 hover:scale-110 transition"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        star <= newReviewRating
                          ? 'fill-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  className="w-full bg-white border border-[#E8E2DF] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#D81B68]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Absolutely stunning bag"
                  value={newReviewTitle}
                  onChange={(e) => setNewReviewTitle(e.target.value)}
                  className="w-full bg-white border border-[#E8E2DF] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#D81B68]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1">
                Comment
              </label>
              <textarea
                rows={3}
                required
                placeholder="Share your feedback about fit, material quality, and style..."
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                className="w-full bg-white border border-[#E8E2DF] rounded-md px-3 py-2 text-xs focus:outline-none focus:border-[#D81B68]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#D81B68] hover:bg-[#A80F4F] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md shadow transition"
            >
              Submit Review
            </button>
          </form>
        )}

        {/* REVIEWS LIST */}
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-xl border border-[#E8E2DF] space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-extrabold text-gray-900">
                    {rev.author}
                  </span>
                  {rev.verified && (
                    <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-200">
                      Verified Buyer
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-400">{rev.date}</span>
              </div>

              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < rev.rating ? 'fill-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <h5 className="text-xs font-bold text-gray-900">{rev.title}</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMMENDED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-[#E8E2DF]">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6 uppercase">
            You May Also Love
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                isWishlisted={wishlistIds.includes(p.id)}
                onAddToCart={(prod) => onAddToCart(prod, 1, prod.colors[0]?.name || 'Standard')}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
