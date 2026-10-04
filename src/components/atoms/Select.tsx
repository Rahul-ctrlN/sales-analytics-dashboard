'use client';

export function Select({ className = '', ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={
        'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400 ' +
        className
      }
    />
  );
}
