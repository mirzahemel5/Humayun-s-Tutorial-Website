// src/app/dashboard/manager/review/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseSubmission {
  id: string;
  title: string;
  instructorName: string;
  instructorId: string;
  category: string;
  videosCount: number;
  dateSubmitted: string;
}

export default function ManagerContentReviewPage() {
  const [submissions, setSubmissions] = useState<CourseSubmission[]>(
    [
      { id: 'sub_09214', title: 'HSC Physics 2026 - Wave Mechanics Masterclass', instructorName: 'Humayun Kabir', instructorId: 'usr_th_110293', category: 'Academic', videosCount: 14, dateSubmitted: '04 June 2026' },
      { id: 'sub_08451', title: 'Next.js 15 & Supabase Enterprise Architecture Blueprint', instructorName: 'Humayun Kabir', instructorId: 'usr_th_110293', category: 'Skills Development', videosCount: 22, dateSubmitted: '05 June 2026' }
    ]
  );

  const handleProcessApproval = (submissionId: string, resolution: 'approved' | 'rejected') => {
    // Simulated approval database mutation pipeline removal
    setSubmissions(submissions.filter(sub => sub.id !== submissionId));
    alert(`Content piece ${submissionId} successfully resolved state to: ${resolution.toUpperCase()}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8 flex flex-col gap-6 text-[#1E293B] font-sans">
      
      {/* Navigation Router Ribbon Header */}
      <div>
        <Link href="/dashboard/manager" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
          ← Back to Hub Overview
        </Link>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Curriculum Quality Control Ledger</span>
        <h2 className="text-xl font-black tracking-tight text-slate-900">Syllabus Submissions Verification Portal</h2>
        <p className="text-xs text-slate-400">Review, audit video video placeholder matrices, and approve instructor content channels before release loops.</p>
      </div>

      {/* Review Main Queue View Grid */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {submissions.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400 font-medium shadow-sm"
            >
              🎉 Outstanding work! The incoming content approval review queue is completely clear.
            </motion.div>
          ) : (
            submissions.map((sub) => (
              <motion.div
                key={sub.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 transition-colors"
              >
                {/* Meta details data layout rows */}
                <div className="space-y-3 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md">
                      {sub.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      SUB_ID: {sub.id}
                    </span>
                  </div>

                  <h3 className="text-base font-black tracking-tight text-slate-900 leading-snug">{sub.title}</h3>
                  
                  {/* Instructor assignment identity tokens */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-semibold">
                    <span>Educator: <span className="text-slate-800">{sub.instructorName}</span></span>
                    <span className="text-[10px] text-slate-400 font-mono">ID: {sub.instructorId}</span>
                    <span className="text-slate-300">|</span>
                    <span>Syllabus Allocation: {sub.videosCount} Videos</span>
                  </div>
                </div>

                {/* Audit Approval Call to Action Panel Element controls */}
                <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                  <button 
                    onClick={() => handleProcessApproval(sub.id, 'rejected')}
                    className="px-4 py-2 bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold rounded-xl transition-all uppercase tracking-wide"
                  >
                    ✕ Reject
                  </button>
                  <button 
                    onClick={() => handleProcessApproval(sub.id, 'approved')}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-emerald-600/10 uppercase tracking-wide"
                  >
                    ✓ Verify & Publish
                  </button>
                </div>

              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}