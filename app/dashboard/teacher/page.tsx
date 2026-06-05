// src/app/dashboard/teacher/page.tsx
'use client';

import Link from 'next/link';

export default function TeacherDashboardHome() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl w-full mx-auto space-y-8 text-[#1E293B] font-sans">
      
      {/* Welcome & Management Action Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-slate-900">Instructor Workspace Studio 🛠️</h3>
          <p className="text-xs text-slate-400 mt-1">Configure academic curriculum matrices, review student analytics logs, and publish live batches.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
          {/* LINK 1: To the Student Performance Analytics Deck */}
          <Link 
            href="/dashboard/teacher/analytics" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            📊 View Analytics
          </Link>
          {/* LINK 2: To the Syllabus Course Builder Studio */}
          <Link 
            href="/dashboard/teacher/builder" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md uppercase tracking-wide"
          >
            Manage Syllabus
          </Link>
        </div>
      </div>

      {/* Analytics Counter Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* LINK 3: Clicking the Student Counter card also routes seamlessly straight into the performance dashboard */}
        <Link 
          href="/dashboard/teacher/analytics" 
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm block hover:border-emerald-500 hover:shadow-md transition-all group cursor-pointer"
        >
          <span className="text-2xl group-hover:scale-110 block transition-transform w-fit">👥</span>
          <h4 className="text-xl font-black mt-2 text-slate-900 group-hover:text-emerald-600 transition-colors">24.8k</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Total active platform student enrollments. Click to monitor performance metrics →</p>
        </Link>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">📥</span>
          <h4 className="text-xl font-black mt-2 text-slate-900">12 Pending</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Unresolved student doubt logs submitted from the chat portals.</p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">৳</span>
          <h4 className="text-xl font-black mt-2 text-slate-900">৳৮৪,৫০০</h4>
          <p className="text-xs text-slate-400 mt-1 font-medium">Current monthly marketplace premium revenue distribution share.</p>
        </div>
      </div>

    </div>
  );
}