"use client";

import { useCustomerStore } from "@/lib/store";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const data = customers.map(
    (customer: any, index: number) => ({
      name: customer.customer_name,
      revenue: Number(customer.total_spent || 0),
    })
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-[350px] mt-10">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h3 className="text-xl font-semibold text-white">
            Revenue Intelligence
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Dynamic revenue insights from uploaded customer data
          </p>
        </div>

        <div className="text-green-400 text-sm">
          Live Forecast
        </div>

      </div>

      {customers.length === 0 ? (

        <div className="h-[220px] flex items-center justify-center text-zinc-500 border border-dashed border-white/10 rounded-2xl">

          Upload customer data to generate revenue analytics

        </div>

      ) : (

        <ResponsiveContainer width="100%" height="80%">

          <LineChart data={data}>

            <XAxis
              dataKey="name"
              stroke="#71717a"
              hide
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

      )}

    </div>
  );
}