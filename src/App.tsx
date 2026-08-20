/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

// Components
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSlider } from './components/HeroSlider';
import { TrustBar } from './components/TrustBar';
import { CategoryPromoTiles } from './components/CategoryPromoTiles';
import { ProductGrid } from './components/ProductGrid';
import { SecondaryTrustBar } from './components/SecondaryTrustBar';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Pages
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { BlogPage } from './components/BlogPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { DocumentationPage } from './components/DocumentationPage';

// Modals & Drawers
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'product-detail' | 'blog' | 'about' | 'contact' | 'documentation'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Product State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Cart & Wishlist State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  
  // UI State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [toast, setToast] = useState<{ message: string; show: boolean }>({ message: '', show: false });

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('valora_cart');
    const savedWishlist = localStorage.getItem('valora_wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save cart and wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('valora_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('valora_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Toast effect
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showToast = (message: string) => {
    setToast({ message, show: true });
  };

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProduct]);

  // Handlers
  const handleAddToCart = (product: Product, quantity: number = 1, color?: string) => {
    setCart((prev) => {
      const selectedColor = color || product.colors[0].name;
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string, color: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedColor === color)));
  };

  const handleUpdateCartQuantity = (productId: string, color: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleNavigateCatalog = (query: string = '', category: string = 'all') => {
    setSearchQuery(query);
    setSelectedCategory(category);
    setCurrentView('catalog');
  };

  const handleOrderSuccess = () => {
    setCart([]);
    // Step is handled inside CheckoutModal for UI, then it calls this to clear cart
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-pink-100 selection:text-[#D81B68]">
      <AnnouncementBar currency={currency} onCurrencyChange={setCurrency} />
      
      <Header 
        products={PRODUCTS}
        cart={cart}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => {}} // Placeholder
        onOpenMobileMenu={() => {}} // Placeholder
        onSelectProduct={handleSelectProduct}
        onNavigateCatalog={handleNavigateCatalog}
      />

      <Navigation 
        products={PRODUCTS}
        activeTab={currentView}
        onSelectTab={(tab: any) => setCurrentView(tab)}
        onNavigateCategory={(cat) => handleNavigateCatalog('', cat)}
        onSelectProduct={handleSelectProduct}
      />

      <main>
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-500">
            <HeroSlider onSelectProduct={handleSelectProduct} />
            <TrustBar />
            <CategoryPromoTiles onSelectCategory={(cat) => handleNavigateCatalog('', cat)} />
            <ProductGrid 
              products={PRODUCTS.slice(0, 8)}
              wishlistIds={wishlist.map(p => p.id)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              onSelectProduct={handleSelectProduct}
              onNavigateCatalog={() => setCurrentView('catalog')}
            />
            <SecondaryTrustBar />
            <Newsletter onShowToast={showToast} />
          </div>
        )}

        {currentView === 'catalog' && (
          <CatalogPage 
            products={PRODUCTS}
            initialCategory={selectedCategory}
            initialSearchQuery={searchQuery}
            wishlistIds={wishlist.map(p => p.id)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onQuickView={setQuickViewProduct}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'product-detail' && selectedProduct && (
          <ProductDetailPage 
            product={selectedProduct}
            allProducts={PRODUCTS}
            wishlistIds={wishlist.map(p => p.id)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'blog' && <BlogPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'documentation' && <DocumentationPage />}
      </main>

      <Footer 
        onNavigateTab={(tab: any) => setCurrentView(tab)}
        onNavigateCategory={(cat) => handleNavigateCatalog('', cat)}
      />

      {/* DRAWERS & MODALS */}
      <CartDrawer 
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onNavigateCatalog={() => {
          setCurrentView('catalog');
          setIsCartOpen(false);
        }}
        onSelectProduct={(p) => {
          handleSelectProduct(p);
          setIsCartOpen(false);
        }}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveItem={handleToggleWishlist}
        onAddToCart={(p) => {
          handleAddToCart(p);
          handleToggleWishlist(p);
        }}
        onSelectProduct={(p) => {
          handleSelectProduct(p);
          setIsWishlistOpen(false);
        }}
      />

      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlist.some(p => p.id === quickViewProduct.id)}
          onViewDetails={handleSelectProduct}
        />
      )}

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        cart={cart}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gray-900 text-white text-xs font-bold py-3 px-6 rounded-full shadow-2xl border border-white/10">
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}
