import { Search } from 'lucide-react';

interface SearchInputProps {
  /** Valor actual del input */
  value: string;

  /** Evento al escribir */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Placeholder personalizado opcional */
  placeholder?: string;
}

/**
 * @component SearchInput
 * @description Input de búsqueda accesible y estilizado para mejorar la UX en listados.
 */
export default function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar aeropuertos...',
}: SearchInputProps) {
  return (
    <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-4/12">
      {/* Icono de búsqueda dentro del input */}
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      {/* Input principal */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="
          w-full pl-10 pr-4 py-2 rounded-xl
          border border-gray-300
          bg-white
          text-gray-900
          shadow-sm
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-all outline-none
        "
        placeholder={placeholder}
      />
    </div>
  );
}
