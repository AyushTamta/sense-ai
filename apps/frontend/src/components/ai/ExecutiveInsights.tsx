"use client";

import { useCustomerStore } from "@/lib/store";

export default function ExecutiveInsights() {

  const executiveInsights =
    useCustomerStore(
      (state) =>
        state.executiveInsights
    );

  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h3 className="text-2xl font-bold text-white">
            Executive Intelligence
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Autonomous AI-generated business insights
          </p>

        </div>

        <div className="text-green-400 text-sm">
          ● Executive AI Active
        </div>

      </div>

      {executiveInsights.length === 0 ? (

        <div className="h-52 flex items-center justify-center border border-dashed border-white/10 rounded-2xl text-zinc-500">

          Upload a dataset to generate executive intelligence

        </div>

      ) : (

        <div className="space-y-5">

          {executiveInsights.map(
            (insight) => (

              <div
                key={insight.id}
                className="bg-black/30 border border-white/10 rounded-2xl p-5"
              >

                <h4 className="text-white font-semibold text-lg">
                  {insight.title}
                </h4>

                <p className="text-zinc-400 mt-2 leading-relaxed">
                  {insight.description}
                </p>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}