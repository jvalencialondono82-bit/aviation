/**
 * @component NavLinks
 * @description Navegación principal del sitio.
 */

const links = [
  { label: 'Aeropuertos', href: '/airport' },
  { label: 'Historial', href: '/history' },
];

export const NavLinks = () => (
  <ul className="flex gap-6 text-lg font-medium">
    {links.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          className="hover:text-blue-700"
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);
