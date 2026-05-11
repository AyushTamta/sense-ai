"use client";

import { useState } from "react";

import {
  X,
  MessageSquare,
  Minimize2,
} from "lucide-react";

import { useCustomerStore } from "@/lib/store";

export default function AIAnalystChat() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const predictions = useCustomerStore(
    (state) => state.predictions
  );

  const [question, setQuestion] =
    useState("");

  const [thinking, setThinking] =
    useState(false);

  const [minimized, setMinimized] =
    useState(false);

  const [messages, setMessages] =
    useState<
      {
        role: string;
        content: string;
      }[]
    >([
      {
        role: "assistant",
        content:
          "Hello — I’m the Sensa AI Analyst. Ask me about churn, customer behavior, customer segments, retention strategies, or revenue intelligence.",
      },
    ]);

  // CONTEXTUAL AI ENGINE
  const generateResponse = (
    query: string
  ) => {

    const lower =
      query.toLowerCase();

    // CUSTOMERS
    if (
      lower.includes("customers")
    ) {

      return `
Sensa analyzed the uploaded dataset and detected:

• Total customers: ${customers.length}

• Predicted churn customers:
${predictions.predicted_churn_customers || 0}

• Average churn probability:
${predictions.average_churn_probability || 0}%

The AI engine recommends monitoring high-risk cohorts proactively.
      `;
    }

    // CHURN
    if (
      lower.includes("risk") ||
      lower.includes("churn")
    ) {

      const highRisk =
        customers.filter(
          (c: any) =>
            c.churn_risk === "High"
        );

      return `
The AI engine identified:

• ${highRisk.length} high-risk customers
• Elevated inactivity signals
• Declining order frequency patterns

Recommended action:
launch personalized retention campaigns and loyalty rewards.
      `;
    }

    // VIP
    if (
      lower.includes("vip") ||
      lower.includes("revenue")
    ) {

      const vipCustomers =
        customers.filter(
          (c: any) =>
            c.segment === "VIP"
        );

      const vipRevenue =
        vipCustomers.reduce(
          (
            acc: number,
            customer: any
          ) =>
            acc +
            Number(
              customer.total_spent
            ),
          0
        );

      return `
VIP customers currently generate the strongest revenue concentration.

Detected VIP customers:
${vipCustomers.length}

Estimated VIP revenue:
$${vipRevenue.toLocaleString()}
      `;
    }

    // SEGMENTS
    if (
      lower.includes("segment")
    ) {

      const segmentCounts =
        customers.reduce(
          (
            acc: any,
            customer: any
          ) => {

            acc[
              customer.segment
            ] =
              (
                acc[
                  customer.segment
                ] || 0
              ) + 1;

            return acc;
          },
          {}
        );

      return `
Current segmentation intelligence:

${Object.entries(
  segmentCounts
)
  .map(
    ([segment, count]) =>
      `• ${segment}: ${count} customers`
  )
  .join("\n")}
      `;
    }

    // RETENTION
    if (
      lower.includes("retention") ||
      lower.includes("strategy")
    ) {

      return `
Recommended retention strategy:

1. Target inactive users
2. Launch cashback campaigns
3. Offer VIP rewards
4. Improve re-engagement workflows
5. Monitor churn weekly
      `;
    }

    // DEFAULT
    return `
Sensa AI Analyst detected predictive intelligence patterns across:
• churn probability
• segmentation analytics
• customer behavior
• revenue intelligence

Suggested prompts:
• Which segment is highest value?
• Recommend retention strategies
• How many high-risk users exist?
      `;
  };

  const handleSend = async () => {

    if (!question.trim()) return;

    const userMessage = {

      role: "user",

      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentQuestion =
      question;

    setQuestion("");

    setThinking(true);

    setTimeout(() => {

      const aiMessage = {

        role: "assistant",

        content:
          generateResponse(
            currentQuestion
          ),
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setThinking(false);

    }, 1800);
  };

  // MINIMIZED CHAT
  if (minimized) {

    return (

      <button
        onClick={() =>
          setMinimized(false)
        }
        className="bg-purple-500 hover:bg-purple-600 transition rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl"
      >

        <MessageSquare size={20} />

        AI Analyst Assistant

      </button>

    );
  }

  return (

    <div className="bg-[#0b0b0b] border border-white/10 rounded-3xl shadow-2xl w-full h-[650px] flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between p-5 border-b border-white/10">

        <div>

          <h3 className="text-lg font-bold text-white">
            AI Analyst Assistant
          </h3>

          <p className="text-zinc-500 text-xs mt-1">
            Conversational business intelligence
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setMinimized(true)
            }
            className="text-zinc-400 hover:text-white transition"
          >

            <Minimize2 size={18} />

          </button>

          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

        </div>

      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">

        {messages.map(
          (message, index) => (

            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 whitespace-pre-line ${
                  message.role === "user"
                    ? "bg-purple-500 text-white"
                    : "bg-white/5 border border-white/10 text-zinc-200"
                }`}
              >

                {message.content}

              </div>

            </div>

          )
        )}

        {/* THINKING */}
        {thinking && (

          <div className="flex justify-start">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-zinc-300">

              <div className="flex items-center gap-3">

                <div className="flex gap-1">

                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />

                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />

                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />

                </div>

                AI Analyst is thinking...

              </div>

            </div>

          </div>

        )}

      </div>

      {/* INPUT */}
      <div className="p-5 border-t border-white/10 flex gap-3">

        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask AI Analyst..."
          className="flex-1 bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder:text-zinc-500"
        />

        <button
          onClick={handleSend}
          className="bg-purple-500 hover:bg-purple-600 transition px-6 rounded-2xl font-medium"
        >

          Send

        </button>

      </div>

    </div>
  );
}