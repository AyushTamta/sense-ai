"use client";

import { motion } from "framer-motion";

import RevenueChart from "@/components/charts/RevenueChart";
import SegmentChart from "@/components/charts/SegmentChart";

import SimulationPanel from "@/components/ai/SimulationPanel";
import AgentPanel from "@/components/ai/AgentPanel";
import InsightEngine from "@/components/ai/InsightEngine";
import RFMEngine from "@/components/ai/RFMEngine";
import MLInsights from "@/components/ai/MLInsights";

import CustomerTable from "@/components/dashboard/CustomerTable";
import DataUpload from "@/components/dashboard/DataUpload";
import KPISection from "@/components/dashboard/KPISection";

import { useCustomerStore } from "@/lib/store";

import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  BarChart3,
  Sparkles,
  FileText,
} from "lucide-react";

export default function Home() {

  const predictions = useCustomerStore(
    (state) => state.predictions
  );

  return (

    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="flex relative z-10">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-white/10 p-6 backdrop-blur-xl">

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
        <section className="flex-1 p-8 overflow-y-auto">

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

          {/* Dynamic KPI Section */}
          <KPISection />

          {/* Top Grid */}
          <div className="grid grid-cols-3 gap-6 mt-10">

            {/* AI Command Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >

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

            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >

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
                    Risk patterns detected
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

            </motion.div>

          </div>

          {/* Revenue */}
          <RevenueChart />

          {/* Segment Chart */}
          <SegmentChart />

          {/* Customer Table */}
          <CustomerTable />

          {/* AI Agents */}
          <AgentPanel />

          {/* Upload */}
          <DataUpload />

          {/* Insight Engine */}
          <InsightEngine />

          {/* RFM Engine */}
          <RFMEngine />

          {/* ML Intelligence */}
          <MLInsights predictions={predictions} />

          {/* Simulation */}
          <SimulationPanel />

        </section>

      </div>

    </main>
  );
}