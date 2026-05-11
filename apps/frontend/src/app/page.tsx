"use client";

import { useState } from "react";

import {
  LayoutDashboard,
  Upload,
  BrainCircuit,
  Users,
  BarChart3,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

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

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("overview");

  const scrollToSection = (
    sectionId: string
  ) => {

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

      setActiveSection(sectionId);

      setMobileMenu(false);
    }
  };

  return (

    <main className="min-h-screen bg-[#050505] text-white flex">

      {/* MOBILE MENU */}
      <button
        onClick={() =>
          setMobileMenu(!mobileMenu)
        }
        className="fixed top-5 left-5 z-50 lg:hidden bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-xl"
      >

        {mobileMenu ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}

      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40
          h-screen w-72
          bg-black/80 backdrop-blur-2xl
          border-r border-white/10
          p-6
          transition-transform duration-300
          ${mobileMenu
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"}
        `}
      >

        {/* LOGO */}
        <div>

          <h1 className="text-4xl font-bold">
            Sensa
          </h1>

          <p className="text-zinc-500 text-sm mt-2">
            AI Customer Intelligence Platform
          </p>

        </div>

        {/* STATUS */}
        <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

          <p className="text-green-400 text-sm font-medium">
            ● AI Systems Operational
          </p>

          <p className="text-zinc-500 text-xs mt-1">
            ML + Agentic Intelligence Active
          </p>

        </div>

        {/* NAVIGATION */}
        <div className="mt-10 space-y-3">

          {navItems.map(
            (item, index) => {

              const Icon = item.icon;

              return (

                <button
                  key={index}
                  onClick={() =>
                    scrollToSection(
                      item.id
                    )
                  }
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition border ${
                    activeSection === item.id
                      ? "bg-white/10 border-white/10 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/5 border-transparent"
                  }`}
                >

                  <Icon size={20} />

                  {item.title}

                </button>

              );
            }
          )}

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 overflow-y-auto px-5 lg:px-10 py-10">

        {/* HERO */}
        <section id="overview">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

            <div>

              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">

                Autonomous AI
                <br />
                Intelligence Platform

              </h2>

              <p className="text-zinc-400 text-lg mt-5 max-w-2xl leading-relaxed">

                Predictive customer intelligence powered by machine learning,
                analytics, and agentic AI workflows.

              </p>

            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-3xl p-6 w-full xl:w-[320px]">

              <p className="text-purple-300 font-semibold">
                AI Agents Running
              </p>

              <p className="text-zinc-500 text-sm mt-2">
                Real-time customer intelligence orchestration active
              </p>

            </div>

          </div>

          <KPISection />

        </section>

        {/* UPLOAD */}
        <section
          id="upload"
          className="mt-16"
        >

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

            <div>

              <h3 className="text-3xl font-bold">
                Upload Intelligence Dataset
              </h3>

              <p className="text-zinc-500 mt-2">
                Upload customer datasets to activate AI workflows
              </p>

            </div>

            {/* DEMO CSV */}
            <a
              href="/customer_data.csv"
              download
              className="bg-purple-500 hover:bg-purple-600 transition px-6 py-4 rounded-2xl font-medium text-center"
            >

              Download Demo CSV

            </a>

          </div>

          <DataUpload />

        </section>

        {/* AGENTS */}
        <section
          id="agents"
          className="mt-16"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Agentic AI Systems
            </h3>

            <p className="text-zinc-500 mt-2">
              Autonomous AI orchestration and business intelligence workflows
            </p>

          </div>

          <AgentPanel />

          <LiveAgentFlow />

          <InsightEngine />

        </section>

        {/* PREDICTIONS */}
        <section
          id="predictions"
          className="mt-16"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Predictive Intelligence
            </h3>

            <p className="text-zinc-500 mt-2">
              Machine learning powered churn and customer intelligence
            </p>

          </div>

          <MLInsights
            predictions={predictions}
          />

          <ExecutiveInsights />

          <RFMEngine />

        </section>

        {/* CUSTOMERS */}
        <section
          id="customers"
          className="mt-16"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              Customer Intelligence
            </h3>

            <p className="text-zinc-500 mt-2">
              Revenue analytics and customer behavior intelligence
            </p>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <RevenueChart />

            <SegmentChart />

          </div>

          <CustomerTable />

        </section>

        {/* SIMULATION */}
        <section
          id="simulations"
          className="mt-16 mb-24"
        >

          <div className="mb-6">

            <h3 className="text-3xl font-bold">
              AI Strategy Simulation
            </h3>

            <p className="text-zinc-500 mt-2">
              Simulate AI-driven retention and growth strategies
            </p>

          </div>

          <SimulationPanel />

        </section>

      </section>

      {/* FLOATING AI CHAT */}
      <div className="hidden 2xl:block fixed right-6 bottom-6 w-[420px] z-50">

        <AIAnalystChat />

      </div>

    </main>
  );
}