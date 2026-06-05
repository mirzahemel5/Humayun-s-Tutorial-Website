// src/app/dashboard/student/course/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const syllabusData = [
  {
    moduleTitle: 'Module 1: Fundamentals of Vector Analysis',
    lectures: [
      { id: 'l1', title: '1.1 Introduction to Vectors & Scalars', duration: '18:24' },
      { id: 'l2', title: '1.2 Vector Addition & Triangle Law', duration: '24:15' },
      { id: 'l3', title: '1.3 Dot Product & Cross Product Mechanics', duration: '32:40' },
    ]
  }
];

export default function StudentCoursePlayerPage() {
  const [currentVideo, setCurrentVideo] = useState({
    title: '1.3 Dot Product & Cross Product Mechanics',
    duration: '32:40',
    id: 'l3'
  });

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-80px)]">
      <main className="flex-1 bg-slate-900 flex flex-col justify-between p-6 relative">
        <div className="w-full max-w-4xl mx-auto flex items-center justify-between pb-4">
          <Link href="/dashboard/student" className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors">
            ← Back to Portal
          </Link>
        </div>
        <div className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-2xl shadow-2xl relative flex items-center justify-center my-auto border border-white/5">
          <button className="h-16 w-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-transform active:scale-95">▶</button>
        </div>
        <div className="w-full max-w-4xl mx-auto flex items-center justify-between pt-6">
          <h3 className="text-base font-bold text-white tracking-tight">{currentVideo.title}</h3>
        </div>
      </main>

      <aside className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col overflow-y-auto z-30">
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Course Syllabus Playlist</h4>
        </div>
        <div className="p-4 space-y-2">
          <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{syllabusData[0].moduleTitle}</h5>
          {syllabusData[0].lectures.map((lec) => (
            <div key={lec.id} onClick={() => setCurrentVideo(lec)} className={`w-full p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${currentVideo.id === lec.id ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-white border-slate-100 hover:border-slate-200 text-slate-700'}`}>
              {lec.title}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}