/**
 * @component Button
 * @description Botón básico reutilizable.
 */
export const Button = ({ label, href }: { label: string, href?: string }) => {
  return (
    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all cursor-pointer" >
      {label}
    </button>
  );
};
