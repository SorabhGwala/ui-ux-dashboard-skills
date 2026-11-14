import React, { useState } from 'react';

export interface DateRangeFilterProps {
  presets?: string[];
  activePreset?: string;
  onPresetChange?: (preset: string) => void;
  lastUpdatedText?: string;
  onRefresh?: () => void;
}

export function DateRangeFilter({
  presets = ['Today', '7D', '30D', '90D', 'YTD'],
  activePreset: controlledPreset,
  onPresetChange,
  lastUpdatedText = 'Updated just now',
  onRefresh,
}: DateRangeFilterProps) {
  const [internalPreset, setInternalPreset] = useState(presets[1] || '7D');
  const active = controlledPreset || internalPreset;

  const handleSelect = (preset: string) => {
    setInternalPreset(preset);
    onPresetChange?.(preset);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-b border-neutral-200 dark:border-neutral-800">
      {/* Segmented Preset Pills */}
      <div
        role="radiogroup"
        aria-label="Select date range"
        className="inline-flex items-center p-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/50"
      >
        {presets.map((preset) => {
          const isSelected = active === preset;
          return (
            <button
              key={preset}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(preset)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                isSelected
                  ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-neutral-50 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {preset}
            </button>
          );
        })}
      </div>

      {/* Right Controls: Freshness Indicator & Refresh */}
      <div className="flex items-center gap-3">
        {/* Live Freshness Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px]">{lastUpdatedText}</span>
        </div>

        {/* Refresh Action Button */}
        {onRefresh && (
          <button
            type="button"
            onClick={onRefresh}
            aria-label="Refresh live data"
            className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.96] transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
