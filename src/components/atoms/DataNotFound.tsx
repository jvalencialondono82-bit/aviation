export default function DataNotFound() {
  return (
    <div className="w-full flex flex-col items-center gap-3 py-10 text-center animate-fadeIn">
      {/* Ícono de avión */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-14 h-14 text-gray-400"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16V8l-8 4 8 4ZM3 6l8 6-8 6V6Zm8 6h4"
        />
      </svg>

      <h3 className="text-2xl font-semibold text-gray-800">No se encontró información</h3>

      <p className="text-gray-500 text-sm max-w-md">
        Verifica la búsqueda o intenta con un código IATA, ICAO o nombre diferente.
      </p>
    </div>
  );
}
