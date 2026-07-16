"use client";

import { formatTimeUntil } from "@/lib/format";

interface FreshnessRingProps {
  fraction: number; // 0..1, remaining freshness
  pickupEnd: string;
  size?: number;
}

export default function FreshnessRing({ fraction, pickupEnd, size = 56 }: FreshnessRingProps) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - fraction);

  const color = fraction > 0.5 ? "#3f7a45" : fraction > 0.2 ? "#f28f0c" : "#c2410c";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Pickup window closes in ${formatTimeUntil(pickupEnd)}`}
      title={`Pickup closes in ${formatTimeUntil(pickupEnd)}`}
    >
      <svg width={size} height={size} className="freshness-ring">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e9e5d6"
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-[9px] font-bold leading-none text-paper-800 text-center px-0.5">
        {formatTimeUntil(pickupEnd)}
      </span>
    </div>
  );
}
