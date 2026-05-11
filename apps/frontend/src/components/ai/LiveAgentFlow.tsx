"use client";

import { motion } from "framer-motion";

import { useCustomerStore } from "@/lib/store";

export default function LiveAgentFlow() {

  const agentSteps = useCustomerStore(
    (state) => state.agentSteps
  );

  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h3 className="text-2xl font-semibold text-white">
            Live AI Orchestration
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Autonomous multi-agent intelligence workflow
          </p>

        </div>

        <div className="text-green-400 text-sm">
          ● Real-Time Execution
        </div>

      </div>

      {agentSteps.length === 0 ? (

        <div className="h-52 flex items-center justify-center border border-dashed border-white/10 rounded-2xl text-zinc-500">

          Upload a dataset to activate AI workflows

        </div>

      ) : (

        <div className="space-y-5">

          {agentSteps.map((step) => (

            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="bg-black/30 border border-white/10 rounded-2xl p-5 flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-3 h-3 rounded-full ${
                    step.completed
                      ? "bg-green-400 animate-pulse"
                      : "bg-yellow-400 animate-pulse"
                  }`}
                />

                <p className="text-white">
                  {step.label}
                </p>

              </div>

              <div
                className={`text-sm ${
                  step.completed
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >

                {step.completed
                  ? "Completed"
                  : "Running..."}

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </div>
  );
}