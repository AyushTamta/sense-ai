import { create } from "zustand";

interface CustomerData {

  customer_id: string;

  customer_name: string;

  last_purchase_days: number;

  order_frequency: number;

  total_spent: number;

  churn_risk: string;

  segment: string;
}

interface PredictionData {

  predicted_churn_customers?: number;

  average_churn_probability?: number;
}

interface AgentStep {

  id: number;

  label: string;

  completed: boolean;
}

interface ExecutiveInsight {

  id: number;

  title: string;

  description: string;
}

interface StoreState {

  customers: CustomerData[];

  predictions: PredictionData;

  agentSteps: AgentStep[];

  executiveInsights: ExecutiveInsight[];

  setCustomers: (
    data: CustomerData[]
  ) => void;

  setPredictions: (
    data: PredictionData
  ) => void;

  setAgentSteps: (
    data: AgentStep[]
  ) => void;

  setExecutiveInsights: (
    data: ExecutiveInsight[]
  ) => void;
}

export const useCustomerStore =
  create<StoreState>((set) => ({

    customers: [],

    predictions: {},

    agentSteps: [],

    executiveInsights: [],

    setCustomers: (data) =>
      set({ customers: data }),

    setPredictions: (data) =>
      set({ predictions: data }),

    setAgentSteps: (data) =>
      set({ agentSteps: data }),

    setExecutiveInsights: (data) =>
      set({ executiveInsights: data }),
  }));