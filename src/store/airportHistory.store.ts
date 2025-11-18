import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { airportType } from '@/interfaces/airportResponse';

/**
 * @interface AirportHistoryState
 * @description Estado para manejar el historial de aeropuertos visitados.
 */
interface AirportHistoryState {
  /** Lista de aeropuertos visitados */
  history: airportType[];

  /** Agrega un aeropuerto al historial */
  addAirport: (airport: airportType) => void;

  /** Limpia todo el historial */
  clearHistory: () => void;
}

/**
 * @constant useAirportHistory
 * @description Store global persistente para historial de aeropuertos vistos.
 */
export const useAirportHistory = create<AirportHistoryState>()(
  persist(
    (set, get) => ({
      history: [],

      addAirport: (airport) => {
        const current = get().history;

        const exists = current.some(
          (a) =>
            a.airport_id === airport.airport_id ||
            a.iata_code === airport.iata_code ||
            a.icao_code === airport.icao_code
        );

        if (!exists) {
          set({ history: [...current, airport] });
        }
      },

      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'airport-history', // clave en localStorage
    }
  )
);
