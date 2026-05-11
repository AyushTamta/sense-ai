"use client";

import { useState } from "react";

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

    // TOTAL CUSTOMERS
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

    // HIGH RISK
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

Primary churn drivers:
• low engagement
• reduced purchase activity
• inactivity periods

Recommended action:
launch retention incentives and personalized re-engagement campaigns.
      `;
    }

    // VIP / REVENUE
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
VIP customers currently represent the strongest revenue-generating segment.

Detected VIP customers:
${vipCustomers.length}

Estimated VIP revenue contribution:
$${vipRevenue.toLocaleString()}

AI recommendation:
prioritize premium retention experiences and loyalty rewards for this cohort.
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

The AI engine recommends prioritizing At-Risk cohorts for retention campaigns.
      `;
    }

    // RETENTION STRATEGY
    if (
      lower.includes("retention") ||
      lower.includes("strategy")
    ) {

      return `
Recommended AI retention strategy:

1. Target high-risk inactive users
2. Launch loyalty cashback campaigns
3. Offer personalized VIP rewards
4. Trigger re-engagement email workflows
5. Monitor churn probability weekly

Sensa predicts retention optimization opportunities across premium customer segments.
      `;
    }

    // DEFAULT RESPONSE
    return `
Sensa AI Analyst detected predictive intelligence signals across:

• churn probability
• segmentation analytics
• customer behavior
• revenue intelligence
• retention optimization

Suggested prompts:
• Which segment is highest value?
• How many high-risk users exist?
• Recommend retention strategies
• Which customers generate most revenue?
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

    // AI THINKING STATE
    setThinking(true);

    // SIMULATED AI PROCESSING
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

  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h3 className="text-2xl font-bold text-white">
            AI Analyst Assistant
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Context-aware predictive business intelligence
          </p>

        </div>

        <div className="text-green-400 text-sm">
          ● AI Online
        </div>

      </div>

      {/* CHAT AREA */}
      <div className="bg-black/20 border border-white/10 rounded-3xl p-5 h-[500px] overflow-y-auto space-y-5">

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
                className={`max-w-[80%] rounded-2xl px-5 py-4 whitespace-pre-line ${
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

        {/* THINKING STATE */}
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
      <div className="mt-6 flex gap-4">

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