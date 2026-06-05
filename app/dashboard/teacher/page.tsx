// src/app/dashboard/teacher/page.tsx
'use client';

import Link from 'next/link';

export default function TeacherDashboardHome() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B]">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight">Instructor Workspace Studio 🛠️</h3>
          <p className="text-xs text-slate-400 mt-1">Configure academic curriculum matrices, review student analytics logs, and publish live batches.</p>
        </div>
        <Link href="/dashboard/teacher/builder" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide">
          Manage Syllabus Outline
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">👥</span>
          <h4 className="text-xl font-black mt-2">24.8k</h4>
          <p className="text-xs text-slate-400 mt-1">Total active platform student enrollments</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">📥</span>
          <h4 className="text-xl font-black mt-2">12 Pending</h4>
          <p className="text-xs text-slate-400 mt-1">Unresolved student doubt logs</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">৳</span>
          <h4 className="text-xl font-black mt-2">৳৮৪,৫০০</h4>
          <p className="text-xs text-slate-400 mt-1">Current monthly marketplace revenue share</p>
        </div>
      </div>
    </div>
  );
}