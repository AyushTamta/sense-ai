"use client";

import { useCustomerStore } from "@/lib/store";

export default function InsightEngine() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const highRiskCustomers = customers.filter(
    (customer: any) =>
      customer.churn_risk === "High"
  ).length;

  const vipCustomers = customers.filter(
    (customer: any) =>
      customer.segment === "VIP"
  ).length;

  const totalRevenue = customers.reduce(
    (acc: number, customer: any) =>
      acc + Number(customer.total_spent || 0),
    0
  );

  const vipRevenue = customers
    .filter((customer: any) =>
      customer.segment === "VIP"
    )
    .reduce(
      (acc: number, customer: any) =>
        acc + Number(customer.total_spent || 0),
      0
    );

  const vipContribution =
    totalRevenue > 0
      ? ((vipRevenue / totalRevenue) * 100).toFixed(1)
      : 0;

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            AI Insight Engine
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Autonomous customer intelligence analysis
          </p>
        </div>

        <div className="text-purple-400 text-sm">
          AI Analysis Active
        </div>

      </div>

      {customers.length === 0 ? (

        <div className="h-52 flex items-center justify-center text-zinc-500 border border-dashed border-white/10 rounded-2xl">

          Upload customer data to generate AI insights

        </div>

      ) : (

        <div className="space-y-5">

          <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

            <p className="text-white font-medium">
              High-Risk Customer Detection
            </p>

            <p className="text-zinc-400 mt-2">
              AI detected{" "}
              <span className="text-red-400 font-semibold">
                {highRiskCustomers}
              </span>{" "}
              high-risk customers likely to churn.
            </p>

          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

            <p className="text-white font-medium">
              VIP Revenue Concentration
            </p>

            <p className="text-zinc-400 mt-2">
              VIP customers contribute{" "}
              <span className="text-purple-400 font-semibold">
                {vipContribution}%
              </span>{" "}
              of total platform revenue.
            </p>

          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

            <p className="text-white font-medium">
              AI Retention Recommendation
            </p>

            <p className="text-zinc-400 mt-2">
              Launch personalized retention campaigns for inactive users and offer loyalty incentives to high-value segments.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}