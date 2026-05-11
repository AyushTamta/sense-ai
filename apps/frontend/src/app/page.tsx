"use client";

import { useCustomerStore } from "@/lib/store";

import DataUpload from "@/components/dashboard/DataUpload";
import KPISection from "@/components/dashboard/KPISection";
import RevenueChart from "@/components/charts/RevenueChart";
import SegmentChart from "@/components/charts/SegmentChart";
import CustomerTable from "@/components/dashboard/CustomerTable";

import AgentPanel from "@/components/ai/AgentPanel";
import InsightEngine from "@/components/ai/InsightEngine";
import RFMEngine from "@/components/ai/RFMEngine";
import MLInsights from "@/components/ai/MLInsights";
import SimulationPanel from "@/components/ai/SimulationPanel";
import LiveAgentFlow from "@/components/ai/LiveAgentFlow";
import AIAnalystChat from "@/components/ai/AIAnalystChat";
import ExecutiveInsights from "@/components/ai/ExecutiveInsights";

import {
  LayoutDashboard,
  Upload,
  BrainCircuit,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const navItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    id: "overview",
  },

  {
    title: "Upload Center",
    icon: Upload,
    id: "upload",
  },

  {
    title: "AI Agents",
    icon: BrainCircuit,
    id: "agents",
  },

  {
    title: "Predictions",
    icon: BarChart3,
    id: "predictions",
  },

  {
    title: "Customers",
    icon: Users,
    id: "customers",
  },

  {
    title: "Simulations",
    icon: Sparkles,
    id: "simulations",
  },
];

export default function Home() {

  const predictions = useCustomerStore(
    (state) => state.predictions
  );

  const scrollToSection = (
    sectionId: string
  ) => {

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (

    <main className="min-h-screen bg-[#050505] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 h-screen sticky top-0 border-r border-white/10 bg-black/40 backdrop-blur-2xl p-6">

        {/* Logo */}
        <div>

          <h1 className="text-4xl font-bold tracking-tight">
            Sensa
          </h1>

          <p className="text-zinc-500 text-sm mt-2">
            AI Customer Intelligence Platform
          </p>

        </div>

        {/* Status */}
        <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

          <p className="text-green-400 text-sm font-medium">
            ● AI Systems Operational
          </p>

          <p className="text-zinc-500 text-xs mt-1">
            ML + Agentic Intelligence Active
          </p>

        </div>

        {/* Navigation */}
        <div className="mt-10 space-y-3">

          {navItems.map((item, index) => {

            const Icon = item.icon;

            return (

              <button
                key={index}
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/5 transition border border-transparent hover:border-white/10"
              >

                <Icon size={20} />

                {item.title}

              </button>

            );
          })}

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 overflow-y-auto p-10">

        {/* HERO */}
        <section id="overview">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-5xl font-bold leading-tight">
                Autonomous AI
                <br />
                Intelligence Platform
              </h2>

              <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
                Predictive customer intelligence powered by
                machine learning, analytics, and agentic AI workflows.
              </p>

            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 px-6 py-4 rounded-2xl">

              <p className="text-purple-300 font-medium">
                AI Agents Running
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                Real-time analytics orchestration
              </p>

            </div>

          </div>

          {/* KPI */}
          <KPISection />

        </section>

        {/* UPLOAD */}
        <section
          id="upload"
          className="mt-14"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Upload Intelligence Data
            </h3>

            <p className="text-zinc-500 mt-2">
              Upload customer datasets to activate AI analytics workflows.
            </p>

          </div>

          <DataUpload />

        </section>

        {/* AI AGENTS */}
        <section
          id="agents"
          className="mt-14"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Agentic AI Command Center
            </h3>

            <p className="text-zinc-500 mt-2">
              Autonomous AI systems orchestrating customer intelligence.
            </p>

          </div>

          <AgentPanel />

          <LiveAgentFlow />

          <InsightEngine />

        </section>

        {/* PREDICTIONS */}
        <section
          id="predictions"
          className="mt-14"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Predictive Intelligence
            </h3>

            <p className="text-zinc-500 mt-2">
              Machine learning powered churn prediction and customer scoring.
            </p>

          </div>

          <MLInsights predictions={predictions} />

          <ExecutiveInsights />

          <RFMEngine />

          <AIAnalystChat />

        </section>

        {/* ANALYTICS */}
        <section
          id="customers"
          className="mt-14"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Customer Analytics
            </h3>

            <p className="text-zinc-500 mt-2">
              Revenue intelligence, segmentation, and customer behavior analysis.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <RevenueChart />

            <SegmentChart />

          </div>

          <CustomerTable />

        </section>

        {/* SIMULATION */}
        <section
          id="simulations"
          className="mt-14 mb-20"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              AI Strategy Simulations
            </h3>

            <p className="text-zinc-500 mt-2">
              Simulate retention campaigns and strategic business decisions.
            </p>

          </div>

          <SimulationPanel />

        </section>

      </section>

    </main>
  );
}