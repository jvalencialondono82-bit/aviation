import { Logo } from '@/atoms/Logo';
import { NavLinks } from '@/molecules/NavLinks';

/**
 * @component Navbar
 * @description Barra de navegación principal con altura real y protección visual.
 */
export const Navbar = () => (
  <nav
    className="
      w-full z-50
      h-20 min-h-20 max-h-20
      flex items-center
      bg-white/60 supports-[backdrop-filter]:bg-white/40
      backdrop-blur-xl
      border-b border-white/30
      shadow-lg
      pointer-events-auto
    "
  >
    <div className="w-full flex justify-between items-center px-10">
      <Logo />
      
      <NavLinks />
    </div>
  </nav>
);
