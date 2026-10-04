'use client';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function Button({ active = false, className = '', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        'rounded-lg px-3 py-2 text-sm font-medium transition ' +
        (active ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100') +
        ' ' + className
      }
    />
  );
}
