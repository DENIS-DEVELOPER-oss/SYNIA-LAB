
export type NavLink = {
  href: string;
  label: string;
  icon?: React.ElementType; // For potential icons in nav
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Quiénes somos" },
  { href: "/services", label: "Servicios" },
  { href: "/courses", label: "Cursos" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

export const SITE_NAME = "SYNIA LAB";
export const SITE_SLOGAN = "Tecnología y Conocimiento que Transforman";
