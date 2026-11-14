import React from 'react';

export interface BulletGraphProps {
  label: string;
  sublabel?: string;
  actual: number;
  target: number;
  max: number;
  unit?: string;
  ranges?: [number, number, number]; // [poorMax, satisfactoryMax, goodMax]
}

export function BulletGraph({
  label,
  sublabel,
  actual,
  target,
  max,
  unit = '',
  ranges = [0.6 * max, 0.85 * max, max],
}: BulletGraphProps) {
  const actualPercent = Math.min(100, Math.max(0, (actual / max) * 100));
  const targetPercent = Math.min(100, Math.max(0, (target / max) * 100));

  const [poorMax, satisfactoryMax] = ranges;
  const poorPercent = (poorMax / max) * 100;
  const satisfactoryPercent = (satisfactoryMax / max) * 100;

  return (
    <div className="flex flex-col gap-1.5 py-2.5">
      {/* Label & Numeric Value */}
      <div className="flex items-baseline justify-between text-xs">
        <div>
          <span className="font-medium text-neutral-900 dark:text-neutral-100">{label}</span>
          {sublabel && (
            <span className="ml-1.5 text-neutral-400 dark:text-neutral-500">({sublabel})</span>
          )}
        </div>
        <div className="flex items-baseline gap-2 font-mono tabular-nums">
          <span className="font-semibold text-neutral-950 dark:text-neutral-50">
            {actual}
            {unit}
          </span>
          <span className="text-neutral-400 dark:text-neutral-500 text-[11px]">
            target: {target}
            {unit}
          </span>
        </div>
      </div>

      {/* The Bullet Bar Visual */}
      <div className="relative h-5 w-full rounded overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center">
        {/* Qualitative Background Ranges */}
        <div
          className="absolute inset-y-0 left-0 bg-neutral-200/60 dark:bg-neutral-800"
          style={{ width: `${poorPercent}%` }}
        />
        <div
          className="absolute inset-y-0 bg-neutral-200/30 dark:bg-neutral-800/50"
          style={{ left: `${poorPercent}%`, width: `${satisfactoryPercent - poorPercent}%` }}
        />

        {/* Actual Performance Bar */}
        <div
          className="absolute h-2.5 rounded-sm bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 ease-out"
          style={{ width: `${actualPercent}%` }}
        />

        {/* Target Tick Marker */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-rose-500 dark:bg-rose-400 z-10"
          style={{ left: `${targetPercent}%` }}
          title={`Target: ${target}${unit}`}
        />
      </div>
    </div>
  );
}
