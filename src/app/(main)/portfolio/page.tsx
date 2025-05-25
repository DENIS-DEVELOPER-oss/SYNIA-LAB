
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductionCard, type ProductionItem } from "@/components/cards/ProductionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, BookCopy, FileText } from "lucide-react";

const placeholderVideoUrl = "https://www.youtube.com/embed/BBJa32lCaaY"; 

const softwareItems: ProductionItem[] = [
  { 
    id: "sw1", 
    title: "Sistema de Gestión Académica Avanzado", 
    summary: "Desarrollo de una plataforma integral para la administración de instituciones educativas.", 
    videoUrl: placeholderVideoUrl, 
    category: "Software", 
    thematicArea: "Tecnología Educativa", 
    demoUrl: "/portfolio/software/sw1", // This could be a link to a live demo or a specific page
    demoLinkText: "Explorar App" 
  },
  { 
    id: "sw2", 
    title: "App Móvil para Investigación de Campo", 
    summary: "Aplicación intuitiva para la recolección y análisis de datos en tiempo real.", 
    videoUrl: placeholderVideoUrl, 
    category: "Software", 
    thematicArea: "Investigación Aplicada", 
    demoUrl: "/portfolio/software/sw2",
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
    demoLinkText: "Explorar App" 
  },
];

const bookChapterItems: ProductionItem[] = [
  { 
    id: "cl1", 
    title: "Metodologías Ágiles en el Desarrollo de Software", 
    summary: "Capítulo de libro que explora la aplicación práctica de Scrum y Kanban en equipos de desarrollo.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Portada libro metodologías ágiles", hint: "agile book cover" },
        { src: "https://placehold.co/600x400.png", alt: "Diagrama de Scrum", hint: "scrum diagram" }
    ],
    category: "Capítulo de Libro", 
    thematicArea: "Ingeniería de Software", 
    demoUrl: "/portfolio/articles/cl1", // Link to the chapter or abstract page
    demoLinkText: "Leer resumen", // This text won't be used if "Ver detalles" is implemented
    peerReview: "Doble ciego",
    certification: "Certificado de publicación disponible",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl1",
    publishedDocumentLabel: "Ver en Editorial XYZ",
  },
  {
    id: "cl2",
    title: "Desarrollo Sostenible y Tecnología: Un Enfoque Integrado",
    category: "Capítulo de Libro",
    thematicArea: "Sostenibilidad y TIC",
    summary: "Capítulo que examina el papel crucial de la tecnología en la consecución de los Objetivos de Desarrollo Sostenible (ODS).",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "ODS y tecnología", hint: "SDG technology" },
        { src: "https://placehold.co/600x400.png", alt: "Tecnología verde", hint: "green tech" }
    ],
    demoUrl: "/portfolio/articles/cl2",
    demoLinkText: "Leer resumen",
    peerReview: "Revisado por comité editorial",
    certification: "Incluido en libro certificado ISBN: 978-X-XXXXX-XX-X",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl2",
    publishedDocumentLabel: "Consultar en Repositorio Institucional",
  },
];

const scientificArticleItems: ProductionItem[] = [
 { 
    id: "ar1", 
    title: "Impacto de la IA en la Educación Superior", 
    summary: "Análisis exhaustivo de cómo la inteligencia artificial está transformando los paradigmas educativos. Publicado en Revista Q3 de Innovación Educativa.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de IA en educación", hint: "AI education chart" },
        { src: "https://placehold.co/600x400.png", alt: "Estudiantes con tecnología", hint: "students technology" }
    ],
    category: "Artículo Científico", 
    thematicArea: "Inteligencia Artificial", 
    demoUrl: "/portfolio/articles/ar1", 
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scopus Q3, Web of Science ESCI",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/journal.xxxx",
    publishedDocumentLabel: "Ver en Journal de Innovación Educativa",
  },
  { 
    id: "ar2", 
    title: "Blockchain y la Seguridad de Datos en Salud", 
    summary: "Investigación sobre el potencial de blockchain para asegurar la integridad de registros médicos. Publicado en JMIR.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Red Blockchain", hint: "blockchain network" },
        { src: "https://placehold.co/600x400.png", alt: "Datos médicos seguros", hint: "secure medical data" }
    ],
    category: "Artículo Científico", 
    thematicArea: "Ciberseguridad en Salud", 
    demoUrl: "/portfolio/articles/ar2",
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    indexations: "PubMed, Scopus Q2",
    certification: "Disponible a solicitud",
    publishedDocumentUrl: "https://jmir.org/article/xxxx",
    publishedDocumentLabel: "Leer en JMIR",
  },
  {
    id: "ar3",
    title: "Análisis de Sentimiento en Redes Sociales para Predicción de Tendencias",
    category: "Artículo Científico",
    thematicArea: "Procesamiento de Lenguaje Natural",
    summary: "Estudio sobre cómo el análisis de sentimiento de datos de redes sociales puede predecir tendencias de mercado. Publicado en Journal of Data Science.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de análisis de sentimiento", hint: "sentiment chart" },
        { src: "https://placehold.co/600x400.png", alt: "Datos de redes sociales", hint: "social data" }
    ],
    demoUrl: "/portfolio/articles/ar3",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scielo, DOAJ",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://journaldatascience.org/article/yyyy",
    publishedDocumentLabel: "Ver en Journal of Data Science",
  },
  {
    id: "ar4",
    title: "Gamificación en Entornos de Aprendizaje Virtual: Efectividad y Percepción",
    category: "Artículo Científico",
    thematicArea: "Tecnología Educativa",
    summary: "Investigación que evalúa la efectividad de la gamificación en plataformas e-learning. Publicado en Computers & Education.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Interfaz e-learning gamificada", hint: "gamified e-learning" },
        { src: "https://placehold.co/600x400.png", alt: "Estudiantes interactuando online", hint: "students online" }
    ],
    demoUrl: "/portfolio/articles/ar4",
    demoLinkText: "Leer resumen",
    peerReview: "Revisión abierta",
    indexations: "Scopus Q1, SSCI",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://elsevier.com/computers-education/zzzz",
    publishedDocumentLabel: "Leer en Computers & Education",
  }
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
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
            <TabsTrigger value="software" className="flex items-center gap-2"><Briefcase className="h-4 w-4"/>Proyectos de Software</TabsTrigger>
            <TabsTrigger value="bookChapters" className="flex items-center gap-2"><BookCopy className="h-4 w-4"/>Capítulos de Libro</TabsTrigger>
            <TabsTrigger value="scientificArticles" className="flex items-center gap-2"><FileText className="h-4 w-4"/>Artículos Científicos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookChapters">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookChapterItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scientificArticles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scientificArticleItems.map(item => (
                <ProductionCard key={item.id} production={item} />
              ))}
            </div>
          </TabsContent>

        </Tabs>
         <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Más producciones y proyectos se añaden continuamente.
            </p>
        </div>
      </div>
    </>
  );
}
// The demoUrl fields for publications now point to an abstract or article page.
// The `ProductionCard` will handle the "Ver detalles" modal.
    
