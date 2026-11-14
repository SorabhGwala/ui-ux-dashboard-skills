import React from 'react';

export interface KPICardProps {
  label: string;
  value: string | number;
  delta?: number; // e.g. +12.4 or -3.2 (percentage or absolute)
  baseline?: string; // e.g. "vs previous 30d" or "vs $100k target"
  isLowerBetter?: boolean; // Invert polarity: true for churn, cost, latency
  rawBaseCount?: number; // If baseline count < 5, handles small-base rule
  sparklineData?: number[]; // Array of recent numeric data points
  tooltipText?: string;
  icon?: React.ReactNode;
}

export function KPICard({
  label,
  value,
  delta,
  baseline = 'vs previous period',
  isLowerBetter = false,
  rawBaseCount,
  sparklineData,
  tooltipText,
  icon,
}: KPICardProps) {
  // 1. Small Base Number Rule: If base < 5, never shout extreme percentage
  const isSmallBase = rawBaseCount !== undefined && rawBaseCount < 5;

  // 2. Metric Polarity Inversion (Lower is Better)
  const isPositiveChange = delta !== undefined && delta > 0;
  const isNegativeChange = delta !== undefined && delta < 0;

  let deltaColorClass = 'text-neutral-500 dark:text-neutral-400';
  if (delta !== undefined && delta !== 0 && !isSmallBase) {
    if (isLowerBetter) {
      deltaColorClass = isNegativeChange
        ? 'text-emerald-600 dark:text-emerald-400'
        : 'text-rose-600 dark:text-rose-400';
    } else {
      deltaColorClass = isPositiveChange
        ? 'text-emerald-600 dark:text-emerald-400'
        : 'text-rose-600 dark:text-rose-400';
    }
  }

  // 3. Render normalized SVG sparkline path
  const renderSparkline = () => {
    if (!sparklineData || sparklineData.length < 2) return null;
    const min = Math.min(...sparklineData);
    const max = Math.max(...sparklineData);
    const range = max - min || 1;
    const width = 120;
    const height = 28;

    const points = sparklineData
      .map((val, idx) => {
        const x = (idx / (sparklineData.length - 1)) * width;
        const y = height - ((val - min) / range) * (height - 4) - 2;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');

    return (
      <svg
        className="w-28 h-7 overflow-visible stroke-neutral-400 dark:stroke-neutral-500 fill-none"
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
      >
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  return (
    <div
      className="group relative flex flex-col justify-between p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700"
      title={tooltipText}
    >
      {/* Header: Label & Optional Icon */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 select-none">
          {label}
        </span>
        {icon && (
          <div className="text-neutral-400 dark:text-neutral-500" aria-hidden="true">
            {icon}
          </div>
        )}
      </div>

      {/* Main Metric Figure */}
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <span className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 font-mono tabular-nums">
          {value}
        </span>
        {sparklineData && <div className="shrink-0">{renderSparkline()}</div>}
      </div>

      {/* Delta & Honest Baseline */}
      <div className="mt-3 flex items-center gap-1.5 text-xs">
        {isSmallBase ? (
          <span className="text-neutral-500 dark:text-neutral-400 font-medium">
            was {rawBaseCount} last period
          </span>
        ) : delta !== undefined ? (
          <span className={`inline-flex items-center font-medium font-mono tabular-nums ${deltaColorClass}`}>
            {isPositiveChange ? '▲ +' : isNegativeChange ? '▼ ' : ''}
            {Math.abs(delta)}%
          </span>
        ) : null}

        <span className="text-neutral-400 dark:text-neutral-500 truncate">
          {baseline}
        </span>
      </div>
    </div>
  );
}
