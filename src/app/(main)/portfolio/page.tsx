
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductionCard, type ProductionItem, type ProductionImage } from "@/components/cards/ProductionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, BookOpen } from "lucide-react";

const placeholderVideoUrl = "https://www.youtube.com/embed/BBJa32lCaaY"; // Placeholder video

const softwareImagePlaceholder: ProductionImage = { src: "https://placehold.co/600x400.png", alt: "Software placeholder", hint: "software interface" };
const articleImagePlaceholder1: ProductionImage = { src: "https://placehold.co/600x400.png", alt: "Artículo placeholder 1", hint: "chart data" };
const articleImagePlaceholder2: ProductionImage = { src: "https://placehold.co/600x400.png", alt: "Artículo placeholder 2", hint: "document text" };
const bookImagePlaceholder1: ProductionImage = { src: "https://placehold.co/600x400.png", alt: "Libro placeholder 1", hint: "book cover" };
const bookImagePlaceholder2: ProductionImage = { src: "https://placehold.co/600x400.png", alt: "Libro placeholder 2", hint: "text page" };


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
   { 
    id: "sw3", 
    title: "Plataforma E-learning Interactiva", 
    summary: "Solución completa para cursos online, con seguimiento de progreso y herramientas colaborativas.", 
    videoUrl: placeholderVideoUrl, 
    category: "Software", 
    thematicArea: "Educación Digital", 
    demoUrl: "/portfolio/software/sw3",
    demoLinkText: "Acceder Plataforma" 
  },
];

const publicationItems: ProductionItem[] = [
  { 
    id: "ar1", 
    title: "Impacto de la IA en la Educación Superior", 
    summary: "Análisis exhaustivo de cómo la inteligencia artificial está transformando los paradigmas educativos y las metodologías de enseñanza en el nivel superior. Publicado en Revista Q3 de Innovación Educativa.", 
    imageUrls: [articleImagePlaceholder1, articleImagePlaceholder2],
    category: "Artículo Científico", 
    thematicArea: "Inteligencia Artificial", 
    demoUrl: "/portfolio/articles/ar1", 
    demoLinkText: "Leer resumen" 
  },
  { 
    id: "cl1", 
    title: "Metodologías Ágiles en el Desarrollo de Software Moderno", 
    summary: "Capítulo de libro que explora la aplicación práctica de Scrum, Kanban y XP en equipos de desarrollo, enfocado en mejorar la eficiencia y la calidad del producto final.", 
    imageUrls: [bookImagePlaceholder1, bookImagePlaceholder2],
    category: "Capítulo de Libro", 
    thematicArea: "Ingeniería de Software", 
    demoUrl: "/portfolio/articles/cl1", 
    demoLinkText: "Leer resumen" 
  },
   { 
    id: "ar2", 
    title: "Blockchain y la Seguridad de Datos en Salud", 
    summary: "Investigación sobre el potencial de la tecnología blockchain para asegurar la integridad y privacidad de los registros médicos electrónicos. Publicado en Journal of Medical Internet Research (JMIR).", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Blockchain network", hint: "blockchain network" },
        { src: "https://placehold.co/600x400.png", alt: "Secure data", hint: "secure data" }
    ],
    category: "Artículo Científico", 
    thematicArea: "Ciberseguridad en Salud", 
    demoUrl: "/portfolio/articles/ar2",
    demoLinkText: "Leer resumen" 
  },
];


export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Nuestro Portafolio"
        subtitle="Una muestra de nuestro compromiso con la excelencia y la innovación en software y publicaciones."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-8">
            <TabsTrigger value="software" className="flex items-center gap-2"><Briefcase className="h-4 w-4"/>Proyectos de Software</TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2"><BookOpen className="h-4 w-4"/>Publicaciones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="publications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicationItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
             <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Más publicaciones y proyectos se añaden continuamente.
                </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
// TODO: Create dynamic routes for individual portfolio items if needed (e.g., /portfolio/software/[id]).
// The demoUrl fields currently point to generic paths.
