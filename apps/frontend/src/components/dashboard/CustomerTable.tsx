"use client";

import { useCustomerStore } from "@/lib/store";

export default function CustomerTable() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Customer Intelligence
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            AI-powered customer behavior insights
          </p>
        </div>

        <div className="text-green-400 text-sm">
          ● Live Dataset
        </div>

      </div>

      {/* Empty State */}
      {customers.length === 0 ? (

        <div className="h-52 flex items-center justify-center text-zinc-500 border border-dashed border-white/10 rounded-2xl">

          Upload a customer dataset to begin analytics

        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="text-left border-b border-white/10 text-zinc-400 text-sm">

                <th className="pb-4">Customer</th>
                <th className="pb-4">Segment</th>
                <th className="pb-4">Churn Risk</th>
                <th className="pb-4">Revenue</th>

              </tr>

            </thead>

            <tbody>

              {customers.map((customer: any, index: number) => (

                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  <td className="py-5 text-white font-medium">
                    {customer.customer_name}
                  </td>

                  <td className="py-5">

                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {customer.segment}
                    </span>

                  </td>

                  <td className="py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        customer.churn_risk === "High"
                          ? "bg-red-500/20 text-red-300"
                          : customer.churn_risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {customer.churn_risk}
                    </span>

                  </td>

                  <td className="py-5 text-white">
                    ${customer.total_spent}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}