// src/app/dashboard/student/page.tsx
'use client';

import Link from 'next/link';

export default function StudentDashboardHome() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B] font-sans">
      
      {/* Dynamic Welcome Action Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight">Welcome back, Learner! 👋</h3>
          <p className="text-xs text-slate-400 mt-1">Track your active curriculum lessons and complete scheduled mock items.</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* LINK 1: To the newly added Exam sheet engine room */}
          <Link 
            href="/dashboard/student/mock-test" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            📝 Take Mock Test
          </Link>
          <Link 
            href="/dashboard/student/course" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            Enter Video Classroom
          </Link>
        </div>
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
        {/* LINK 2: Clicking the mock performance status card also redirects straight to the engine */}
        <Link 
          href="/dashboard/student/mock-test" 
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-emerald-500 block hover:shadow-md transition-all group cursor-pointer"
        >
          <span className="text-2xl group-hover:scale-110 block transition-transform w-fit">🎯</span>
          <h4 className="text-xl font-black mt-2 text-slate-900 group-hover:text-emerald-600 transition-colors">88% Avg</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Mock test performance ratio. Click to take a test →</p>
        </Link>
      </div>
    </div>
  );
}