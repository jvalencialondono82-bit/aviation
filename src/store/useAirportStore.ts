'use client';

import { create } from "zustand";
import axios from "axios";
import { airportType } from "@/interfaces/airportResponse";

interface AirportStore {
  airports: airportType[];
  loading: boolean;
  error: string;
  fetchAirports: () => Promise<void>;
}

/**
 * @store useAirportStore
 * @description Estado global de aeropuertos.
 */
export const useAirportStore = create<AirportStore>((set) => ({
  airports: [],
  loading: false,
  error: "",

  fetchAirports: async () => {
    try {
      set({ loading: true, error: "" });

      const res = await axios.get("/api/airports");

      set({
        airports: res.data?.data || [],
      });
    } catch (err) {
      set({
        error: "No se pudo obtener la información de los aeropuertos.",
      });
    } finally {
      set({ loading: false });
    }
  },
}));
