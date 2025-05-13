// components/layout/navbar.tsx
/**
 * # components/layout/navbar.tsx
 * * Define la barra de navegación principal de la aplicación.
 *   Incluye: logo, controles de tema y navegación.
 */

import { ThemeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";

const APP_TITLE = "Mi Negocio" as const;

export const Navbar: React.FC = () => {
  return (
    <nav 
      className="sticky top-0 z-50 w-full flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 border-b bg-background"
      aria-label="Navegación principal"
    >
      {/* Logo/Título */}
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <h4 className="font-semibold">{APP_TITLE}</h4>
      </Link>

      {/* Enlaces de navegación */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
          Inicio
        </Link>
        <Link href="/grid" className="text-sm font-medium hover:text-primary transition-colors">
          AG Grid
        </Link>
      </div>

      {/* Controles */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};