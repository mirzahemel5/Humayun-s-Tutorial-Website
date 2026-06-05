// src/app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const featureCards = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Easy to Learn',
    description: 'With simple planning and engaging content, learning becomes smooth, enjoyable, and stress-free.',
    bgColor: 'bg-[#ff3b30] text-white',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Guided Path',
    description: 'Your study journey gets easier and guided with top standard education methods.',
    bgColor: 'glass-panel text-white',
    cta: 'Learn More'
  },
  {
    title: 'Metric Hub',
    bgColor: 'bg-black/90 border border-white/10 text-white',
    metrics: [{ label: 'Total Courses', value: '1600+' }, { label: 'Students Registered', value: '25k+' }]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, damping: 18 } }
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 md:px-16 lg:px-24 py-6 text-foreground max-w-7xl mx-auto w-full flex flex-col justify-between pb-24">
      
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between w-full py-4 z-50 mb-8">
        <h1 className="text-xl font-bold tracking-tight text-white">
          Humayun&apos;s Tutorial
        </h1>
        <div className="flex items-center gap-10 text-[11px] font-semibold tracking-widest text-white/90">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">COURSES</a>
          <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">PRICING</a>
          <a href="#" className="py-2 px-6 border border-white/20 rounded-full hover:bg-white/5 transition-all font-medium tracking-normal text-sm">LOGIN</a>
        </div>
      </nav>

      {/* Main Page Layout Flow */}
      <div className="w-full flex flex-col gap-12 lg:gap-20">
        
        {/* Hero Area Stack */}
        <div className="flex flex-col lg:flex-row items-end justify-between w-full max-w-5xl mx-auto relative">
          
          {/* Left Side: Typography */}
          <div className="space-y-6 max-w-[550px] z-20 pb-12 lg:pb-20 text-left">
            <h2 className="text-5xl sm:text-6xl lg:text-[74px] font-serif font-normal leading-[1.05] tracking-tight text-white font-playfair">
              LEARN SKILLS <br />THAT MATTER
            </h2>
            <p className="text-sm md:text-base text-white/70 max-w-[420px] font-light leading-relaxed font-inter">
              Practical, dynamic training designed to upgrade your career, confidence, and opportunities in real-time.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="py-3 px-8 bg-white text-black font-semibold rounded-md hover:brightness-90 transition-all text-xs tracking-wider uppercase">
                Get Started
              </a>
              <a href="#" className="py-3 px-8 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-colors text-xs tracking-wider uppercase">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-full lg:w-[450px] h-[380px] lg:h-[480px] relative z-10 flex justify-center lg:justify-end items-end">
            <div className="relative w-[320px] lg:w-[360px] h-full">
              <Image 
                src="/hero-teacher-final.png" 
                alt="Instructor Humayun" 
                fill 
                className="object-contain object-bottom scale-110 origin-bottom z-10"
                priority
              />
            </div>
          </div>

        </div>

        {/* Feature Cards Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl mx-auto z-30 relative mt-4 lg:mt-8 px-4"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`p-7 rounded-xl flex flex-col justify-between shadow-2xl min-h-[180px] backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${card.bgColor}`}
            >
              {card.metrics ? (
                <div className="space-y-3 w-full my-auto flex flex-col justify-center">
                  {card.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-medium tracking-widest uppercase opacity-40">{metric.label}</span>
                      <span className="text-2xl font-bold tracking-tight mt-0.5">{metric.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="space-y-2.5">
                    {card.icon && <div className="opacity-90">{card.icon}</div>}
                    <h4 className="text-lg font-semibold tracking-tight text-white">
                      {card.title}
                    </h4>
                    <p className="text-[11px] leading-relaxed font-light text-white/80 font-inter">
                      {card.description}
                    </p>
                  </div>
                  
                  {card.cta && (
                    <a href="#" className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold tracking-wide text-white group w-fit">
                      {card.cta}
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </motion.section>

        {/* Brand New: Premium Instructor Info Footer Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="w-full max-w-5xl mx-auto px-4 mt-8"
        >
          <div className="glass-panel w-full p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 bg-white/[0.02]">
            
            {/* Left Hand: Identity Profile Info */}
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold tracking-widest text-white uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Lead Instructor
              </div>
              <h3 className="text-3xl font-serif tracking-tight text-white font-playfair">
                Humayun Kabir
              </h3>
              <p className="text-sm font-medium text-white/70 max-w-[480px] font-sans leading-relaxed">
                Senior Full-Stack Developer & Educator specializing in Universal Retail Architectures, Web Systems, and Advanced Software Design.
              </p>
            </div>

            {/* Right Hand: Actionable Contact Grid channels */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              {/* Email Contact Direct Link Component */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href="mailto:contact@humayunstutorial.com"
                className="flex items-center gap-3 px-6 py-4 glass-panel bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-white uppercase w-full sm:w-auto justify-center hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Instructor
              </motion.a>

              {/* General Inquiry Booking/Appointment Routing Action Component */}
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase w-full sm:w-auto justify-center rounded-xl hover:bg-white/90 transition-colors shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Get in Touch
              </motion.a>
            </div>

          </div>
        </motion.section>

      </div>
    </main>
  );
}