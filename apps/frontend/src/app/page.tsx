"use client";

import { motion } from "framer-motion";
import RevenueChart from "@/components/charts/RevenueChart";
import SimulationPanel from "@/components/ai/SimulationPanel";
import SegmentChart from "@/components/charts/SegmentChart";
import CustomerTable from "@/components/dashboard/CustomerTable";
import AgentPanel from "@/components/ai/AgentPanel";
import DataUpload from "@/components/dashboard/DataUpload";

import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  BarChart3,
  Sparkles,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="flex relative z-10">

        {/* Sidebar */}
        <aside className="w-64 h-screen border-r border-white/10 p-6 backdrop-blur-xl">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Sensa
            </h1>

            <p className="text-zinc-500 text-sm mt-1">
              AI Intelligence Platform
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 space-y-3">

            <div className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white">
              <LayoutDashboard size={18} />
              Dashboard
            </div>

            <div className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer px-4 py-3 rounded-xl">
              <Users size={18} />
              Customers
            </div>

            <div className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer px-4 py-3 rounded-xl">
              <BarChart3 size={18} />
              Predictions
            </div>

            <div className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer px-4 py-3 rounded-xl">
              <BrainCircuit size={18} />
              AI Agents
            </div>

            <div className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer px-4 py-3 rounded-xl">
              <Sparkles size={18} />
              Simulations
            </div>

            <div className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-white/5 transition cursor-pointer px-4 py-3 rounded-xl">
              <FileText size={18} />
              Reports
            </div>

          </div>

        </aside>

        {/* Main Dashboard */}
        <section className="flex-1 p-8">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-4xl font-bold">
                AI Intelligence Dashboard
              </h2>

              <p className="text-zinc-400 mt-2">
                Autonomous predictive customer intelligence platform
              </p>
            </div>

            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl border border-purple-500/30 backdrop-blur-md">
              AI Agents Active
            </div>

          </div>

          {/* KPI Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-4 gap-6 mt-10"
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition">

              <p className="text-zinc-400 text-sm">
                Total Customers
              </p>

              <h3 className="text-3xl font-bold mt-2">
                128K
              </h3>

              <p className="text-green-400 text-sm mt-2">
                +12.5% this month
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition">

              <p className="text-zinc-400 text-sm">
                Churn Risk
              </p>

              <h3 className="text-3xl font-bold mt-2 text-red-400">
                12.4%
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                AI predicted risk
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">

              <p className="text-zinc-400 text-sm">
                Revenue Forecast
              </p>

              <h3 className="text-3xl font-bold mt-2">
                $84K
              </h3>

              <p className="text-blue-400 text-sm mt-2">
                Next 30 days
              </p>

            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition">

              <p className="text-zinc-400 text-sm">
                AI Recommendations
              </p>

              <h3 className="text-3xl font-bold mt-2 text-green-400">
                24
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Active insights
              </p>

            </div>

          </motion.div>

          {/* Dashboard Grid */}



          <div className="grid grid-cols-3 gap-6 mt-10">

            {/* AI Command Center */}
            <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold">
                  AI Command Center
                </h3>

                <div className="text-green-400 text-sm">
                  ● Live Agents
                </div>

              </div>

              <div className="mt-6 space-y-4 text-zinc-300">

                <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/20 transition">
                  ✓ Segment Agent analyzing high-value customers
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition">
                  ✓ Forecast Agent predicting churn probability
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-pink-500/20 transition">
                  ✓ Strategy Agent simulating retention campaigns
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-green-500/20 transition">
                  ✓ Executive Agent generating business insights
                </div>

              </div>

            </div>

            {/* AI Insights */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                AI Insights
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-zinc-400 text-sm">
                    High Value Segment
                  </p>

                  <p className="text-lg font-semibold mt-1">
                    VIP Customers +18%
                  </p>
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">
                    Churn Alert
                  </p>

                  <p className="text-lg font-semibold mt-1 text-red-400">
                    342 users at risk
                  </p>
                </div>

                <div>
                  <p className="text-zinc-400 text-sm">
                    Recommended Action
                  </p>

                  <p className="text-lg font-semibold mt-1 text-purple-300">
                    Launch retention rewards
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-10">
  <RevenueChart />
  <div className="mt-10">
  <SegmentChart />
  <CustomerTable />
  <AgentPanel />
  <DataUpload />
</div>
  <SimulationPanel />
</div>

        </section>

      </div>

    </main>
  );
}