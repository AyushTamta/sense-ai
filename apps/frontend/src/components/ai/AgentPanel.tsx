"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Segment Agent",
    task: "Analyzing customer cohorts and RFM signals",
    color: "bg-purple-500",
  },

  {
    name: "Forecast Agent",
    task: "Generating churn probability predictions",
    color: "bg-blue-500",
  },

  {
    name: "Strategy Agent",
    task: "Evaluating retention campaign performance",
    color: "bg-pink-500",
  },

  {
    name: "Executive Agent",
    task: "Preparing stakeholder business insights",
    color: "bg-green-500",
  },
];

export default function AgentPanel() {

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h3 className="text-2xl font-semibold text-white">
            Autonomous AI Agents
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Multi-agent intelligence orchestration
          </p>
        </div>

        <div className="text-green-400 text-sm">
          ● Agents Running
        </div>

      </div>

      {/* Agents */}
      <div className="space-y-5">

        {agents.map((agent, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/30 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`w-3 h-3 rounded-full animate-pulse ${agent.color}`}
                />

                <div>

                  <h4 className="text-white font-semibold">
                    {agent.name}
                  </h4>

                  <p className="text-zinc-400 text-sm mt-1">
                    {agent.task}
                  </p>

                </div>

              </div>

              <div className="text-green-400 text-sm">
                Active
              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}