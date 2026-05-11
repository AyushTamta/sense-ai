"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "VIP Customers", value: 2431 },
  { name: "Loyal Customers", value: 12320 },
  { name: "At-Risk Customers", value: 8102 },
  { name: "New Customers", value: 5210 },
];

const COLORS = [
  "#a855f7",
  "#3b82f6",
  "#ef4444",
  "#22c55e",
];

export default function SegmentChart() {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[400px]">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h3 className="text-xl font-semibold text-white">
            Customer Segments
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            AI-powered RFM segmentation analysis
          </p>
        </div>

        <div className="text-purple-400 text-sm">
          Live Analysis
        </div>

      </div>

      <ResponsiveContainer width="100%" height="80%">

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}