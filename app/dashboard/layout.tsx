// src/app/dashboard/layout.tsx
'use client';

import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] antialiased flex flex-col">
      {children}
    </div>
  );
}