// src/app/dashboard/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRootRouterPage() {
  const router = useRouter();

  useEffect(() => {
    const simulatedSession = {
      isAuthenticated: true,
      role: 'student' as 'student' | 'teacher' | 'manager' | 'admin',
    };

    if (simulatedSession.isAuthenticated) {
      router.replace(`/dashboard/${simulatedSession.role}`);
    } else {
      router.replace('/');
    }
  }, [router]);

  return (
    <div className="flex-1 min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#F8FAFC]">
      <div className="flex flex-col items-center gap-4 text-center p-6">
        <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-emerald-600 animate-spin" />
        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Authenticating Route Node...</p>
      </div>
    </div>
  );
}