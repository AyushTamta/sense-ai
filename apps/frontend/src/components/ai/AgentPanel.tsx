"use client";

import { motion } from "framer-motion";

import { useCustomerStore } from "@/lib/store";

export default function AgentPanel() {

  const agentStatuses =
    useCustomerStore(
      (state) =>
        state.agentStatuses
    );

  return (

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {agentStatuses.length === 0 ? (

        <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-64 flex items-center justify-center text-zinc-500">

          Upload a dataset to activate AI agents

        </div>

      ) : (

        agentStatuses.map((agent) => (

          <motion.div
            key={agent.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {agent.name}
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Autonomous AI System
                </p>

              </div>

              <div className="flex items-center gap-2">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <span className="text-green-400 text-sm">
                  {agent.status}
                </span>

              </div>

            </div>

            {/* TASK */}
            <div className="mt-8">

              <p className="text-zinc-500 text-sm">
                Current Task
              </p>

              <p className="text-white mt-2 text-lg">
                {agent.task}
              </p>

            </div>

            {/* CONFIDENCE */}
            <div className="mt-6">

              <div className="flex items-center justify-between mb-2">

                <p className="text-zinc-500 text-sm">
                  Confidence
                </p>

                <p className="text-purple-300 text-sm">
                  {agent.confidence}%
                </p>

              </div>

              <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${agent.confidence}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />

              </div>

            </div>

            {/* UPDATE */}
            <div className="mt-6 bg-black/20 border border-white/10 rounded-2xl p-4">

              <p className="text-zinc-400 text-sm">
                Last Update
              </p>

              <p className="text-white mt-2">
                {agent.update}
              </p>

            </div>

          </motion.div>

        ))

      )}

    </div>

  );
}