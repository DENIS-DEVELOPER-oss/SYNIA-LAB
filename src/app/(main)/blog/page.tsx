
import { PageHeader } from "@/components/shared/PageHeader";
import { GenericCard } from "@/components/shared/GenericCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "5 Herramientas Esenciales para Investigadores",
    description: "Descubre las herramientas que pueden potenciar tu productividad y calidad investigativa.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "desk tools",
    category: "Herramientas",
    tags: ["investigación", "productividad", "software"],
    date: "2024-07-15",
    author: "SYNIA LAB Equipo"
  },
  {
    id: "2",
    title: "Cómo Elegir la Revista Adecuada para tu Artículo",
    description: "Consejos prácticos para seleccionar la revista que mejor se adapte a tu investigación y aumente tus posibilidades de publicación.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "journals books",
    category: "Publicación",
    tags: ["artículos", "revistas", "Scielo", "Q3", "Q4"],
    date: "2024-07-10",
    author: "Dr. Alexandro R."
  },
  {
    id: "3",
    title: "Superando el Bloqueo del Escritor en Tesis Doctorales",
    description: "Estrategias efectivas para mantener la motivación y el flujo de escritura durante el largo proceso de una tesis doctoral.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing desk",
    category: "Tips Académicos",
    tags: ["tesis", "escritura", "motivación"],
    date: "2024-07-05",
    author: "Lic. Mario P."
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog y Recursos"
        subtitle="Artículos, tips y herramientas para potenciar tu desarrollo académico y profesional."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full sm:w-auto">
            <Input type="search" placeholder="Buscar artículos..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar por Categoría
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <GenericCard
              key={post.id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              imageHint={post.imageHint}
              linkUrl={`/blog/${post.id}`} // Assuming individual blog post pages
              linkText="Leer artículo completo"
              category={post.category}
              tags={post.tags}
              footerContent={
                <div className="text-xs text-muted-foreground">
                    <p>Por: {post.author}</p>
                    <p>Fecha: {post.date}</p>
                </div>
              }
            />
          ))}
        </div>
         <div className="mt-12 text-center">
            <Button variant="outline">Cargar más artículos</Button>
        </div>
      </div>
    </>
  );
}

// TODO: Create a dynamic route /blog/[id]/page.tsx for individual blog posts if needed.
