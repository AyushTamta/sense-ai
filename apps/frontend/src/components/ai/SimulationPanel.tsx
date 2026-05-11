"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function SimulationPanel() {

  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const runSimulation = () => {

    if (!query) return;

    setResponse(`
Predicted Impact:
• Churn reduction: 12%
• Revenue increase: 8.4%
• High-value retention improvement detected

AI Recommendation:
Launch campaign for VIP customer segment with personalized rewards.
    `);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center gap-3">

        <div className="bg-purple-500/20 p-3 rounded-xl">
          <Sparkles className="text-purple-300" size={22} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">
            AI Strategy Simulator
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Run autonomous business simulations with AI agents
          </p>
        </div>

      </div>

      {/* Input */}
      <div className="mt-6">

        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Example: What if we give VIP customers a 15% loyalty reward?"
          className="w-full h-32 bg-black/30 border border-white/10 rounded-2xl p-4 text-white outline-none resize-none"
        />

        <button
          onClick={runSimulation}
          className="mt-4 bg-purple-500 hover:bg-purple-400 transition px-6 py-3 rounded-xl font-medium"
        >
          Run AI Simulation
        </button>

      </div>

      {/* Response */}
      {response && (

        <div className="mt-6 bg-black/30 border border-white/10 rounded-2xl p-5 whitespace-pre-line text-zinc-300 leading-7">

          {response}

        </div>

      )}

    </div>
  );
}