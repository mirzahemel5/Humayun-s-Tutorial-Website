// src/app/dashboard/admin/users/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface UserProfile {
  id: string; // The Unique User ID String
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'manager' | 'admin';
  joiningDate: string;
  status: 'active' | 'suspended';
}

export default function AdminUserManagementPage() {
  // Mock Database Profiles featuring Unique User IDs
  const [users, setUsers] = useState<UserProfile[]>([
    { id: 'usr_ad_000001', name: 'Humayun Kabir', email: 'humayun@tutorial.com', role: 'admin', joiningDate: '12 Jan 2026', status: 'active' },
    { id: 'usr_th_110293', name: 'Arif Rahman', email: 'arif.math@tutorial.com', role: 'teacher', joiningDate: '04 Feb 2026', status: 'active' },
    { id: 'usr_mg_554832', name: 'Tasnim Ahmed', email: 'tasnim@operations.com', role: 'manager', joiningDate: '18 Mar 2026', status: 'active' },
    { id: 'usr_st_849204', name: 'Sujon Islam', email: 'sujon.student@gmail.com', role: 'student', joiningDate: '01 May 2026', status: 'active' },
    { id: 'usr_st_992105', name: 'Fahim Faisal', email: 'fahim.faisal@gmail.com', role: 'student', joiningDate: '14 May 2026', status: 'suspended' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const changeUserRole = (id: string, newRole: 'student' | 'teacher' | 'manager' | 'admin') => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  const toggleUserStatus = (id: string) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, status: user.status === 'active' ? 'suspended' : 'active' };
      }
      return user;
    }));
  };

  // ADVANCED SEARCH CRITERIA: Matches against Name, Email, and User ID simultaneously
  const filteredUsers = users.filter(user => {
    const query = searchQuery.toLowerCase().trim();
    return (
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query) || 
      user.id.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans">
      
      {/* Root Command Header Ribbon */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition-colors text-xs font-bold uppercase tracking-wider">
            ← Main Terminal
          </Link>
          <div>
            <span className="text-[10px] font-black uppercase text-rose-600 tracking-widest">System Control Level 0</span>
            <h2 className="text-sm font-bold tracking-tight text-slate-800 mt-0.5">User Access & Authorization Panel</h2>
          </div>
        </div>
        <div className="flex gap-2 text-xs font-bold text-slate-500">
          <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
            Total System Profiles: <span className="text-slate-800 font-extrabold">{users.length}</span>
          </span>
        </div>
      </header>

      {/* Main Panel Content Box */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 lg:p-8 space-y-6">
        
        {/* Dynamic Search Inputs */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center bg-[#F1F5F9] border border-slate-200 rounded-xl px-4 py-2.5 w-full max-w-xl">
            <svg className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name, unique User ID (e.g., usr_st_...), email, or role..." 
              className="bg-transparent text-xs w-full outline-none font-semibold text-slate-700 placeholder-slate-400" 
            />
          </div>
          {searchQuery && (
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg animate-fade-in">
              Filtering: Found {filteredUsers.length} records
            </span>
          )}
        </div>

        {/* Master Database Profiles Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  <th className="py-4 px-6">System Identity & Unique User ID</th>
                  <th className="py-4 px-6">Authorized Access Role</th>
                  <th className="py-4 px-6">Database Creation Date</th>
                  <th className="py-4 px-6">Account Status</th>
                  <th className="py-4 px-6 text-right">Operational Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-slate-400 font-medium">
                      No matching user identity strings or IDs found in current scope.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => {
                    const isSuspended = user.status === 'suspended';
                    
                    return (
                      <tr key={user.id} className={`hover:bg-slate-50/50 transition-colors ${isSuspended ? 'bg-rose-50/10' : ''}`}>
                        
                        {/* Display Profile Identity Metrics alongside structural User IDs */}
                        <td className="py-4 px-6">
                          <div className="flex flex-col gap-1.5">
                            <div>
                              <span className="text-sm font-black text-slate-900 tracking-tight block">{user.name}</span>
                              <span className="text-[11px] font-normal text-slate-400 font-mono block mt-0.5">{user.email}</span>
                            </div>
                            {/* Explicit User ID Badge rendering */}
                            <span className="w-fit text-[10px] font-mono font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-wider">
                              ID: {user.id}
                            </span>
                          </div>
                        </td>

                        {/* Role Modifier Dropdown component */}
                        <td className="py-4 px-6 vertical-middle">
                          <select
                            value={user.role}
                            onChange={(e) => changeUserRole(user.id, e.target.value as any)}
                            className={`px-3 py-1.5 rounded-lg border text-[11px] font-extrabold uppercase cursor-pointer outline-none transition-all ${
                              user.role === 'admin' ? 'bg-rose-50 border-rose-200 text-rose-700' :
                              user.role === 'manager' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                              user.role === 'teacher' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                              'bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                          </select>
                        </td>

                        {/* Creation Timestamps */}
                        <td className="py-4 px-6 text-slate-500 font-medium font-mono">
                          {user.joiningDate}
                        </td>

                        {/* Status Pillars */}
                        <td className="py-4 px-6">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                            isSuspended ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {user.status}
                          </span>
                        </td>

                        {/* Action Modifiers */}
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => toggleUserStatus(user.id)}
                            className={`text-[10px] font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-lg transition-colors border ${
                              isSuspended 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                                : 'bg-white border-rose-200 text-rose-600 hover:bg-rose-50'
                            }`}
                          >
                            {isSuspended ? '✓ Reinstate' : '🚨 Suspend'}
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}