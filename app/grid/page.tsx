/**
 * # app/grid/page.tsx
 * * Página para mostrar la tabla AG Grid mejorada
 */

import GridComponent from "@/components/GridComponent";
 
export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <GridComponent />
    </div>
  );
}