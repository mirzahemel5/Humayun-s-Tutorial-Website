// src/app/dashboard/student/mock-test/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctIndex: number;
}

export default function StudentMockTestPage() {
  // Mock Exam Data - Physics Vector & Kinematics
  const questions: Question[] = [
    {
      id: 1,
      questionText: 'If vector A has a magnitude of 6 units along the positive x-axis, and vector B has a magnitude of 8 units along the positive y-axis, what is the magnitude of the resultant vector (A + B)?',
      options: ['10 units', '14 units', '2 units', '48 units'],
      correctIndex: 0,
    },
    {
      id: 2,
      questionText: 'Under what geometric angular configuration will the scalar dot product of two non-zero vectors completely yield zero?',
      options: ['0° (Parallel)', '180° (Anti-parallel)', '90° (Perpendicular)', '45° (Asymmetric)'],
      correctIndex: 2,
    },
    {
      id: 3,
      questionText: 'Which of the following coordinates represents a true fundamental scalar property metric in classical kinetics?',
      options: ['Displacement', 'Acceleration', 'Kinetic Energy', 'Force Momentum'],
      correctIndex: 3,
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 Minutes countdown clock tracking
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Countdown timer loop execution
  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIdx]: optIdx
    });
  };

  const handleSubmitExam = () => {
    if (isSubmitted) return;
    let finalScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 w-full bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans h-[calc(100vh-80px)] overflow-hidden">
      
      {/* Top Real-time Context Status Control Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/student" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
            ← Exit Test
          </Link>
          <div className="border-l border-slate-200 pl-4">
            <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Live Evaluation Terminal</span>
            <h2 className="text-sm font-bold tracking-tight text-slate-800 mt-0.5">Mock Quiz: Classical Vectors & Mechanics</h2>
          </div>
        </div>

        {/* Dynamic Warning Timer Pill */}
        <div className={`text-xs font-mono font-black px-4 py-2 border rounded-xl shadow-sm transition-colors ${timeLeft < 120 && !isSubmitted ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
          ⏰ {isSubmitted ? 'EXAM CONCLUDED' : `TIME REMAINING: ${formatTime(timeLeft)}`}
        </div>
      </header>

      {/* Main Split Testing Grid layout panel */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Left Side: Question Sheet Canvas Container */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col justify-between bg-[#F8FAFC]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="max-w-3xl w-full mx-auto space-y-6 my-auto"
              >
                {/* Question Text Prompt Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Question {currentIdx + 1} of {questions.length}</span>
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-snug">
                    {questions[currentIdx].questionText}
                  </h3>
                </div>

                {/* Multiple Choice Option Buttons Block */}
                <div className="grid grid-cols-1 gap-3">
                  {questions[currentIdx].options.map((option, oIdx) => {
                    const isSelected = selectedAnswers[currentIdx] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full p-4 rounded-xl text-left font-bold text-xs sm:text-sm border transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md shadow-emerald-600/5' 
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`h-6 w-6 rounded-lg text-xs font-black flex items-center justify-center border ${isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          {option}
                        </span>
                        {isSelected && <span className="text-emerald-600 text-sm">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* Performance Score Analytics Metric View Block */
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="max-w-md w-full mx-auto bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xl my-auto space-y-6"
              >
                <div className="h-20 w-20 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">🎯</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black tracking-tight">Performance Ledger Recorded</h3>
                  <p className="text-xs text-slate-400 font-medium">Your submission score coordinate sheet has filed successfully.</p>
                </div>
                <div className="bg-[#F1F5F9] border border-slate-100 rounded-xl p-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Final Score Metrics</span>
                  <h4 className="text-4xl font-black text-slate-900 mt-1">
                    {score} <span className="text-sm font-bold text-slate-400">/ {questions.length} Correct</span>
                  </h4>
                  <p className="text-xs text-emerald-600 font-bold mt-1">Accuracy Ratio: {Math.round((score / questions.length) * 100)}%</p>
                </div>
                <Link href="/dashboard/student" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl uppercase tracking-wider block transition-colors">
                  Return to Dashboard Hub
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Pagination Control Bar */}
          {!isSubmitted && (
            <div className="max-w-3xl w-full mx-auto flex items-center justify-between border-t border-slate-200/60 pt-4 mt-6 z-10 flex-shrink-0">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
              >
                ← Previous
              </button>
              
              {currentIdx === questions.length - 1 ? (
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold rounded-lg shadow-md shadow-rose-600/10 uppercase tracking-wider transition-colors"
                >
                  🛑 Submit Exam Sheet
                </button>
              ) : (
                <button
                  onClick={() => setCurrentIdx(currentIdx + 1)}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Next Question →
                </button>
              )}
            </div>
          )}
        </main>

        {/* Right Side: Visual Progress Map Sidebar Drawer */}
        {!isSubmitted && (
          <aside className="w-full lg:w-72 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 p-4 flex flex-col justify-between overflow-y-auto z-30 flex-shrink-0">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block px-1">Questions Navigation Grid</span>
              <div className="grid grid-cols-4 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentIdx;
                  const isAnswered = selectedAnswers[idx] !== undefined;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-10 text-xs font-mono font-black rounded-lg transition-all border flex items-center justify-center ${
                        isCurrent ? 'bg-emerald-600 border-emerald-600 text-white shadow-md' :
                        isAnswered ? 'bg-slate-100 border-slate-300 text-slate-800' :
                        'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2 mt-6">
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Exam Status Coordinates</span>
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Answered:</span>
                <span className="text-slate-900 font-mono">{Object.keys(selectedAnswers).length} / {questions.length}</span>
              </div>
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}