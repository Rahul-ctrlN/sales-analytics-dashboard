export type SalesYear = 2022 | 2023 | 2024;

export type SalesRecord = {
  month: string;
  sales: number;
};

export type SalesDataset = Record<SalesYear, SalesRecord[]>;

export type ChartType = 'bar' | 'line' | 'pie';
