
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductionCard, type ProductionItem } from "@/components/cards/ProductionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allProductions: ProductionItem[] = [
  // Software (Tomados del portafolio - los 3 primeros)
  {
    id: "sw1_home",
    title: "Sistema de Gestión Académica Avanzado",
    summary: "Desarrollo de una plataforma integral para la administración de instituciones educativas.",
    videoUrl: "https://www.youtube.com/embed/BBJa32lCaaY",
    category: "Software",
    thematicArea: "Educación",
    demoUrl: "/portfolio/software/sw1",
    demoLinkText: "Explorar App"
  },
  {
    id: "sw2_home",
    title: "App Móvil para Investigación de Campo",
    summary: "Aplicación intuitiva para la recolección y análisis de datos en tiempo real.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Software",
    thematicArea: "Investigación Aplicada",
    demoUrl: "/portfolio/software/sw2",
    demoLinkText: "Explorar App"
  },
   {
    id: "sw3_home",
    title: "Plataforma E-learning Interactiva",
    summary: "Solución completa para cursos online, con seguimiento de progreso y herramientas colaborativas.",
    videoUrl: "https://www.youtube.com/embed/u_xRemrA9oU",
    category: "Software",
    thematicArea: "Educación",
    demoUrl: "/portfolio/software/sw3",
    demoLinkText: "Explorar App"
  },
  // Capítulos de Libro (Tomados del portafolio - los 3 primeros)
  {
    id: "cl1_home",
    title: "Metodologías Ágiles en el Desarrollo de Software",
    summary: "Capítulo de libro que explora la aplicación práctica de Scrum y Kanban en equipos de desarrollo.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Portada libro metodologías ágiles", hint: "agile book cover" },
        { src: "https://placehold.co/600x400.png", alt: "Diagrama de Scrum", hint: "scrum diagram" }
    ],
    category: "Capítulo de Libro",
    thematicArea: "Ingeniería de Software",
    demoUrl: "/portfolio/articles/cl1", // Corresponds to ProductionItem.id 'cl1' from portfolio
    demoLinkText: "Leer resumen", // This text is not directly used by ProductionCard for publications
    peerReview: "Doble ciego",
    certification: "Certificado de publicación disponible",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl1",
    publishedDocumentLabel: "Ver en Editorial XYZ",
  },
  {
    id: "cl2_home",
    title: "Desarrollo Sostenible y Tecnología: Un Enfoque Integrado",
    category: "Capítulo de Libro",
    thematicArea: "Sostenibilidad y TIC",
    summary: "Capítulo que examina el papel crucial de la tecnología en la consecución de los Objetivos de Desarrollo Sostenible (ODS).",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "ODS y tecnología", hint: "SDG technology" },
        { src: "https://placehold.co/600x400.png", alt: "Tecnología verde", hint: "green tech" }
    ],
    demoUrl: "/portfolio/articles/cl2", // Corresponds to ProductionItem.id 'cl2' from portfolio
    demoLinkText: "Leer resumen",
    peerReview: "Revisado por comité editorial",
    certification: "Incluido en libro certificado ISBN: 978-X-XXXXX-XX-X",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl2",
    publishedDocumentLabel: "Consultar en Repositorio Institucional",
  },
  {
    id: "cl3_home",
    title: "Innovación en Modelos de Negocio Digitales",
    category: "Capítulo de Libro",
    thematicArea: "Emprendimiento Digital",
    summary: "Explora cómo la transformación digital está redefiniendo los modelos de negocio y creando nuevas oportunidades.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Negocios digitales", hint: "digital business" },
        { src: "https://placehold.co/600x400.png", alt: "Innovación tecnológica", hint: "tech innovation" }
    ],
    demoUrl: "/portfolio/articles/cl3", // Corresponds to ProductionItem.id 'cl3' from portfolio
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    certification: "Certificado de autoría",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl3",
    publishedDocumentLabel: "Acceder a través de Publicaciones Académicas S.A.",
  },
  // Artículos Científicos (Tomados del portafolio - los 3 primeros)
 {
    id: "ar1_home",
    title: "Impacto de la IA en la Educación Superior",
    summary: "Análisis exhaustivo de cómo la inteligencia artificial está transformando los paradigmas educativos. Publicado en Revista Q3 de Innovación Educativa.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de IA en educación", hint: "AI education chart" },
        { src: "https://placehold.co/600x400.png", alt: "Estudiantes con tecnología", hint: "students technology" }
    ],
    category: "Artículo Científico",
    thematicArea: "Inteligencia Artificial",
    demoUrl: "/portfolio/articles/ar1", // Corresponds to ProductionItem.id 'ar1' from portfolio
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scopus Q3, Web of Science ESCI",
    indexationType: "Scopus",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/journal.xxxx",
    publishedDocumentLabel: "Ver en Journal de Innovación Educativa",
  },
  {
    id: "ar2_home",
    title: "Blockchain y la Seguridad de Datos en Salud",
    summary: "Investigación sobre el potencial de blockchain para asegurar la integridad de registros médicos. Publicado en JMIR.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Red Blockchain", hint: "blockchain network" },
        { src: "https://placehold.co/600x400.png", alt: "Datos médicos seguros", hint: "secure medical data" }
    ],
    category: "Artículo Científico",
    thematicArea: "Ciberseguridad en Salud",
    demoUrl: "/portfolio/articles/ar2", // Corresponds to ProductionItem.id 'ar2' from portfolio
    demoLinkText: "Leer resumen",
    peerReview: "Simple ciego",
    indexations: "PubMed, Scopus Q2",
    indexationType: "Scopus",
    certification: "Disponible a solicitud",
    publishedDocumentUrl: "https://jmir.org/article/xxxx",
    publishedDocumentLabel: "Leer en JMIR",
  },
  {
    id: "ar3_home",
    title: "Análisis de Sentimiento en Redes Sociales para Predicción de Tendencias",
    category: "Artículo Científico",
    thematicArea: "Procesamiento de Lenguaje Natural",
    summary: "Estudio sobre cómo el análisis de sentimiento de datos de redes sociales puede predecir tendencias de mercado. Publicado en Journal of Data Science.",
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de análisis de sentimiento", hint: "sentiment chart" },
        { src: "https://placehold.co/600x400.png", alt: "Datos de redes sociales", hint: "social data" }
    ],
    demoUrl: "/portfolio/articles/ar3", // Corresponds to ProductionItem.id 'ar3' from portfolio
    demoLinkText: "Leer resumen",
    peerReview: "Doble ciego",
    indexations: "Scielo, DOAJ",
    indexationType: "Scielo",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://journaldatascience.org/article/yyyy",
    publishedDocumentLabel: "Ver en Journal of Data Science",
  },
];

const MAX_ITEMS_PREVIEW = 3;

export function ProduccionesDisponibles() {
  const [activeTab, setActiveTab] = useState<string>("software");

  const categories = ["Software", "Capítulos de Libro", "Artículos Científicos"];
  const tabValues = ["software", "libros", "articulos"];

  const getProductionsForCategory = (categoryName: ProductionItem['category']) => {
    return allProductions.filter(p => p.category === categoryName).slice(0, MAX_ITEMS_PREVIEW);
  };

  return (
    <Tabs defaultValue={tabValues[0]} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
        {categories.map((cat, index) => (
          <TabsTrigger key={tabValues[index]} value={tabValues[index]}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat, index) => (
        <TabsContent key={tabValues[index]} value={tabValues[index]}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getProductionsForCategory(cat as ProductionItem['category']).map((production) => (
              <ProductionCard key={production.id} production={production} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                Ver más en Portafolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

    