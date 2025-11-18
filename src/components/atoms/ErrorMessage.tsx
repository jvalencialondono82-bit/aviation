'use client';

import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  /** Mensaje de error que se mostrará al usuario */
  message: string;
}

/**
 * @component ErrorMessage
 * @description Muestra un mensaje de error elegante con icono y diseño profesional.
 */
export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="w-full flex justify-center mt-12">
      <div className="bg-white border border-red-200 shadow-sm rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        {/* Icono con efecto sutil */}
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>

        {/* Título */}
        <h2 className="text-xl font-semibold text-red-600">
          Ocurrió un problema
        </h2>

        {/* Mensaje del error */}
        <p className="text-gray-600 mt-2">
          {message}
        </p>

        {/* Línea decorativa */}
        <div className="w-24 h-1 bg-red-200 rounded-full mx-auto mt-4"></div>
      </div>
    </div>
  );
}
