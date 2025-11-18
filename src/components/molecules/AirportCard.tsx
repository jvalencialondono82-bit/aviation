'use client';

import { airportType } from '@/interfaces/airportResponse';
import { useState } from 'react';
import { ModalAirport } from '../atoms/ModalAirport';
import { Navigation, MapPin } from 'lucide-react';
import { useAirportHistory } from '@/store/airportHistory.store';

/**
 * @component AirportCard
 * @description Card visual moderna que además registra el aeropuerto en el historial.
 */
export default function AirportCard({ airport }: { airport: airportType }) {
  // Estado del modal
  const [open, setOpen] = useState(false);

  // Store para guardar historial
  const addAirport = useAirportHistory((s) => s.addAirport);

  return (
    <>
      <div
        className="cursor-pointer bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        onClick={() => {
          addAirport(airport);
          setOpen(true);
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
            {airport.airport_name}
          </h2>

          <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shadow-inner">
            <Navigation size={18} />
          </div>
        </div>

        {/* Info IATA / ICAO */}
        <p className="text-gray-700 text-sm">
          <span className="font-semibold">IATA:</span> {airport.iata_code} •{' '}
          <span className="font-semibold">ICAO:</span> {airport.icao_code}
        </p>

        {/* Ubicación */}
        <div className="flex items-center gap-2 mt-3">
          <MapPin size={16} className="text-blue-600" />
          <p className="text-gray-600 text-sm">
            {airport.city_iata_code}, {airport.country_name}{' '}
            <span className="text-gray-500">({airport.country_iso2})</span>
          </p>
        </div>

        {/* Coordenadas */}
        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          Lat: {airport.latitude} | Lon: {airport.longitude}
        </p>

        <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
        </div>
      </div>

      {open && <ModalAirport airport={airport} onClose={() => setOpen(false)} />}
    </>
  );
}
