// src/app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// 10MS Style Course Data Structure
const coursesData = [
  {
    id: 1,
    category: 'academic',
    title: 'HSC Advanced Physics - Batch 2026',
    instructor: 'Humayun Kabir',
    lessons: '48 Videos',
    quizzes: '12 Mock Tests',
    originalPrice: '৳৪,৫০০',
    discountedPrice: '৳১,২০০',
    badge: 'Live Batch',
    badgeBg: 'bg-rose-500',
    image: '/physics-cover.jpg' // You can placeholder this or use your transparent image safely
  },
  {
    id: 2,
    category: 'academic',
    title: 'HSC Higher Mathematics Complete Pack',
    instructor: 'Humayun Kabir',
    lessons: '60 Videos',
    quizzes: '15 Mock Tests',
    originalPrice: '৳৫,০০০',
    discountedPrice: '৳১,৫০০',
    badge: 'Popular',
    badgeBg: 'bg-amber-500',
    image: '/math-cover.jpg'
  },
  {
    id: 3,
    category: 'skills',
    title: 'Full-Stack Web Development (Next.js & Supabase)',
    instructor: 'Humayun Kabir',
    lessons: '120 Videos',
    quizzes: '30 Projects',
    originalPrice: '৳১০,০০০',
    discountedPrice: '৳৩,৫০০',
    badge: 'Premium',
    badgeBg: 'bg-emerald-600',
    image: '/web-cover.jpg'
  },
  {
    id: 4,
    category: 'skills',
    title: 'Professional Photography & Cinematic Video Editing',
    instructor: 'Humayun Kabir',
    lessons: '35 Videos',
    quizzes: '8 Assignments',
    originalPrice: '৳৩,৫০০',
    discountedPrice: '৳৯৯৯',
    badge: 'Best Seller',
    badgeBg: 'bg-emerald-600',
    image: '/photo-cover.jpg'
  }
];

export default function CorporateMarketplacePage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    // Conversion Background: Off-white canvas built for sharp text readability
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased">
      
      {/* 10MS Style Sticky Header with Brand Logo */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6 w-full max-w-4xl">
          {/* Brand Logo & Text Wrapper */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-12 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Humayun's Tutorial Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-xl font-black tracking-tight text-emerald-600 font-sans group-hover:text-emerald-700 transition-colors hidden sm:block">
              Humayun&apos;s Tutorial
            </h1>
          </div>
          
          {/* Global Course Search Bar */}
          <div className="hidden md:flex items-center bg-[#F1F5F9] border border-slate-200 rounded-lg px-3 py-2 w-full max-w-md ml-4">
            <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search for courses, skills, or topics..." className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder-slate-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-6 font-semibold text-sm text-slate-600">
          <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">Home</a>
          <a href="#" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Live Classes</a>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-all text-sm shadow-md shadow-emerald-600/10">
            Login
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12 space-y-16">
        
        {/* Clean, Conversion-Driven 2-Column Hero Structure */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content Stack */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-bold text-emerald-700 tracking-wide">
              🔥 Join Over 25,000+ Active Students Nationwide
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] font-sans">
              Learn Skills <br />
              That Unlock <span className="text-emerald-600">Real Opportunities</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-[500px]">
              Access structured live batches, professional skill-building modules, and dynamic assignments designed directly by industry veterans.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-4 px-8 rounded-xl transition-all shadow-lg shadow-emerald-600/20 uppercase tracking-wide">
                Explore Courses
              </button>
              <button className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm py-4 px-8 rounded-xl transition-all uppercase tracking-wide">
                View Class Schedule
              </button>
            </div>
          </div>

          {/* Right Side Image Block: Secure & Centered Cutout Frame */}
          <div className="flex justify-center lg:justify-end w-full relative">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] bg-gradient-to-br from-emerald-50 to-teal-100/50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex items-end">
              <Image 
                src="/hero-teacher-final.png" 
                alt="Instructor Humayun" 
                fill 
                className="object-contain object-bottom scale-105 origin-bottom pt-6"
                priority
              />
            </div>
          </div>
        </section>

        {/* Dynamic Category Segment Picker System */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Browse Our Catalog</h3>
              <p className="text-sm text-slate-500 mt-1">Select your target track to find the right dynamic batch.</p>
            </div>
            {/* Category Control Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'academic', label: 'Academic (HSC)' },
                { id: 'skills', label: 'Skills Development' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Product Grid System (Course Catalog) */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={course.id}
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                >
                  {/* Thumbnail Image Box Context with Badge Layer */}
                  <div className="relative w-full aspect-video bg-slate-100">
                    <span className={`absolute top-3 left-3 text-[10px] font-extrabold tracking-wider uppercase text-white ${course.badgeBg} px-2.5 py-1 rounded-md z-10 shadow-sm`}>
                      {course.badge}
                    </span>
                    {/* Fallback pattern to maintain shape structure gracefully */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white/10 font-bold text-xs">
                      {course.title}
                    </div>
                  </div>

                  {/* Course Details Block */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">{course.category}</span>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug tracking-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-400">Instructor: {course.instructor}</p>
                    </div>

                    {/* Metadata Pill Tags */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium border-t border-b border-slate-100 py-2">
                      <span className="flex items-center gap-1">
                        📚 {course.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        📝 {course.quizzes}
                      </span>
                    </div>

                    {/* Highly-Visible Pricing & Conversion Block */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900">{course.discountedPrice}</span>
                        <span className="text-xs text-slate-400 line-through font-medium">{course.originalPrice}</span>
                      </div>
                      <span className="text-[11px] font-extrabold text-emerald-600 group-hover:underline flex items-center gap-0.5">
                        Enroll Now 
                        <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Social Proof & Trust Metrics Section */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 text-center space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800">Why Students Excel at Humayun&apos;s Tutorial</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            <div>
              <p className="text-3xl font-black text-emerald-600">১৬০০+</p>
              <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">Total Videos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-600">২৫k+</p>
              <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">Registered Students</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-600">১on১</p>
              <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">Doubt Solving</p>
            </div>
            <div>
              <p className="text-3xl font-black text-emerald-600">১০০%</p>
              <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">Resource Access</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}