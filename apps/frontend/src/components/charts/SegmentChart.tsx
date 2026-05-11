"use client";

import { useCustomerStore } from "@/lib/store";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#a855f7",
  "#3b82f6",
  "#ef4444",
  "#22c55e",
];

export default function SegmentChart() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const segmentCounts: Record<string, number> = {};

  customers.forEach((customer: any) => {

    const segment = customer.segment || "Unknown";

    segmentCounts[segment] =
      (segmentCounts[segment] || 0) + 1;
  });

  const data = Object.entries(segmentCounts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[400px] mt-10">

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

      {customers.length === 0 ? (

        <div className="h-[250px] flex items-center justify-center text-zinc-500 border border-dashed border-white/10 rounded-2xl">

          Upload customer data to generate analytics

        </div>

      ) : (

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

      )}

    </div>
  );
}