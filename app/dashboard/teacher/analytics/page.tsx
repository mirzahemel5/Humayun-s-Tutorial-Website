// src/app/dashboard/teacher/analytics/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface StudentMetric {
  id: string;
  name: string;
  email: string;
  batch: string;
  watchTimePercent: number;
  mockTestAvg: number;
  status: 'Exceling' | 'On Track' | 'Needs Attention';
}

export default function TeacherAnalyticsPage() {
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Student Performance Database Records featuring Unique User IDs
  const studentPerformanceData: StudentMetric[] = [
    { id: 'usr_st_849204', name: 'Sujon Islam', email: 'sujon.student@gmail.com', batch: 'HSC Physics 2026', watchTimePercent: 92, mockTestAvg: 88, status: 'Exceling' },
    { id: 'usr_st_992105', name: 'Fahim Faisal', email: 'fahim.faisal@gmail.com', batch: 'HSC Physics 2026', watchTimePercent: 45, mockTestAvg: 58, status: 'Needs Attention' },
    { id: 'usr_st_102943', name: 'Anika Rahman', email: 'anika.hsc@gmail.com', batch: 'HSC Math Complete', watchTimePercent: 78, mockTestAvg: 74, status: 'On Track' },
    { id: 'usr_st_445219', name: 'Rakib Hasan', email: 'rakib.dev@gmail.com', batch: 'Full-Stack Web Dev', watchTimePercent: 95, mockTestAvg: 91, status: 'Exceling' },
    { id: 'usr_st_773201', name: 'Mehedi Hasan', email: 'mehedi.physics@gmail.com', batch: 'HSC Physics 2026', watchTimePercent: 60, mockTestAvg: 62, status: 'On Track' },
  ];

  // Filter logic processing batch selection and multi-coordinate search queries
  const filteredStudents = studentPerformanceData.filter(student => {
    const matchesBatch = selectedBatch === 'all' || student.batch === selectedBatch;
    const matchesQuery = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesBatch && matchesQuery;
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8 flex flex-col gap-6 text-[#1E293B] font-sans">
      
      {/* Navigation Breadcrumb */}
      <div>
        <Link href="/dashboard/teacher" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
          ← Back to Studio Home
        </Link>
      </div>

      {/* Top High-Level Performance Aggregate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">Class Performance Average</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2">৭৪.৬%</h3>
          <p className="text-xs text-emerald-600 font-bold mt-1">↑ ২.৪% compared to last weekly live mock test</p>
        </div>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">Syllabus Completion Pace</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2">৭৪% Avg</h3>
          <p className="text-xs text-slate-400 font-medium mt-1">Mean completion progress rate per active account</p>
        </div>
        <div className="bg-white border border-rose-100 p-6 rounded-2xl shadow-sm bg-gradient-to-br from-white to-rose-50/10">
          <span className="text-xs font-black text-rose-600 uppercase tracking-widest block">Attention Warning Threshold</span>
          <h3 className="text-3xl font-black text-slate-900 mt-2">১ Student</h3>
          <p className="text-xs text-rose-600 font-bold mt-1">Profile parameters dipping below critical 60% metric benchmarks</p>
        </div>
      </div>

      {/* Grid Filter and Query Toolbar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Coordinates Field Input */}
        <div className="flex items-center bg-[#F1F5F9] border border-slate-200 rounded-xl px-4 py-2.5 w-full max-w-md">
          <svg className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student profile name, unique User ID, or email address..." 
            className="bg-transparent text-xs w-full outline-none font-semibold text-slate-700 placeholder-slate-400" 
          />
        </div>

        {/* Dynamic Select Segment Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest whitespace-nowrap">Filter Batch:</label>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-600 outline-none focus:border-emerald-500 cursor-pointer w-full sm:w-auto"
          >
            <option value="all">All Dynamic Cohorts</option>
            <option value="HSC Physics 2026">HSC Physics 2026</option>
            <option value="HSC Math Complete">HSC Math Complete</option>
            <option value="Full-Stack Web Dev">Full-Stack Web Dev</option>
          </select>
        </div>
      </div>

      {/* Main Analytics Ledger Grid Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                <th className="py-4 px-6">Student Coordinates</th>
                <th className="py-4 px-6">Active Program Batch</th>
                <th className="py-4 px-6">Syllabus Video Progress</th>
                <th className="py-4 px-6">Mock Exam Average</th>
                <th className="py-4 px-6 text-right">Performance Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400 font-medium">
                    No matching student performance matrix metrics matched current parameter criteria.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                    
                    {/* Identity Coordinates */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-black text-slate-900 tracking-tight">{student.name}</span>
                        <span className="text-[11px] font-normal text-slate-400 font-mono">{student.email}</span>
                        <span className="w-fit text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border px-1.5 py-0.5 rounded uppercase mt-0.5">ID: {student.id}</span>
                      </div>
                    </td>

                    {/* Program Information */}
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      {student.batch}
                    </td>

                    {/* Progress Percentage Tracking Progress Bar */}
                    <td className="py-4 px-6">
                      <div className="w-40 space-y-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-500">{student.watchTimePercent}% watched</span>
                        <div className="w-full h-1.5 bg-slate-100 border rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all ${student.watchTimePercent < 50 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                            style={{ width: `${student.watchTimePercent}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Mock Test Score Analytics Rendering */}
                    <td className="py-4 px-6">
                      <span className={`text-sm font-mono font-black ${student.mockTestAvg >= 80 ? 'text-emerald-600' : student.mockTestAvg < 60 ? 'text-rose-600' : 'text-slate-800'}`}>
                        {student.mockTestAvg}%
                      </span>
                    </td>

                    {/* Performance Parameter Badges */}
                    <td className="py-4 px-6 text-right">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                        student.status === 'Exceling' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                        student.status === 'On Track' ? 'bg-slate-50 border-slate-200 text-slate-600' :
                        'bg-rose-50 border-rose-200 text-rose-700 animate-pulse'
                      }`}>
                        {student.status}
                      </span>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}