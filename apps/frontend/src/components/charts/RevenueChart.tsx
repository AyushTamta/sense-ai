"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 2800 },
  { month: "Apr", revenue: 4200 },
  { month: "May", revenue: 5100 },
  { month: "Jun", revenue: 6200 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[350px]">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Revenue Forecast
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            AI-powered revenue prediction
          </p>
        </div>

        <div className="text-green-400 text-sm">
          +18.2%
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>

          <XAxis
            dataKey="month"
            stroke="#71717a"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#a855f7"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}