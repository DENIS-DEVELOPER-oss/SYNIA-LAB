
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductionCard, type ProductionItem } from "@/components/cards/ProductionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const placeholderVideoUrl = "https://www.youtube.com/embed/BBJa32lCaaY"; // Placeholder video

const softwareItems: ProductionItem[] = [
  { 
    id: "sw1", 
    title: "Sistema de Gestión Académica Avanzado", 
    summary: "Desarrollo de una plataforma integral para la administración de instituciones educativas.", 
    videoUrl: placeholderVideoUrl, 
    category: "Software", 
    thematicArea: "Tecnología Educativa", 
    demoUrl: "/portfolio/software/sw1", // Placeholder link
    demoLinkText: "Ver detalles del proyecto" 
  },
  { 
    id: "sw2", 
    title: "App Móvil para Investigación de Campo", 
    summary: "Aplicación intuitiva para la recolección y análisis de datos en tiempo real.", 
    videoUrl: placeholderVideoUrl, 
    category: "Software", 
    thematicArea: "Investigación Aplicada", 
    demoUrl: "/portfolio/software/sw2", // Placeholder link
    demoLinkText: "Explorar App" 
  },
  // Add more software items if needed, following the ProductionItem structure
];

const articleItems: ProductionItem[] = [
  { 
    id: "ar1", 
    title: "Impacto de la IA en la Educación Superior", 
    summary: "Publicado en Revista Q3 de Innovación Educativa.", 
    videoUrl: placeholderVideoUrl, 
    category: "Artículo Científico", 
    thematicArea: "Inteligencia Artificial", 
    demoUrl: "/portfolio/articles/ar1", // Placeholder link
    demoLinkText: "Leer publicación" 
  },
  { 
    id: "ar2", 
    title: "Análisis Comparativo de Metodologías Ágiles", 
    summary: "Capítulo de libro en 'Desarrollo de Software Moderno'.", 
    videoUrl: placeholderVideoUrl, 
    category: "Capítulo de Libro", 
    thematicArea: "Ingeniería de Software", 
    demoUrl: "/portfolio/articles/ar2", // Placeholder link
    demoLinkText: "Ver capítulo" 
  },
  // Add more article/book items if needed
];

const thesisItems: ProductionItem[] = [
  { 
    id: "th1", 
    title: "Tesis Doctoral: Modelos Predictivos en Finanzas", 
    summary: "Asesoría completa culminada con mención honorífica.", 
    videoUrl: placeholderVideoUrl, 
    category: "Tesis Doctoral", 
    thematicArea: "Finanzas Cuantitativas", 
    demoUrl: "/portfolio/theses/th1", // Placeholder link
    demoLinkText: "Conocer más" 
  },
  { 
    id: "th2", 
    title: "Tesis de Maestría: Usabilidad en E-commerce", 
    summary: "Investigación aplicada para optimizar la experiencia de usuario.", 
    videoUrl: placeholderVideoUrl, 
    category: "Tesis de Maestría", 
    thematicArea: "Experiencia de Usuario", 
    demoUrl: "/portfolio/theses/th2", // Placeholder link
    demoLinkText: "Ver investigación" 
  },
  // Add more thesis items if needed
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Nuestro Portafolio"
        subtitle="Una muestra de nuestro compromiso con la excelencia y la innovación."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
            <TabsTrigger value="software" className="flex items-center gap-2"><Briefcase className="h-4 w-4"/>Proyectos de Software</TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2"><BookOpen className="h-4 w-4"/>Publicaciones</TabsTrigger>
            <TabsTrigger value="theses" className="flex items-center gap-2"><GraduationCap className="h-4 w-4"/>Tesis Asesoradas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articleItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="theses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {thesisItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
// TODO: Create dynamic routes for individual portfolio items if needed (e.g., /portfolio/software/[id]).
// The demoUrl fields currently point to generic paths.
