
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
    demoUrl: "/portfolio/software/sw1", 
    demoLinkText: "Explorar App" 
  },
  { 
    id: "sw2", 
    title: "App Móvil para Investigación de Campo", 
    summary: "Aplicación intuitiva para la recolección y análisis de datos en tiempo real.", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Different placeholder
    category: "Software", 
    thematicArea: "Investigación Aplicada", 
    demoUrl: "/portfolio/software/sw2",
    demoLinkText: "Explorar App" 
  },
   { 
    id: "sw3", 
    title: "Plataforma E-learning Interactiva", 
    summary: "Solución completa para cursos online, con seguimiento de progreso y herramientas colaborativas.", 
    videoUrl: "https://www.youtube.com/embed/u_xRemrA9oU", // Different placeholder
    category: "Software", 
    thematicArea: "Educación Digital", 
    demoUrl: "/portfolio/software/sw3",
    demoLinkText: "Explorar App" 
  },
  { 
    id: "sw4", 
    title: "Herramienta de Análisis de Datos con IA", 
    summary: "Software de escritorio para el análisis predictivo y visualización de grandes conjuntos de datos utilizando IA.", 
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Different placeholder
    category: "Software", 
    thematicArea: "Inteligencia Artificial", 
    demoUrl: "/portfolio/software/sw4",
    demoLinkText: "Explorar App" 
  },
  { 
    id: "sw5", 
    title: "Plataforma de Telemedicina Segura", 
    summary: "Sistema web y móvil para consultas médicas remotas, cumpliendo con estándares de seguridad y privacidad de datos.", 
    videoUrl: "https://www.youtube.com/embed/6g3g0_C3oas", // Different placeholder
    category: "Software", 
    thematicArea: "Salud Digital", 
    demoUrl: "/portfolio/software/sw5",
    demoLinkText: "Explorar App" 
  },
  { 
    id: "sw6", 
    title: "Simulador de Procesos Industriales", 
    summary: "Aplicación especializada para la simulación y optimización de procesos en la industria manufacturera.", 
    videoUrl: "https://www.youtube.com/embed/Yx6sTUnPz4E", // Different placeholder
    category: "Software", 
    thematicArea: "Ingeniería y Simulación", 
    demoUrl: "/portfolio/software/sw6",
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
    demoUrl: "/portfolio/articles/cl1", 
    demoLinkText: "Leer resumen", 
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
  {
    id: "cl3",
    title: "Innovación en Modelos de Negocio Digitales",
    category: "Capítulo de Libro",
    thematicArea: "Emprendimiento Digital",
    summary: "Explora cómo la transformación digital está redefiniendo los modelos de negocio y creando nuevas oportunidades.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Negocios digitales", hint: "digital business" },
        { src: "https://placehold.co/600x400.png", alt: "Innovación tecnológica", hint: "tech innovation" }
    ],
    demoUrl: "/portfolio/articles/cl3",
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    certification: "Certificado de autoría",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl3",
    publishedDocumentLabel: "Acceder a través de Publicaciones Académicas S.A.",
  },
  {
    id: "cl4",
    title: "La Psicología del Usuario en Interfaces Web",
    category: "Capítulo de Libro",
    thematicArea: "UX/UI Design",
    summary: "Un análisis sobre cómo los principios psicológicos influyen en el diseño de experiencias de usuario efectivas.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Diseño UX", hint: "UX design" },
        { src: "https://placehold.co/600x400.png", alt: "Psicología del usuario", hint: "user psychology" }
    ],
    demoUrl: "/portfolio/articles/cl4",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    certification: "Publicado en \"Avances en Diseño Interactivo\"",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl4",
    publishedDocumentLabel: "Ver en Editorial Tecnológica",
  },
  {
    id: "cl5",
    title: "Big Data y su Aplicación en el Sector Salud",
    category: "Capítulo de Libro",
    thematicArea: "Salud Digital",
    summary: "Investigación sobre el uso de grandes volúmenes de datos para mejorar diagnósticos y tratamientos médicos.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Big Data en salud", hint: "health big data" },
        { src: "https://placehold.co/600x400.png", alt: "Análisis de datos médicos", hint: "medical data analysis" }
    ],
    demoUrl: "/portfolio/articles/cl5",
    demoLinkText: "Leer resumen",
    peerReview: "Revisado por pares expertos",
    certification: "ISBN: 978-1-23456-78-9",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl5",
    publishedDocumentLabel: "Disponible en Biblioteca Médica Central",
  },
  {
    id: "cl6",
    title: "Ciberseguridad en la Era del IoT",
    category: "Capítulo de Libro",
    thematicArea: "Seguridad Informática",
    summary: "Desafíos y soluciones para proteger dispositivos conectados en el Internet de las Cosas.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Seguridad IoT", hint: "IoT security" },
        { src: "https://placehold.co/600x400.png", alt: "Redes conectadas", hint: "connected networks" }
    ],
    demoUrl: "/portfolio/articles/cl6",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    certification: "Publicación en \"Retos de Ciberseguridad Moderna\"",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl6",
    publishedDocumentLabel: "Consultar Editorial Segura",
  },
  {
    id: "cl7",
    title: "Educación Virtual: Estrategias y Herramientas",
    category: "Capítulo de Libro",
    thematicArea: "Tecnología Educativa",
    summary: "Guía práctica para la implementación efectiva de programas de educación a distancia.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Aula virtual", hint: "virtual classroom" },
        { src: "https://placehold.co/600x400.png", alt: "Herramientas e-learning", hint: "e-learning tools" }
    ],
    demoUrl: "/portfolio/articles/cl7",
    demoLinkText: "Leer resumen",
    peerReview: "Revisión editorial",
    certification: "ISBN: 978-3-16-148410-0",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl7",
    publishedDocumentLabel: "Ver en Ediciones Futuro",
  },
  {
    id: "cl8",
    title: "Inteligencia Artificial y el Futuro del Trabajo",
    category: "Capítulo de Libro",
    thematicArea: "Inteligencia Artificial",
    summary: "Análisis de cómo la IA está transformando el mercado laboral y las habilidades requeridas.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "IA en el trabajo", hint: "AI workplace" },
        { src: "https://placehold.co/600x400.png", alt: "Automatización", hint: "automation future" }
    ],
    demoUrl: "/portfolio/articles/cl8",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl8",
    publishedDocumentLabel: "Editorial Progreso",
  },
  {
    id: "cl9",
    title: "Marketing Digital Basado en Datos",
    category: "Capítulo de Libro",
    thematicArea: "Marketing",
    summary: "Estrategias para utilizar el análisis de datos en la optimización de campañas de marketing digital.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Datos de marketing", hint: "marketing data" },
        { src: "https://placehold.co/600x400.png", alt: "Análisis de campañas", hint: "campaign analytics" }
    ],
    demoUrl: "/portfolio/articles/cl9",
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl9",
    publishedDocumentLabel: "Marketing Insights Press",
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
    indexationType: "Scopus",
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
    indexationType: "Scopus",
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
    indexationType: "Scielo",
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
    indexationType: "Scopus",
  },
  {
    id: "ar5",
    title: "Privacidad de Datos en el Metaverso: Riesgos y Estrategias",
    category: "Artículo Científico",
    thematicArea: "Privacidad Digital",
    summary: "Un estudio sobre los nuevos desafíos de privacidad que plantea el metaverso y cómo abordarlos. Publicado en International Journal of Human-Computer Interaction.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Metaverso abstracto", hint: "metaverse abstract" },
        { src: "https://placehold.co/600x400.png", alt: "Escudo de privacidad", hint: "privacy shield" }
    ],
    demoUrl: "/portfolio/articles/ar5",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scopus Q2, ACM Digital Library",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/ijhci.xxxx",
    publishedDocumentLabel: "Ver en IJHCI",
    indexationType: "Scopus",
  },
  {
    id: "ar6",
    title: "Modelos de Lenguaje a Gran Escala (LLMs) para la Generación de Contenido Académico",
    category: "Artículo Científico",
    thematicArea: "Inteligencia Artificial Generativa",
    summary: "Investigación sobre la capacidad y limitaciones de los LLMs en la creación de textos académicos. Publicado en AI & Society.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Cerebro IA", hint: "AI brain" },
        { src: "https://placehold.co/600x400.png", alt: "Texto generado por IA", hint: "AI generated text" }
    ],
    demoUrl: "/portfolio/articles/ar6",
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    indexations: "Scopus Q3, SpringerLink",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/aisociety.xxxx",
    publishedDocumentLabel: "Ver en AI & Society",
    indexationType: "Scopus",
  },
  {
    id: "ar7",
    title: "Impacto Socioeconómico de las Fintech en Mercados Emergentes",
    category: "Artículo Científico",
    thematicArea: "Tecnología Financiera",
    summary: "Análisis del impacto de las tecnologías financieras en la inclusión y el desarrollo económico en países emergentes. Publicado en Journal of Emerging Markets Finance.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Fintech concepto", hint: "fintech concept" },
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de crecimiento económico", hint: "economic growth chart" }
    ],
    demoUrl: "/portfolio/articles/ar7",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scielo, Web of Science Q4, EBSCO", // Scielo primary for this example
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/jemf.xxxx",
    publishedDocumentLabel: "Ver en JEMF",
    indexationType: "Scielo",
  },
  {
    id: "ar8",
    title: "Uso de Realidad Aumentada para la Formación Profesional en Ingeniería",
    category: "Artículo Científico",
    thematicArea: "Realidad Aumentada",
    summary: "Estudio sobre la efectividad de la realidad aumentada en la mejora del aprendizaje práctico en carreras de ingeniería. Publicado en IEEE Transactions on Education.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Ingeniero con AR", hint: "engineer AR" },
        { src: "https://placehold.co/600x400.png", alt: "Simulación AR", hint: "AR simulation" }
    ],
    demoUrl: "/portfolio/articles/ar8",
    demoLinkText: "Leer resumen",
    peerReview: "Revisión por pares rigurosa",
    indexations: "Scopus Q1, IEEE Xplore",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/ieee.edu.xxxx",
    publishedDocumentLabel: "Ver en IEEE Transactions on Education",
    indexationType: "Scopus",
  },
  {
    id: "ar9",
    title: "Algoritmos de Recomendación Personalizada en Plataformas de E-commerce",
    category: "Artículo Científico",
    thematicArea: "Machine Learning",
    summary: "Comparativa de diferentes algoritmos de recomendación y su impacto en la experiencia del usuario y ventas en e-commerce. Publicado en Expert Systems with Applications.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Sistema de recomendación", hint: "recommendation system" },
        { src: "https://placehold.co/600x400.png", alt: "Compras online", hint: "online shopping" }
    ],
    demoUrl: "/portfolio/articles/ar9",
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scielo, Scopus Q1, ScienceDirect", // Scielo primary for this example
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/eswa.xxxx",
    publishedDocumentLabel: "Ver en Expert Systems with Applications",
    indexationType: "Scielo",
  }
];


export default function PortfolioPage() {
  const scieloArticles = scientificArticleItems.filter(item => item.indexationType === 'Scielo');
  const scopusArticles = scientificArticleItems.filter(item => item.indexationType === 'Scopus');

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
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Indexados en Scielo</h2>
              {scieloArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {scieloArticles.map(item => (
                    <ProductionCard key={item.id} production={item} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center">No hay artículos de Scielo disponibles por el momento.</p>
              )}
            </div>

            <hr className="my-12" />

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Indexados en Scopus</h2>
              {scopusArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scopusArticles.map(item => (
                  <ProductionCard key={item.id} production={item} />
                ))}
              </div>
              ) : (
                <p className="text-muted-foreground text-center">No hay artículos de Scopus disponibles por el momento.</p>
              )}
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
    

