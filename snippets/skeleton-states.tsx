import React from 'react';

// 1. KPI Card Skeleton (Eliminates CLS)
export function KPICardSkeleton() {
  return (
    <div className="flex flex-col justify-between p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 animate-pulse">
      <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
      <div className="mt-4 flex items-baseline justify-between">
        <div className="h-8 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
        <div className="h-6 w-24 bg-neutral-100 dark:bg-neutral-800/60 rounded"></div>
      </div>
      <div className="mt-4 h-3 w-40 bg-neutral-100 dark:bg-neutral-800/60 rounded"></div>
    </div>
  );
}

// 2. Data Table Skeleton
export function DataTableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden animate-pulse">
      <div className="h-10 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800"></div>
      <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60 bg-white dark:bg-neutral-950">
        {Array.from({ length: rows }).map((_, rIdx) => (
          <div key={rIdx} className="flex items-center justify-between p-4 gap-4">
            {Array.from({ length: cols }).map((_, cIdx) => (
              <div
                key={cIdx}
                className="h-3 bg-neutral-200/70 dark:bg-neutral-800/70 rounded"
                style={{ width: `${Math.max(40, 90 - cIdx * 15)}px` }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Localized Error Containment Card
export function LocalizedErrorCard({
  title = 'Failed to load component data',
  message = 'A temporary network error prevented data from loading.',
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20">
      <div className="w-9 h-9 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h4 className="mt-2.5 text-xs font-semibold text-rose-900 dark:text-rose-300">{title}</h4>
      <p className="mt-1 text-[11px] text-rose-700/80 dark:text-rose-400/80 max-w-xs">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-sm hover:bg-rose-50 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 active:scale-[0.98] transition-all"
        >
          Retry request
        </button>
      )}
    </div>
  );
}

// 4. Honest Empty State
export function HonestEmptyState({
  title = 'No records in this timeframe',
  description = 'Try expanding your filter date range or resetting active search parameters.',
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 flex items-center justify-center">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <h4 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">{title}</h4>
      <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 max-w-sm">{description}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow hover:bg-neutral-800 dark:hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98] transition-all"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
