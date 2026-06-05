// src/app/dashboard/manager/promos/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Coupon {
  code: string;
  value: number;
  status: 'active' | 'expired';
}

export default function ManagerPromosPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    { code: 'HSC2026', value: 20, status: 'active' },
    { code: 'HUMAYUN500', value: 500, status: 'active' },
  ]);
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !value) return;
    setCoupons([{ code: code.toUpperCase().replace(/\s+/g, ''), value: Number(value), status: 'active' }, ...coupons]);
    setCode('');
    setValue('');
  };

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto p-6 lg:p-8 flex flex-col gap-4">
      <div><Link href="/dashboard/manager" className="text-xs font-bold text-slate-500 hover:text-slate-800">← Back to Dashboard</Link></div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-8 h-[calc(100vh-140px)] overflow-y-auto items-start">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-black tracking-tight border-b border-slate-100 pb-2">Generate Promo Code</h3>
          <form onSubmit={handleCreateCoupon} className="space-y-4">
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="PROMOCODE" className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold uppercase outline-none focus:border-emerald-500" />
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Worth value amount..." className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold outline-none focus:border-emerald-500" />
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-colors shadow-md">Deploy Coupon Code</button>
          </form>
        </div>
        <div className="space-y-3">
          {coupons.map((c) => (
            <div key={c.code} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-sm">
              <span className="font-mono text-sm font-black text-slate-800 bg-slate-100 border border-dashed border-slate-300 px-3 py-1 rounded-lg uppercase">{c.code}</span>
              <span className="text-xs font-bold text-slate-500">Value Worth parameter asset configuration mapping: {c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}