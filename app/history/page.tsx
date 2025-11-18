'use client';

import { Navbar } from '@/components/organism/Navbar';
import { useAirportHistory } from '@/store/airportHistory.store';

/**
 * @component HistoryPage
 * @description Muestra el historial de aeropuertos visitados.
 */
export default function page() {
  // State global del store
  const history = useAirportHistory((s) => s.history);
  const clearHistory = useAirportHistory((s) => s.clearHistory);

  return (
    <main>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Historial de aeropuertos visitados</h1>

        {history.length === 0 ? (
          <p className="text-gray-600">Aún no has visto ningún aeropuerto.</p>
        ) : (
          <>
            <ul className="space-y-3">
              {history.map((a) => (
                <li
                  key={a.airport_id}
                  className="p-4 bg-white rounded-xl shadow border hover:bg-gray-50 transition"
                >
                  <p className="text-lg font-semibold">
                    {a.airport_name || 'Nombre no disponible'}
                  </p>

                  <p className="text-sm text-gray-600">
                    {a.city_iata_code} — {a.country_name}
                    <span className="ml-2">
                      {a.iata_code}/{a.icao_code}
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            <button
              onClick={clearHistory}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Limpiar historial
            </button>
          </>
        )}
      </div>
    </main>
  );
}
