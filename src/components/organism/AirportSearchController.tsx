'use client';

import { useEffect, useMemo, useState } from 'react';
import { useAirportStore } from '@/store/useAirportStore';
import AirportCard from '../molecules/AirportCard';
import SearchInput from '../atoms/SearchInput';
import ErrorMessage from '../atoms/ErrorMessage';
import DataNotFound from '../atoms/DataNotFound';
import { LoadingSkeleton } from '../atoms/LoadingSkeleton';
import Paginator from '../atoms/Paginator';

/**
 * @component AirportSearchController
 * @description Controlador que maneja búsqueda, paginación y renderizado usando Zustand.
 */
export default function AirportSearchController() {
  const { airports, loading, error, fetchAirports } = useAirportStore();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 9;

  // Llamada API solo una vez
  useEffect(() => {
    fetchAirports();
  }, [fetchAirports]);

  // Filtrar
  const filteredAirports = useMemo(() => {
    const text = search.toLowerCase();

    return airports.filter(
      (a) =>
        a.airport_name?.toLowerCase().includes(text) ||
        a.iata_code?.toLowerCase().includes(text)
    );
  }, [search, airports]);

  // Paginar
  const paginatedAirports = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAirports.slice(start, start + pageSize);
  }, [currentPage, filteredAirports]);

  const totalPages = Math.ceil(filteredAirports.length / pageSize);

  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="w-full flex flex-col gap-6 mt-10 px-6">
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading && <LoadingSkeleton />}

      {!loading && (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedAirports.length > 0 ? (
              paginatedAirports.map((airport) => (
                <AirportCard key={airport.id} airport={airport} />
              ))
            ) : (
              <div className="col-span-full flex justify-center">
                <DataNotFound />
              </div>
            )}
          </div>

          {/* Paginador */}
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}
