// src/app/dashboard/student/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function StudentDashboard() {
  const userId = "usr_st_849204"; // Unique Student ID

  return (
    <div className="p-8 max-w-5xl w-full mx-auto space-y-6 text-[#1E293B]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight">Welcome back, Learner! 👋</h3>
          <p className="text-xs text-slate-400 mt-1 font-mono">Student ID: {userId}</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
          SI
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">📖</span>
          <h4 className="text-xl font-black mt-2">3 Courses</h4>
          <p className="text-xs text-slate-400 mt-1">Currently active programs</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">⏳</span>
          <h4 className="text-xl font-black mt-2">14 Hours</h4>
          <p className="text-xs text-slate-400 mt-1">Watch time completed</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">🎯</span>
          <h4 className="text-xl font-black mt-2">88% Avg</h4>
          <p className="text-xs text-slate-400 mt-1">Mock test performance score</p>
        </div>
      </div>
    </div>
  );
}