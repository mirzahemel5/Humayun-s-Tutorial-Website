// src/app/dashboard/student/page.tsx
'use client';

import Link from 'next/link';

export default function StudentDashboardHome() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B]">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight">Welcome back, Learner! 👋</h3>
          <p className="text-xs text-slate-400 mt-1">Track your active curriculum lessons and complete scheduled mock items.</p>
        </div>
        <Link href="/dashboard/student/course" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide">
          Enter Video Classroom
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">📖</span>
          <h4 className="text-xl font-black mt-2">3 Courses</h4>
          <p className="text-xs text-slate-400 mt-1">Currently active learning tracks</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">⏳</span>
          <h4 className="text-xl font-black mt-2">14 Hours</h4>
          <p className="text-xs text-slate-400 mt-1">Total classroom stream watch time</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">🎯</span>
          <h4 className="text-xl font-black mt-2">88% Avg</h4>
          <p className="text-xs text-slate-400 mt-1">Mock test performance ratio</p>
        </div>
      </div>
    </div>
  );
}