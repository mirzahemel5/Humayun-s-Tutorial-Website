// src/app/dashboard/manager/promos/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  status: 'active' | 'expired';
  usageCount: number;
  maxUsage: number;
}

export default function ManagerPromosPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    { code: 'HSC2026', discountType: 'percentage', value: 20, status: 'active', usageCount: 1420, maxUsage: 3000 },
    { code: 'HUMAYUN500', discountType: 'fixed', value: 500, status: 'active', usageCount: 455, maxUsage: 1000 },
    { code: 'EIDSPECIAL', discountType: 'percentage', value: 40, status: 'expired', usageCount: 2000, maxUsage: 2000 },
  ]);

  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('percentage');
  const [value, setValue] = useState('');
  const [maxUsage, setMaxUsage] = useState('');

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !value || !maxUsage) return;

    const newCoupon: Coupon = {
      code: code.toUpperCase().replace(/\s+/g, ''),
      discountType,
      value: Number(value),
      status: 'active',
      usageCount: 0,
      maxUsage: Number(maxUsage),
    };

    setCoupons([newCoupon, ...coupons]);
    setCode('');
    setValue('');
    setMaxUsage('');
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans">
      
      {/* Campaign Header Ribbon */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition-colors text-xs font-bold uppercase tracking-wider">
            ← Operational Hub
          </Link>
          <div>
            <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Growth Operations</span>
            <h2 className="text-sm font-bold tracking-tight text-slate-800 mt-0.5">Campaign & Discount Engine</h2>
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
          Active Promos: <span className="text-emerald-600 font-bold">{coupons.filter(c => c.status === 'active').length} Engine Slots Running</span>
        </div>
      </header>

      {/* Main Layout Splitting Grid */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-8">
        
        {/* Left Side: Campaign Coupon Creator Form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 h-fit">
          <h3 className="text-base font-black tracking-tight border-b border-slate-100 pb-2">Generate Promo Code</h3>
          <form onSubmit={handleCreateCoupon} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Discount Trigger Code</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g., PASSTHEEXAM"
                className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold uppercase outline-none focus:border-emerald-500 placeholder-slate-400 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Type</label>
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value as 'percentage' | 'fixed')}
                  className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-bold outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Flat (৳)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Worth Value</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={discountType === 'percentage' ? 'e.g., 20' : 'e.g., 500'}
                  className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold outline-none focus:border-emerald-500 placeholder-slate-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Max Usage Threshold limit</label>
              <input
                type="number"
                value={maxUsage}
                onChange={(e) => setMaxUsage(e.target.value)}
                placeholder="e.g., 1000 total redemptions"
                className="w-full bg-[#F1F5F9] border border-slate-200 rounded-xl p-3 text-xs font-semibold outline-none focus:border-emerald-500 placeholder-slate-400 transition-colors"
              />
            </div>

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3.5 rounded-xl transition-colors shadow-md shadow-emerald-600/10 uppercase tracking-wider">
              🚀 Deploy Promotional Code
            </button>
          </form>
        </div>

        {/* Right Side: Active Campaigns Metrics Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Active Marketing Ledgers</span>
            <span className="text-[10px] font-bold text-slate-400">Total Deployments: {coupons.length}</span>
          </div>

          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {coupons.map((coupon) => {
                const isExpired = coupon.status === 'expired';
                const conversionRate = Math.round((coupon.usageCount / coupon.maxUsage) * 100);

                return (
                  <motion.div
                    key={coupon.code}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`bg-white border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm group transition-all hover:border-slate-300 ${
                      isExpired ? 'opacity-60 bg-slate-50/50' : 'border-slate-200'
                    }`}
                  >
                    {/* Voucher presentation identity tag */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="bg-dashed-border font-mono text-sm font-black tracking-wider text-slate-800 bg-slate-100 border border-dashed border-slate-300 px-3 py-1 rounded-lg uppercase">
                          {coupon.code}
                        </span>
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                          isExpired ? 'bg-slate-200 text-slate-500' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {coupon.status}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-500">
                        Offers {coupon.discountType === 'percentage' ? `${coupon.value}% off` : `৳${coupon.value} flat discount`} on matching items.
                      </p>
                    </div>

                    {/* Progress tracking charts block */}
                    <div className="w-full sm:w-44 space-y-1.5 flex-shrink-0">
                      <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-500 tracking-wide uppercase">
                        <span>Redeemed</span>
                        <span>{coupon.usageCount} / {coupon.maxUsage}</span>
                      </div>
                      {/* Visual bar ledger scale */}
                      <div className="w-full h-2 bg-slate-100 border border-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${isExpired ? 'bg-slate-400' : 'bg-emerald-500'}`}
                          style={{ width: `${Math.min(conversionRate, 100)}%` }}
                        />
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}