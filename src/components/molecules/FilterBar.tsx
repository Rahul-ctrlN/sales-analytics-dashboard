'use client';

import type { ChartType, SalesYear } from '@/types/sales';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { Select } from '@/components/atoms/Select';

type Props = {
  year: SalesYear;
  threshold: number;
  chartType: ChartType;
  onYearChange: (value: SalesYear) => void;
  onThresholdChange: (value: number) => void;
  onChartTypeChange: (value: ChartType) => void;
};

export function FilterBar({
  year,
  threshold,
  chartType,
  onYearChange,
  onThresholdChange,
  onChartTypeChange,
}: Props) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-card md:flex-row md:items-end md:justify-between">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Sales year</Label>
          <Select
            value={year}
            onChange={(event) => onYearChange(Number(event.target.value) as SalesYear)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </Select>
        </div>
        <div>
          <Label>Sales threshold</Label>
          <Input
            type="number"
            min="0"
            step="1000"
            value={threshold}
            onChange={(event) => onThresholdChange(Number(event.target.value) || 0)}
          />
        </div>
      </div>

      <div>
        <Label>Chart type</Label>
        <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
          {(['bar', 'line', 'pie'] as ChartType[]).map((type) => (
            <Button
              key={type}
              active={chartType === type}
              onClick={() => onChartTypeChange(type)}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
