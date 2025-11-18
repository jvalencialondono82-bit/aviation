'use client';

import { X } from "lucide-react";
import { airportType } from "@/interfaces/airportResponse";
import dynamic from "next/dynamic";

/**
 * @component ModalMapAirport
 * @description Modal que renderiza el mapa del aeropuerto cargado dinámicamente.
 */
export function ModalMapAirport({
  airport,
  onClose,
}: {
  airport: airportType;
  onClose: () => void;
}) {
  // Cargar Leaflet dinámicamente (Next.js SSR fix)
  const MapAirport = dynamic(() => import("./MapAirport"), {
    ssr: false,
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-5 shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <X size={18} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Ubicación del aeropuerto
        </h2>

        <MapAirport airport={airport} />
      </div>
    </div>
  );
}
