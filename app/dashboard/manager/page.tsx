// src/app/dashboard/manager/page.tsx
'use client';

import Link from 'next/link';

export default function ManagerDashboardHomePage() {
  const managerId = "usr_mg_554832"; // Unique Manager Database ID Token

  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B] font-sans">
      
      {/* Welcome & Global Action Strip */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-black tracking-tight text-slate-900">Operations Control Deck 👋</h3>
          <p className="text-xs text-slate-400 font-mono">System Node Access Coordinate: {managerId}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          <Link 
            href="/dashboard/manager/review" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            ⚖️ Review Submissions
          </Link>
          <Link 
            href="/dashboard/manager/promos" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            🏷️ Open Promo Engine
          </Link>
        </div>
      </div>

      {/* Analytics Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link 
          href="/dashboard/manager/review"
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-emerald-500 hover:shadow-md block transition-all group cursor-pointer"
        >
          <span className="text-2xl group-hover:scale-110 block transition-transform w-fit">👀</span>
          <h4 className="text-xl font-black mt-2 text-slate-900 group-hover:text-emerald-600 transition-colors">2 Submissions</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Syllabus modules awaiting verification reviews. Click to audit →</p>
        </Link>
        
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">0506</span>
          <h4 className="text-xl font-black mt-2 text-slate-900">5 Open Tickets</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Pending transaction disputes or portal support items.</p>
        </div>

        <Link 
          href="/dashboard/manager/promos"
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-emerald-500 hover:shadow-md block transition-all group cursor-pointer"
        >
          <span className="text-2xl group-hover:scale-110 block transition-transform w-fit">📢</span>
          <h4 className="text-xl font-black mt-2 text-slate-900 group-hover:text-emerald-600 transition-colors">3 Active Promos</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Discount vouchers actively circulating on the public store.</p>
        </Link>
      </div>

      {/* Operational Task Queues Preview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">System Operations Priority Log</span>
        <div className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
          <div className="py-3.5 flex items-center justify-between gap-4">
            <span className="truncate">Audit submitted Next.js App Router Advanced Curriculum material parameters...</span>
            <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-md whitespace-nowrap">High Priority</span>
          </div>
          <div className="py-3.5 flex items-center justify-between gap-4">
            <span className="truncate">Deploy custom 15% discount rules matrix configuration ledger for June active batches...</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded-md whitespace-nowrap">Marketing</span>
          </div>
        </div>
      </div>

    </div>
  );
}