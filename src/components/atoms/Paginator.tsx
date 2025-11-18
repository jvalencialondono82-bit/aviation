'use client';

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-8">
      <div
        className="
          flex items-center gap-2 
          bg-white
          shadow-md px-4 py-2 
          rounded-full border border-gray-200
        "
      >
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`
            ${currentPage === 1 ? 'text-gray-300' : 'text-blue-600 hover:bg-blue-50'}
          `}
        >
          Anterior
        </button>

        {/* --------- MÓVIL (solo página actual) --------- */}
        <span className="block sm:hidden px-3 py-1 text-sm font-semibold text-gray-700">
          {currentPage} / {totalPages}
        </span>

        {/* --------- DESKTOP (todas las páginas) --------- */}
        <div className="hidden sm:flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                px-3 py-1 rounded-lg text-sm transition font-medium
                ${
                  page === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`
            px-3 py-1 rounded-lg text-sm font-medium transition
            ${
              currentPage === totalPages
                ? 'text-gray-300'
                : 'text-blue-600 hover:bg-blue-50'
            }
          `}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
