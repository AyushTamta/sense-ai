"use client";

const customers = [
  {
    name: "Olivia Carter",
    segment: "VIP",
    churn: "Low",
    revenue: "$12,400",
    insight: "High retention probability",
  },

  {
    name: "Ethan Walker",
    segment: "At-Risk",
    churn: "High",
    revenue: "$4,120",
    insight: "Retention campaign recommended",
  },

  {
    name: "Sophia Bennett",
    segment: "Loyal",
    churn: "Medium",
    revenue: "$8,940",
    insight: "Upsell opportunity detected",
  },

  {
    name: "Noah Thompson",
    segment: "New",
    churn: "Low",
    revenue: "$1,240",
    insight: "Onboarding sequence active",
  },
];

export default function CustomerTable() {

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
          ● Live Data
        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-white/10 text-zinc-400 text-sm">

              <th className="pb-4">Customer</th>
              <th className="pb-4">Segment</th>
              <th className="pb-4">Churn Risk</th>
              <th className="pb-4">Revenue</th>
              <th className="pb-4">AI Insight</th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer, index) => (

              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="py-5 text-white font-medium">
                  {customer.name}
                </td>

                <td className="py-5">

                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {customer.segment}
                  </span>

                </td>

                <td className="py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      customer.churn === "High"
                        ? "bg-red-500/20 text-red-300"
                        : customer.churn === "Medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {customer.churn}
                  </span>

                </td>

                <td className="py-5 text-white">
                  {customer.revenue}
                </td>

                <td className="py-5 text-zinc-300">
                  {customer.insight}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}