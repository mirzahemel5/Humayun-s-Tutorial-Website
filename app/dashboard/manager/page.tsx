// src/app/dashboard/manager/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ManagerDashboardHomePage() {
  const managerId = "usr_mg_554832"; // Unique Manager Database ID Token

  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B]">
      
      {/* Welcome Banner Card Context */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-black tracking-tight text-slate-900">Operations Control Deck 👋</h3>
          <p className="text-xs text-slate-400 font-mono">System Node Access Coordinate: {managerId}</p>
        </div>
        <div className="flex gap-2">
          <Link 
            href="/dashboard/manager/promos" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md shadow-emerald-600/10 uppercase tracking-wide"
          >
            🏷️ Launch Promo Code
          </Link>
        </div>
      </div>

      {/* Analytics Counter Metric Grid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl">👀</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">2 Submissions</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Syllabus modules awaiting verification reviews</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl">🎟️</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">5 Open Tickets</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Pending transaction disputes or portal support items</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-2xl">📢</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">3 Active Promos</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Discount vouchers actively circulating the storefront</p>
        </div>
      </div>

      {/* Operational Task Queues Preview */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">System Operations Priority Log</span>
        <div className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
          <div className="py-3.5 flex items-center justify-between gap-4">
            <span className="truncate">Review Instructor Humayun&apos;s Advanced Physics Module 3 Asset upload...</span>
            <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-md whitespace-nowrap">High Priority</span>
          </div>
          <div className="py-3.5 flex items-center justify-between gap-4">
            <span className="truncate">Generate custom localized 15% discount campaign rules for June batch...</span>
            <span className="text-[10px] bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded-md whitespace-nowrap">Marketing</span>
          </div>
        </div>
      </div>

    </div>
  );
}