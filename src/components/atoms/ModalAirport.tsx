'use client';
import { airportType } from '@/interfaces/airportResponse';
import { X, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useState } from 'react';
import { ModalMapAirport } from './ModalMapAirport';

/**
 * @component ModalAirport
 * @description Modal con diseño dinámico y visual para mostrar detalles del aeropuerto.
 * @param airport Datos del aeropuerto seleccionado.
 * @param onClose Función para cerrar el modal.
 */
export function ModalAirport({ airport, onClose }: { airport: airportType; onClose: () => void }) {
  const [openMap, setOpenMap] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
      {/* Contenedor principal */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 animate-fadeIn p-6 relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <X size={18} />
        </button>

        {/* Header visual */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-xl shadow-inner">
            <Navigation className="text-blue-600" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{airport.airport_name}</h2>
            <p className="text-gray-500 text-sm">
              Código IATA: <span className="font-medium">{airport.iata_code}</span> • Código ICAO:{' '}
              <span className="font-medium">{airport.icao_code}</span>
            </p>
          </div>
        </div>

        {/* Grid con información */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Ubicación */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800">Ubicación</h3>
            </div>
            <p className="text-gray-600 text-sm mb-1">
              Ciudad IATA: {airport.city_iata_code || 'N/A'}
            </p>
            <p className="text-gray-600 text-sm">
              {airport.country_name} ({airport.country_iso2})
            </p>
          </div>

          {/* Coordenadas */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <Navigation size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800">Coordenadas</h3>
            </div>
            <p className="text-gray-600 text-sm">Latitud: {airport.latitude}</p>
            <p className="text-gray-600 text-sm">Longitud: {airport.longitude}</p>
          </div>

          {/* Zona horaria */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800">Zona horaria</h3>
            </div>
            <p className="text-gray-600 text-sm">GMT: {airport.gmt || 'N/A'}</p>
            <p className="text-gray-600 text-sm">Timezone: {airport.timezone || 'N/A'}</p>
          </div>

          {/* Contacto */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-2">
              <Phone size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-800">Contacto</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Teléfono: {airport.phone_number || 'No disponible'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <div className="flex gap-2">
            {/* Abrir modal del mapa */}
            <button
              onClick={() => setOpenMap(true)}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition cursor-pointer"
            >
              Mapa
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      {/* Modal del mapa */}
      {openMap && <ModalMapAirport airport={airport} onClose={() => setOpenMap(false)} />}
    </div>
  );
}
