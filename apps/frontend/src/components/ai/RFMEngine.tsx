"use client";

import { useCustomerStore } from "@/lib/store";

export default function RFMEngine() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const calculateRecencyScore = (
    days: number
  ) => {

    if (days <= 10) return 5;
    if (days <= 20) return 4;
    if (days <= 40) return 3;
    if (days <= 60) return 2;

    return 1;
  };

  const calculateFrequencyScore = (
    frequency: number
  ) => {

    if (frequency >= 20) return 5;
    if (frequency >= 15) return 4;
    if (frequency >= 10) return 3;
    if (frequency >= 5) return 2;

    return 1;
  };

  const calculateMonetaryScore = (
    spent: number
  ) => {

    if (spent >= 10000) return 5;
    if (spent >= 7000) return 4;
    if (spent >= 4000) return 3;
    if (spent >= 2000) return 2;

    return 1;
  };

  const getCustomerStatus = (
    r: number,
    f: number,
    m: number
  ) => {

    const total = r + f + m;

    if (total >= 13) return "VIP Elite";
    if (total >= 10) return "Loyal Customer";
    if (total >= 7) return "Potential Growth";

    return "At Risk";
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            RFM Intelligence Engine
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Recency • Frequency • Monetary customer scoring
          </p>
        </div>

        <div className="text-green-400 text-sm">
          AI Segmentation Active
        </div>

      </div>

      {customers.length === 0 ? (

        <div className="h-52 flex items-center justify-center text-zinc-500 border border-dashed border-white/10 rounded-2xl">

          Upload customer data to generate RFM scoring

        </div>

      ) : (

        <div className="space-y-5">

          {customers.slice(0, 5).map(
            (customer: any, index: number) => {

              const r = calculateRecencyScore(
                Number(customer.last_purchase_days)
              );

              const f = calculateFrequencyScore(
                Number(customer.order_frequency)
              );

              const m = calculateMonetaryScore(
                Number(customer.total_spent)
              );

              const status = getCustomerStatus(
                r,
                f,
                m
              );

              return (

                <div
                  key={index}
                  className="bg-black/30 border border-white/10 rounded-2xl p-5"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="text-white font-semibold">
                        {customer.customer_name}
                      </h4>

                      <p className="text-zinc-400 text-sm mt-1">
                        {status}
                      </p>

                    </div>

                    <div className="flex gap-3">

                      <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl">
                        R: {r}
                      </div>

                      <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-xl">
                        F: {f}
                      </div>

                      <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl">
                        M: {m}
                      </div>

                    </div>

                  </div>

                </div>

              );
            }
          )}

        </div>

      )}

    </div>
  );
}