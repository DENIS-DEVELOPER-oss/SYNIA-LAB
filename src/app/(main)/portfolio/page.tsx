
import { PageHeader } from "@/components/shared/PageHeader";
import { GenericCard } from "@/components/shared/GenericCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const portfolioItems = {
  software: [
    { id: "sw1", title: "Sistema de Gestión Académica Avanzado", description: "Desarrollo de una plataforma integral para la administración de instituciones educativas.", imageUrl: "https://placehold.co/600x400.png", imageHint: "dashboard interface", category: "Software", tags: ["React", "Node.js", "MongoDB"] },
    { id: "sw2", title: "App Móvil para Investigación de Campo", description: "Aplicación intuitiva para la recolección y análisis de datos en tiempo real.", imageUrl: "https://placehold.co/600x400.png", imageHint: "mobile app", category: "Software", tags: ["Flutter", "Firebase", "GPS"] },
  ],
  articles: [
    { id: "ar1", title: "Impacto de la IA en la Educación Superior", description: "Publicado en Revista Q3 de Innovación Educativa.", imageUrl: "https://placehold.co/600x400.png", imageHint: "academic journal", category: "Artículo", tags: ["IA", "Educación", "Q3"] },
    { id: "ar2", title: "Análisis Comparativo de Metodologías Ágiles", description: "Capítulo de libro en 'Desarrollo de Software Moderno'.", imageUrl: "https://placehold.co/600x400.png", imageHint: "book chapter", category: "Libro", tags: ["Agile", "Software", "Investigación"] },
  ],
  theses: [
    { id: "th1", title: "Tesis Doctoral: Modelos Predictivos en Finanzas", description: "Asesoría completa culminada con mención honorífica.", imageUrl: "https://placehold.co/600x400.png", imageHint: "student graduation", category: "Tesis Doctoral", tags: ["Finanzas", "Machine Learning", "Doctorado"] },
    { id: "th2", title: "Tesis de Maestría: Usabilidad en E-commerce", description: "Investigación aplicada para optimizar la experiencia de usuario.", imageUrl: "https://placehold.co/600x400.png", imageHint: "user interface", category: "Tesis de Maestría", tags: ["UX", "E-commerce", "Maestría"] },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Nuestro Portafolio"
        subtitle="Una muestra de nuestro compromiso con la excelencia y la innovación."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="software" className="flex items-center gap-2"><Briefcase className="h-4 w-4"/>Proyectos de Software</TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2"><BookOpen className="h-4 w-4"/>Artículos Publicados</TabsTrigger>
            <TabsTrigger value="theses" className="flex items-center gap-2"><GraduationCap className="h-4 w-4"/>Tesis Asesoradas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.software.map(item => (
                <GenericCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageHint={item.imageHint}
                  category={item.category}
                  tags={item.tags}
                  linkUrl={`/portfolio/software/${item.id}`} // Placeholder for potential detail page
                  linkText="Ver detalles del proyecto"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.articles.map(item => (
                <GenericCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageHint={item.imageHint}
                  category={item.category}
                  tags={item.tags}
                  linkUrl={`/portfolio/articles/${item.id}`} // Placeholder
                  linkText="Leer publicación"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="theses">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems.theses.map(item => (
                <GenericCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  imageHint={item.imageHint}
                  category={item.category}
                  tags={item.tags}
                  linkUrl={`/portfolio/theses/${item.id}`} // Placeholder
                  linkText="Conocer más"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
// TODO: Create dynamic routes for individual portfolio items if needed.
