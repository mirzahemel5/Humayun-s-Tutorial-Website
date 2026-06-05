// src/app/dashboard/layout.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Alex_Brush } from 'next/font/google';

const scriptFont = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function MasterDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getWorkspaceContext = () => {
    if (pathname.includes('/student')) return { title: 'Student Portal', id: 'usr_st_849204', initial: 'SI' };
    if (pathname.includes('/teacher')) return { title: 'Instructor Studio', id: 'usr_th_110293', initial: 'HK' };
    if (pathname.includes('/manager')) return { title: 'Operational Hub', id: 'usr_mg_554832', initial: 'TA' };
    return { title: 'Admin Command Center', id: 'usr_ad_000001', initial: 'RA' };
  };

  const context = getWorkspaceContext();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased flex flex-col font-sans">
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between shadow-sm flex-shrink-0">
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
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black text-slate-500 tracking-wider uppercase">
              Workspace / <span className="text-slate-800">{context.title}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded uppercase">
            ID: {context.id}
          </span>
          <div className="h-9 w-9 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center border border-emerald-700 shadow-md shadow-emerald-600/10">
            {context.initial}
          </div>
        </div>
      </nav>
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}