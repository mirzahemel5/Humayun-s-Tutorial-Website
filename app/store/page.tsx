// src/app/store/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Alex_Brush } from 'next/font/google';

const scriptFont = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface BookProduct {
  id: string;
  title: string;
  author: string;
  category: 'physics' | 'math' | 'programming' | 'photography';
  coverLabel: string;
  originalPrice: string;
  discountedPrice: string;
  badge?: string;
}

export default function PlatformBookstorePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);

  const booksData: BookProduct[] = [
    { id: 'bk_1', title: 'Advanced Vector Mechanics for HSC 2026', author: 'Humayun Kabir', category: 'physics', coverLabel: 'PHYSICS VECTORS', originalPrice: '৳৬৫০', discountedPrice: '৳৩৮০', badge: 'Best Seller' },
    { id: 'bk_2', title: 'Higher Mathematics Blueprint Vol. 1', author: 'Humayun Kabir', category: 'math', coverLabel: 'MATH MATRIX', originalPrice: '৳৫০০', discountedPrice: '৳৩২০' },
    { id: 'bk_3', title: 'Next.js 15 & Supabase: The Full-Stack Manual', author: 'Humayun Kabir', category: 'programming', coverLabel: 'NEXT.JS & SUPABASE', originalPrice: '৳১,২০০', discountedPrice: '৳৭৫০', badge: 'Premium' },
    { id: 'bk_4', title: 'Cinematic Lighting & Camera Coordinates', author: 'Humayun Kabir', category: 'photography', coverLabel: 'DSLR LIGHTING', originalPrice: '৳৮৫০', discountedPrice: '৳৪৯৯' }
  ];

  const filteredBooks = activeCategory === 'all'
    ? booksData
    : booksData.filter(book => book.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased flex flex-col font-sans">
      
      {/* Bookstore Navigation Header */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6 w-full max-w-4xl">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-14 flex-shrink-0">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <span className={`${scriptFont.className} text-3xl text-slate-800 ml-1 select-none pt-2 tracking-wide block`}>
              Humayun&apos;s Tutorial
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-6 ml-2">
            <span className="text-xs font-black text-slate-500 tracking-wider uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              🛍️ Resource Store
            </span>
          </div>
        </div>
        
        {/* Shopping Cart & Action Triggers */}
        <div className="flex items-center gap-6 font-semibold text-sm text-slate-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/dashboard" className="hover:text-emerald-600 transition-colors">My Dashboard</Link>
          <button className="relative p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center justify-center">
            <span className="text-base">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center animate-bounce shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content Viewport */}
      <main className="max-w-6xl w-full mx-auto p-6 lg:p-8 space-y-8 flex-1">
        
        {/* Catalogue Headline Title and Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 text-left">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Academic Books & Lecture Sheets</span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">The Resource Library</h2>
            <p className="text-xs text-slate-400">Order premium companion reference textbooks printed and shipped straight to your doorstep.</p>
          </div>
          
          {/* Categories Tab Swapper */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'physics', label: 'Physics' },
              { id: 'math', label: 'Mathematics' },
              { id: 'programming', label: 'Programming' },
              { id: 'photography', label: 'Photography' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all whitespace-nowrap border ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid Layout Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Book Cover Visualization Box */}
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-950 p-6 relative flex flex-col justify-between text-left select-none border-b border-slate-100 shadow-inner">
                  {book.badge && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm z-10">
                      {book.badge}
                    </span>
                  )}
                  <div className="text-[9px] font-mono font-bold text-emerald-400/80 tracking-widest uppercase pt-2">HT Publication Matrix</div>
                  <div className="text-white text-base font-black tracking-tight leading-snug uppercase line-clamp-3">
                    {book.coverLabel}
                  </div>
                  <div className="text-[10px] font-medium text-slate-400/80 border-t border-white/10 pt-2 font-mono">
                    AUTHOR: H. KABIR
                  </div>
                </div>

                {/* Info and Pricing Block */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">By {book.author}</p>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-50 mt-auto">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-slate-900">{book.discountedPrice}</span>
                      <span className="text-xs text-slate-400 line-through font-medium">{book.originalPrice}</span>
                    </div>
                    
                    <button
                      onClick={() => setCartCount(prev => prev + 1)}
                      className="bg-slate-50 border border-slate-200 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>+</span> Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}