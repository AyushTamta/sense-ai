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

interface StoreState {
  customers: CustomerData[];
  setCustomers: (data: CustomerData[]) => void;
}

export const useCustomerStore = create<StoreState>((set) => ({
  customers: [],
  setCustomers: (data) => set({ customers: data }),
}));
