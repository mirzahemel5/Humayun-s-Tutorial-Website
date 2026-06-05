// src/app/dashboard/teacher/page.tsx
'use client';

export default function TeacherDashboard() {
  const userId = "usr_th_110293"; // Unique Teacher ID

  return (
    <div className="p-8 max-w-5xl w-full mx-auto space-y-6 text-[#1E293B]">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight">Instructor Studio 🛠️</h3>
          <p className="text-xs text-slate-400 mt-1 font-mono">Teacher ID: {userId}</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
          HK
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">👥</span>
          <h4 className="text-xl font-black mt-2">24.8k</h4>
          <p className="text-xs text-slate-400 mt-1">Total active students</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">📥</span>
          <h4 className="text-xl font-black mt-2">12 Pending</h4>
          <p className="text-xs text-slate-400 mt-1">Student doubts to resolve</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-2xl">৳</span>
          <h4 className="text-xl font-black mt-2">৳৮৪,৫০০</h4>
          <p className="text-xs text-slate-400 mt-1">Current monthly revenue split</p>
        </div>
      </div>
    </div>
  );
}