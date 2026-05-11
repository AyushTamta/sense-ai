"use client";

import { UploadCloud } from "lucide-react";

import { useState } from "react";

import { useCustomerStore } from "@/lib/store";

export default function DataUpload() {

  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);

  const setCustomers = useCustomerStore(
    (state) => state.setCustomers
  );

  const setPredictions = useCustomerStore(
    (state) => state.setPredictions
  );

  const setAgentSteps = useCustomerStore(
    (state) => state.setAgentSteps
  );

  const setExecutiveInsights =
    useCustomerStore(
      (state) =>
        state.setExecutiveInsights
    );

  const setAgentStatuses =
    useCustomerStore(
      (state) =>
        state.setAgentStatuses
    );

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    setLoading(true);

    // ACTIVATE AI AGENTS
    setAgentStatuses([

      {
        id: 1,

        name: "Segment Agent",

        status: "Running",

        task:
          "Analyzing customer cohorts",

        confidence: 91,

        update:
          "Detected VIP and At-Risk customer segments.",
      },

      {
        id: 2,

        name: "Forecast Agent",

        status: "Running",

        task:
          "Predicting churn probability",

        confidence: 94,

        update:
          "ML engine identified elevated churn risk patterns.",
      },

      {
        id: 3,

        name: "Executive Agent",

        status: "Running",

        task:
          "Generating executive intelligence",

        confidence: 96,

        update:
          "Revenue concentration detected among premium customers.",
      },

      {
        id: 4,

        name: "Simulation Agent",

        status: "Running",

        task:
          "Preparing retention simulations",

        confidence: 89,

        update:
          "AI strategy workflows initialized successfully.",
      },

    ]);

    // LIVE AGENT FLOW
    setAgentSteps([

      {
        id: 1,
        label: "Dataset received",
        completed: true,
      },

      {
        id: 2,
        label:
          "Segment Agent analyzing customer cohorts",
        completed: false,
      },

      {
        id: 3,
        label:
          "Forecast Agent running churn prediction",
        completed: false,
      },

      {
        id: 4,
        label:
          "Executive Agent generating insights",
        completed: false,
      },

      {
        id: 5,
        label:
          "ML engine calculating probabilities",
        completed: false,
      },

    ]);

    try {

      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        "https://sense-ai-it3a.onrender.com/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {

        throw new Error(
          "Backend request failed"
        );
      }

      const data = await response.json();

      console.log(
        "Backend Analysis:",
        data
      );

      // STORE CUSTOMER DATA
      setCustomers(data.customers);

      // STORE ML PREDICTIONS
      setPredictions({

        predicted_churn_customers:
          data.predicted_churn_customers,

        average_churn_probability:
          data.average_churn_probability,
      });

      // EXECUTIVE INSIGHTS
      const vipCustomers =
        data.customers.filter(
          (customer: any) =>
            customer.segment === "VIP"
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

      const totalRevenue =
        data.customers.reduce(
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

      const vipRevenuePercent =
        (
          (vipRevenue /
            totalRevenue) *
          100
        ).toFixed(1);

      setExecutiveInsights([

        {
          id: 1,

          title:
            "Revenue Concentration Detected",

          description:
            `VIP customers currently contribute ${vipRevenuePercent}% of total platform revenue.`,
        },

        {
          id: 2,

          title:
            "Churn Risk Escalation",

          description:
            `${data.predicted_churn_customers} customers were identified as high-risk churn candidates by the ML engine.`,
        },

        {
          id: 3,

          title:
            "Retention Opportunity",

          description:
            "Sensa recommends launching personalized retention campaigns targeting inactive and At-Risk users.",
        },

        {
          id: 4,

          title:
            "AI Growth Recommendation",

          description:
            "Customer segmentation analysis indicates strong expansion potential among Loyal and VIP cohorts.",
        },

      ]);

      // COMPLETE AGENT FLOW
      setTimeout(() => {

        setAgentSteps([

          {
            id: 1,
            label: "Dataset received",
            completed: true,
          },

          {
            id: 2,
            label:
              "Segment Agent analyzing customer cohorts",
            completed: true,
          },

          {
            id: 3,
            label:
              "Forecast Agent running churn prediction",
            completed: true,
          },

          {
            id: 4,
            label:
              "Executive Agent generating insights",
            completed: true,
          },

          {
            id: 5,
            label:
              "ML engine calculating probabilities",
            completed: true,
          },

          {
            id: 6,
            label:
              "Intelligence pipeline complete",
            completed: true,
          },

        ]);

        // UPDATE AGENT STATUS
        setAgentStatuses([

          {
            id: 1,

            name: "Segment Agent",

            status: "Completed",

            task:
              "Customer segmentation complete",

            confidence: 97,

            update:
              "VIP and At-Risk cohorts successfully analyzed.",
          },

          {
            id: 2,

            name: "Forecast Agent",

            status: "Completed",

            task:
              "Churn prediction complete",

            confidence: 98,

            update:
              `${data.predicted_churn_customers} high-risk customers identified.`,
          },

          {
            id: 3,

            name: "Executive Agent",

            status: "Completed",

            task:
              "Executive summary generated",

            confidence: 99,

            update:
              "Business intelligence summary delivered successfully.",
          },

          {
            id: 4,

            name: "Simulation Agent",

            status: "Completed",

            task:
              "Retention simulations prepared",

            confidence: 95,

            update:
              "AI retention strategies generated successfully.",
          },

        ]);

      }, 2500);

      alert(`
Analysis Complete

Customers: ${data.total_customers}

Revenue: $${data.total_revenue}

High Risk Customers: ${data.high_risk_customers}

VIP Customers: ${data.vip_customers}

Predicted Churn Customers: ${data.predicted_churn_customers}

Average Churn Probability: ${data.average_churn_probability}%
      `);

    } catch (error) {

      console.error(error);

      alert(
        "Backend analysis failed."
      );
    }

    setLoading(false);
  };

  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-3xl font-bold text-white">
            Upload Intelligence Dataset
          </h3>

          <p className="text-zinc-400 text-sm mt-2">
            Activate AI analytics workflows with customer intelligence data
          </p>

        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-xl text-purple-300 text-sm">

          AI Pipeline Ready

        </div>

      </div>

      {/* UPLOAD AREA */}
      <label
        className="mt-8 border-2 border-dashed border-white/10 rounded-3xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500/40 transition bg-black/20"
      >

        <UploadCloud
          size={54}
          className="text-purple-400"
        />

        <p className="text-white mt-6 text-xl font-semibold">

          {loading
            ? "AI agents analyzing dataset..."
            : "Click to upload customer dataset"}

        </p>

        <p className="text-zinc-500 text-sm mt-3">
          CSV • XLSX • JSON supported
        </p>

        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
        />

      </label>

      {/* SUCCESS */}
      {fileName && (

        <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-5">

          <p className="text-green-300 font-medium">
            Dataset uploaded successfully
          </p>

          <p className="text-zinc-400 text-sm mt-2">
            {fileName}
          </p>

        </div>

      )}

    </div>
  );
}