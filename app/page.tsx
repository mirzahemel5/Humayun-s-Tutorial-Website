// src/app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Alex_Brush } from 'next/font/google';

const scriptFont = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
  }
];

export default function RootHomepage() {
  const [activeTab, setActiveTab] = useState('all');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const filteredCourses = activeTab === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  // Simulated Frontend Router for your roles
  const handleSimulatedLogin = (role: 'student' | 'teacher' | 'manager' | 'admin') => {
    setShowLoginModal(false);
    // Securely push the user straight to their independent folder dashboard route
    router.push(`/dashboard/${role === 'student' ? 'student' : role}`);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased relative">
      
      {/* 10MS Style Sticky Header with Brand Logo */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6 w-full max-w-4xl">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-14 flex-shrink-0">
              <Image src="/logo.png" alt="Humayun's Tutorial Logo" fill className="object-contain" priority />
            </div>
            <span className={`${scriptFont.className} text-3xl text-slate-800 ml-1 select-none pt-2 tracking-wide block`}>
              Humayun&apos;s Tutorial
            </span>
          </Link>
          
          <div className="hidden md:flex items-center bg-[#F1F5F9] border border-slate-200 rounded-lg px-3 py-2 w-full max-w-md ml-6">
            <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search for courses, topics..." className="bg-transparent text-sm w-full outline-none text-slate-700 placeholder-slate-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-6 font-semibold text-sm text-slate-600">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">Home</Link>
          <a href="#" className="hover:text-emerald-600 transition-colors whitespace-nowrap">Live Classes</a>
          <button 
            onClick={() => setShowLoginModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-all text-sm shadow-md shadow-emerald-600/10"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

        {/* Course Catalog Grid */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Browse Our Catalog</h3>
              <p className="text-sm text-slate-500 mt-1">Select your target track to find the right dynamic batch.</p>
            </div>
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

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white/20 font-bold p-4 text-center text-xs">
                    <span className={`absolute top-3 left-3 text-[10px] font-extrabold tracking-wider uppercase text-white ${course.badgeBg} px-2.5 py-1 rounded-md z-10 shadow-sm`}>
                      {course.badge}
                    </span>
                    {course.title}
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest">{course.category}</span>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug tracking-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-400">Instructor: {course.instructor}</p>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium border-t border-b border-slate-100 py-2">
                      <span>📚 {course.lessons}</span>
                      <span>📝 {course.quizzes}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900">{course.discountedPrice}</span>
                        <span className="text-xs text-slate-400 line-through font-medium">{course.originalPrice}</span>
                      </div>
                      <span className="text-[11px] font-extrabold text-emerald-600 group-hover:underline flex items-center gap-0.5">
                        Enroll Now 
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>

      {/* DYNAMIC ROLE SELECTOR MODAL (Simulated Portal Access Gateway) */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-slate-200 space-y-4 relative"
            >
              <button 
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
              <div className="text-center">
                <h3 className="text-xl font-black tracking-tight">Select Authentication Account</h3>
                <p className="text-xs text-slate-400 mt-1">Simulate signing into your specific workspace routing node.</p>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                {[
                  { role: 'student', desc: 'Access Course Player & Mock Tests', label: 'Log In as Student' },
                  { role: 'teacher', desc: 'Access Course Builder & Syllabus Matrix', label: 'Log In as Teacher' },
                  { role: 'manager', desc: 'Access Campaigns & Promotional Engine', label: 'Log In as Manager' },
                  { role: 'admin', desc: 'Access System Permissions & Database Log Toggles', label: 'Log In as Administrator' }
                ].map((btn) => (
                  <button
                    key={btn.role}
                    onClick={() => handleSimulatedLogin(btn.role as any)}
                    className="w-full p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-left rounded-xl transition-all flex flex-col group"
                  >
                    <span className="text-xs font-black text-slate-800 group-hover:text-emerald-700 transition-colors uppercase tracking-wide">{btn.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">{btn.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}