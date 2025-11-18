'use client';

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { airportType } from "@/interfaces/airportResponse";

/**
 * @component MapAirport
 * @description Mapa interactivo que muestra la ubicación exacta del aeropuerto usando Leaflet, con estado de carga y un icono personalizado.
 */
export default function MapAirport({ airport }: { airport: airportType }) {
  const [isMapReady, setIsMapReady] = useState(false);

  /**
   * Componente interno para detectar cuando el mapa está listo.
   */
  function MapEvents() {
    useMapEvent("load", () => {
      setTimeout(() => setIsMapReady(true), 300); 
    });
    return null;
  }

  // Icono personalizado de avión
  const customIcon = L.icon({
    iconUrl: "@/public/aeropuerto.png", 
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">

      {/* Spinner mientras carga el mapa */}
      {!isMapReady && (
        <div className="absolute inset-0 z-50 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center animate-fadeIn">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-sm text-gray-600 font-medium">Cargando mapa...</p>
        </div>
      )}

      <MapContainer
        center={[airport.latitude, airport.longitude]}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapEvents />

        <Marker
          position={[airport.latitude, airport.longitude]}
          icon={customIcon}
        >
          <Popup>{airport.airport_name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
