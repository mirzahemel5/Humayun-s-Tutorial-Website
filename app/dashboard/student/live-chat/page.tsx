// src/app/dashboard/student/live-chat/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  userId: string;
  userName: string;
  userInitial: string;
  role: 'student' | 'teacher' | 'manager' | 'admin';
  text: string;
  timestamp: string;
}

export default function StudentLiveChatPage() {
  const currentStudentId = "usr_st_849204"; // Logged-in student ID
  const [activeChannel, setActiveChannel] = useState('HSC Physics 2026');
  const [typedMessage, setTypedMessage] = useState('');
  
  // Mock Chat Feed Database Log Arrays
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm_1', userId: 'usr_th_110293', userName: 'Humayun Kabir', userInitial: 'HK', role: 'teacher', text: 'Welcome everyone to todays Live Session! We will cover the geometric application of vector cross products in 5 minutes.', timestamp: '08:30 PM' },
    { id: 'm_2', userId: 'usr_st_992105', userName: 'Fahim Faisal', userInitial: 'FF', role: 'student', text: 'Assalamu Alaikum sir, will today\'s lecture notes be uploaded as a PDF resource right after class?', timestamp: '08:31 PM' },
    { id: 'm_3', userId: 'usr_mg_554832', userName: 'Tasnim Ahmed', userInitial: 'TA', role: 'manager', text: '📢 Reminder: The Mock Test for Module 1 vectors goes live at 09:30 PM tonight. Make sure to complete your submissions on time!', timestamp: '08:32 PM' },
    { id: 'm_4', userId: 'usr_st_102943', userName: 'Anika Rahman', email: 'anika.hsc@gmail.com', userInitial: 'AR', role: 'student', text: 'I am ready for the quiz! The vector dot product properties are super clear now.', timestamp: '08:33 PM' },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll mechanics keeping chat locked to bottom on incoming updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMsg: Message = {
      id: `m_${Date.now()}`,
      userId: currentStudentId,
      userName: 'Sujon Islam',
      userInitial: 'SI',
      role: 'student',
      text: typedMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMsg]);
    setTypedMessage('');
  };

  return (
    <div className="flex-1 w-full bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans h-[calc(100vh-80px)] overflow-hidden">
      
      {/* Top Controller Context Ribbon */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/student" className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors">
            ← Dashboard Hub
          </Link>
          <div className="border-l border-slate-200 pl-4">
            <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Active Cohort Feed</span>
            <h2 className="text-sm font-bold tracking-tight text-slate-800 mt-0.5">💬 Live Batch Chat Board</h2>
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-500 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg text-emerald-700 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Room Syncing
        </div>
      </header>

      {/* Main Board Layout Splitting Grid */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Left Drawer Side: Active Channels Picker & Members List */}
        <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col flex-shrink-0 z-30">
          {/* Active Cohorts Array Section */}
          <div className="p-4 border-b border-slate-100 space-y-2">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block px-1">My Batches</span>
            <div className="space-y-1">
              {['HSC Physics 2026', 'HSC Math Complete', 'Full-Stack Web Dev'].map((channel) => (
                <button
                  key={channel}
                  onClick={() => setActiveChannel(channel)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-bold transition-all flex items-center gap-2.5 ${
                    activeChannel === channel
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <span className="text-sm">#</span>
                  {channel}
                </button>
              ))}
            </div>
          </div>

          {/* Classroom Active Users Panel */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 hidden md:block">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block px-1">Active Now (4)</span>
            <div className="space-y-2">
              {[
                { name: 'Humayun Kabir', role: 'teacher', bg: 'bg-emerald-600' },
                { name: 'Sujon Islam', role: 'student (You)', bg: 'bg-slate-800' },
                { name: 'Anika Rahman', role: 'student', bg: 'bg-slate-400' },
                { name: 'Tasnim Ahmed', role: 'manager', bg: 'bg-amber-500' },
              ].map((user, uIdx) => (
                <div key={uIdx} className="flex items-center gap-2.5 px-1 py-1">
                  <div className={`h-2 w-2 rounded-full bg-emerald-500`} />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700 leading-tight">{user.name}</span>
                    <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">{user.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center / Right Column: Live Message Canvas Feed and Entry Box */}
        <main className="flex-1 flex flex-col justify-between bg-slate-50 relative overflow-hidden">
          
          {/* Pinned Announcement Message Ticker Banner */}
          <div className="bg-amber-50/80 backdrop-blur-sm border-b border-amber-200/60 px-5 py-2.5 text-xs font-bold text-amber-900 flex items-center gap-3 z-10 flex-shrink-0 select-none">
            <span className="text-sm">📌</span>
            <p className="truncate">Pinned Announcement: Live QA doubt verification forum triggers at the end of lecture loops.</p>
          </div>

          {/* Scrollable Chat Feed Stream Layout */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => {
                const isMe = msg.userId === currentStudentId;
                
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 max-w-xl ${isMe ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                  >
                    {/* User Profile Avatar Bubble */}
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-black border flex-shrink-0 text-white shadow-sm ${
                      msg.role === 'teacher' ? 'bg-emerald-600 border-emerald-700' :
                      msg.role === 'manager' ? 'bg-amber-500 border-amber-600' :
                      isMe ? 'bg-slate-800 border-slate-900' : 'bg-slate-400 border-slate-500'
                    }`}>
                      {msg.userInitial}
                    </div>

                    {/* Chat Bubble Structure Layout Box */}
                    <div className="space-y-1">
                      <div className={`flex items-baseline gap-2 ${isMe ? 'flex-row-reverse' : ''}`}>
                        <span className="text-[11px] font-black text-slate-700">{msg.userName}</span>
                        <span className="text-[9px] font-mono font-bold text-slate-400">{msg.timestamp}</span>
                        {msg.role !== 'student' && (
                          <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.2 rounded border ${
                            msg.role === 'teacher' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-amber-50 border-amber-200 text-amber-700'
                          }`}>
                            {msg.role}
                          </span>
                        )}
                      </div>
                      
                      <div className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed border shadow-sm ${
                        isMe 
                          ? 'bg-emerald-600 border-emerald-700 text-white rounded-tr-none' 
                          : 'bg-white border-slate-200 text-slate-800 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>

          {/* Interactive Form Bottom Message Input Bar */}
          <form 
            onSubmit={handleSendMessage}
            className="bg-white border-t border-slate-200 p-4 flex items-center gap-3 z-20 flex-shrink-0"
          >
            <input 
              type="text" 
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              placeholder={`Send a real-time question to #${activeChannel}...`} 
              className="flex-1 bg-[#F1F5F9] border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold outline-none focus:border-emerald-500 text-slate-700 placeholder-slate-400 transition-colors"
            />
            <button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-6 rounded-xl transition-colors shadow-md shadow-emerald-600/10 uppercase tracking-wider flex-shrink-0"
            >
              Send 🚀
            </button>
          </form>

        </main>

      </div>
    </div>
  );
}