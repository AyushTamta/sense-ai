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

interface StoreState {

  customers: CustomerData[];

  predictions: PredictionData;

  setCustomers: (
    data: CustomerData[]
  ) => void;

  setPredictions: (
    data: PredictionData
  ) => void;
}

export const useCustomerStore =
  create<StoreState>((set) => ({

    customers: [],

    predictions: {},

    setCustomers: (data) =>
      set({ customers: data }),

    setPredictions: (data) =>
      set({ predictions: data }),
  }));