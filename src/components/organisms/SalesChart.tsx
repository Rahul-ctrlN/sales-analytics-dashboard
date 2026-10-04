'use client';

import {
  Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import type { ChartType, SalesRecord } from '@/types/sales';

export function SalesChart({ data, type }: { data: SalesRecord[]; type: ChartType }) {
  if (type === 'pie') {
    return (
      <div className="h-96 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={130} label>
              {data.map((entry, index) => <Cell key={entry.month} fill={['#0f172a','#334155','#475569','#64748b','#94a3b8'][index % 5]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer>
        {type === 'line' ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#0f172a" strokeWidth={3} />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#0f172a" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
