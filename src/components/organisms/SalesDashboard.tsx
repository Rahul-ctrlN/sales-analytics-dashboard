'use client';

import { useMemo, useState } from 'react';
import { salesData } from '@/data/sales';
import type { ChartType, SalesYear } from '@/types/sales';
import { FilterBar } from '@/components/molecules/FilterBar';
import { StatCard } from '@/components/molecules/StatCard';
import { SalesChart } from './SalesChart';

export default function SalesDashboard() {
  const [year, setYear] = useState<SalesYear>(2024);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] = useState<ChartType>('bar');

  const filtered = useMemo(() => salesData[year].filter((item) => item.sales >= threshold), [year, threshold]);
  const total = filtered.reduce((sum, item) => sum + item.sales, 0);
  const average = filtered.length ? total / filtered.length : 0;
  const best = filtered.length ? filtered.reduce((a, b) => (a.sales > b.sales ? a : b)) : null;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Sales Analytics</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Sales Dashboard</h1>
          <p className="mt-2 text-slate-500">Analyze monthly sales for 2022, 2023 and 2024.</p>
        </div>

        <FilterBar
          year={year}
          threshold={threshold}
          chartType={chartType}
          onYearChange={setYear}
          onThresholdChange={setThreshold}
          onChartTypeChange={setChartType}
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <StatCard title="Total Sales" value={total.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} />
          <StatCard title="Average Monthly Sales" value={average.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} />
          <StatCard title="Best Month" value={best ? `${best.month} — $${best.sales.toLocaleString()}` : 'No matching data'} />
        </div>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-card">
          <h2 className="mb-5 text-lg font-semibold">Sales by Month — {year}</h2>
          {filtered.length ? <SalesChart data={filtered} type={chartType} /> : (
            <div className="flex h-80 items-center justify-center text-slate-500">No sales match the selected threshold.</div>
          )}
        </section>

        <section className="mt-6 rounded-2xl bg-white p-5 shadow-card">
          <h2 className="text-lg font-semibold">Future Enhancements</h2>
          <p className="mt-2 text-sm text-slate-500">Connect a real sales API, add advanced filters, export reports, and support more date ranges.</p>
        </section>
      </div>
    </main>
  );
}
