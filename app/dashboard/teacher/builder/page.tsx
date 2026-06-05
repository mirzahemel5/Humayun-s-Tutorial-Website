// src/app/dashboard/teacher/builder/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TeacherCourseBuilderPage() {
  const [lectures, setLectures] = useState([
    { id: '1', title: '1.1 Introduction to Vectors & Scalars', duration: '18:24' },
    { id: '2', title: '1.2 Vector Addition & Triangle Law', duration: '24:15' }
  ]);
  const [title, setTitle] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLectures([...lectures, { id: Date.now().toString(), title, duration: '15:00' }]);
    setTitle('');
  };

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto p-6 lg:p-8 flex flex-col gap-4">
      <div>
        <Link href="/dashboard/teacher" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
          ← Back to Studio Home
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 h-[calc(100vh-140px)] overflow-y-auto items-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-xs font-black tracking-tight uppercase text-slate-400">Add New Lecture</h3>
          <form onSubmit={handleAdd} className="space-y-3">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Lecture title..." className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold outline-none focus:border-emerald-500 placeholder-slate-400" />
            <button type="submit" className="w-full bg-slate-900 text-white font-bold text-xs py-3 rounded-xl uppercase tracking-wider hover:bg-slate-800 transition-colors">Add to Syllabus</button>
          </form>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-black tracking-tight uppercase text-slate-400">Syllabus Outline Matrix</h3>
          <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-white">
            {lectures.map((lec, idx) => (
              <div key={lec.id} className="p-3.5 flex items-center justify-between text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                <span>{idx + 1}. {lec.title}</span>
                <span className="text-[10px] font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{lec.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}