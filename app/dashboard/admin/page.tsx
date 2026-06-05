// src/app/dashboard/admin/page.tsx
'use client';

import Link from 'next/link';

export default function AdminDashboardHomePage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B]">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-slate-900">Root System Console 🚨</h3>
          <p className="text-xs text-slate-400 mt-1">Level 0 administrative authority credential token access module layout.</p>
        </div>
        <Link href="/dashboard/admin/users" className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide">
          👥 Manage User Profiles
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-rose-200/60 p-6 rounded-2xl shadow-sm bg-gradient-to-br from-white to-rose-50/10">
          <div className="text-2xl">💎</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">৳৪.৮M</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Gross aggregate platform consumer revenue share lifetime</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="text-2xl">⚡</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">99.98% Health</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Uptime cluster response microservices parameters</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="text-2xl">🔒</div>
          <h4 className="text-xl font-black mt-2 text-slate-900">0 Alerts</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Cloud architecture layer log active thread warnings</p>
        </div>
      </div>
    </div>
  );
}