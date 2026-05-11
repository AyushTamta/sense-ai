"use client";

import { useCustomerStore } from "@/lib/store";

export default function KPISection() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const totalCustomers = customers.length;

  const totalRevenue = customers.reduce(
    (acc: number, customer: any) =>
      acc + Number(customer.total_spent || 0),
    0
  );

  const highRiskCustomers = customers.filter(
    (customer: any) =>
      customer.churn_risk === "High"
  ).length;

  const vipCustomers = customers.filter(
    (customer: any) =>
      customer.segment === "VIP"
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      color: "text-white",
    },

    {
      title: "Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      color: "text-blue-400",
    },

    {
      title: "High Risk Users",
      value: highRiskCustomers,
      color: "text-red-400",
    },

    {
      title: "VIP Customers",
      value: vipCustomers,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-10">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition"
        >

          <p className="text-zinc-400 text-sm">
            {card.title}
          </p>

          <h3 className={`text-3xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </h3>

        </div>

      ))}

    </div>
  );
}