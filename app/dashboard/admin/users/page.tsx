// src/app/dashboard/admin/users/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'manager' | 'admin';
  joiningDate: string;
  status: 'active' | 'suspended';
}

export default function AdminUserManagementPage() {
  const [users, setUsers] = useState<UserProfile[]>([
    { id: 'usr_ad_000001', name: 'Humayun Kabir', email: 'humayun@tutorial.com', role: 'admin', joiningDate: '12 Jan 2026', status: 'active' },
    { id: 'usr_th_110293', name: 'Arif Rahman', email: 'arif.math@tutorial.com', role: 'teacher', joiningDate: '04 Feb 2026', status: 'active' },
    { id: 'usr_mg_554832', name: 'Tasnim Ahmed', email: 'tasnim@operations.com', role: 'manager', joiningDate: '18 Mar 2026', status: 'active' },
    { id: 'usr_st_849204', name: 'Sujon Islam', email: 'sujon.student@gmail.com', role: 'student', joiningDate: '01 May 2026', status: 'active' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const changeUserRole = (id: string, newRole: any) => {
    setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
  };

  const filteredUsers = users.filter(user => {
    const q = searchQuery.toLowerCase().trim();
    return user.name.toLowerCase().includes(q) || user.email.toLowerCase().includes(q) || user.id.toLowerCase().includes(q);
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-6 lg:p-8 flex flex-col gap-4">
      <div><Link href="/dashboard/admin" className="text-xs font-bold text-slate-500 hover:text-slate-800">← Back to Console</Link></div>
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center bg-[#F1F5F9] px-4 w-full max-w-xl">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by student name, email tracking string, or unique system User ID..." className="bg-transparent text-xs w-full outline-none font-semibold text-slate-700 placeholder-slate-400" />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black tracking-widest text-slate-400 uppercase"><th className="py-4 px-6">System Identity Credentials</th><th className="py-4 px-6">Assigned Role</th><th className="py-4 px-6">Joining Coordinates</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs font-bold text-slate-700">
            {filteredUsers.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 flex flex-col gap-1">
                  <span className="text-sm font-black text-slate-900">{u.name}</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">{u.email}</span>
                  <span className="w-fit text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border px-1.5 py-0.5 rounded uppercase mt-0.5">ID: {u.id}</span>
                </td>
                <td className="py-4 px-6">
                  <select value={u.role} onChange={(e) => changeUserRole(u.id, e.target.value)} className="px-2 py-1 border rounded text-xs font-bold cursor-pointer uppercase">
                    <option value="student">Student</option><option value="teacher">Teacher</option><option value="manager">Manager</option><option value="admin">Admin</option>
                  </select>
                </td>
                <td className="py-4 px-6 font-mono text-slate-500 font-medium">{u.joiningDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}