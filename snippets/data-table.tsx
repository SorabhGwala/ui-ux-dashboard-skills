import React from 'react';

export interface ColumnDef<T> {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  render?: (row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  rowKey: (row: T) => string;
  density?: 'compact' | 'standard';
  emptyMessage?: string;
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  density = 'standard',
  emptyMessage = 'No records found matching criteria',
}: DataTableProps<T>) {
  const pyClass = density === 'compact' ? 'py-2 px-3' : 'py-3.5 px-4';

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
      <table className="w-full text-left border-collapse text-xs">
        {/* Sticky Header with Backdrop Blur */}
        <thead className="sticky top-0 z-10 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
          <tr>
            {columns.map((col) => {
              const alignClass =
                col.align === 'right'
                  ? 'text-right'
                  : col.align === 'center'
                  ? 'text-center'
                  : 'text-left';

              return (
                <th
                  key={col.key}
                  scope="col"
                  className={`${pyClass} ${alignClass} font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 select-none`}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70 bg-white dark:bg-neutral-950 font-sans">
          {data.map((row) => (
            <tr
              key={rowKey(row)}
              className="transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-900/50"
            >
              {columns.map((col) => {
                const alignClass =
                  col.align === 'right'
                    ? 'text-right font-mono tabular-nums'
                    : col.align === 'center'
                    ? 'text-center'
                    : 'text-left';

                return (
                  <td
                    key={col.key}
                    className={`${pyClass} ${alignClass} text-neutral-900 dark:text-neutral-100 whitespace-nowrap`}
                  >
                    {col.render ? col.render(row) : (row as Record<string, unknown>)[col.key] as React.ReactNode}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Reusable Helper for Soft Status Badges
export function StatusBadge({
  status,
  variant,
}: {
  status: string;
  variant: 'success' | 'warning' | 'error' | 'neutral';
}) {
  const styles = {
    success:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 dot-bg-emerald-500',
    warning:
      'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800 dot-bg-amber-500',
    error:
      'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800 dot-bg-rose-500',
    neutral:
      'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 dot-bg-neutral-400',
  };

  const dotColors = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
    neutral: 'bg-neutral-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border ${styles[variant]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} aria-hidden="true" />
      {status}
    </span>
  );
}
