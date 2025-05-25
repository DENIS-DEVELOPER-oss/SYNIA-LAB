
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductionCard, type ProductionItem } from "@/components/cards/ProductionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allProductions: ProductionItem[] = [
  // Software
  { id: "sw1_home", title: "Plataforma IA para Análisis de Datos", category: "Software", thematicArea: "Inteligencia Artificial", summary: "Sistema avanzado que utiliza machine learning para procesar y visualizar grandes volúmenes de datos en tiempo real.", videoUrl: "https://www.youtube.com/embed/BBJa32lCaaY", demoUrl: "/portfolio/software/sw1", demoLinkText: "Explorar App" },
  { id: "sw2_home", title: "App Móvil Educativa Interactiva", category: "Software", thematicArea: "Educación", summary: "Aplicación móvil para iOS y Android diseñada para mejorar el aprendizaje mediante gamificación y contenido interactivo.", videoUrl: "https://www.youtube.com/embed/W_xKx_0f458", demoUrl: "/portfolio/software/sw2", demoLinkText: "Explorar App" },
  { id: "sw3_home", title: "Sistema de Gestión de Proyectos Ágil", category: "Software", thematicArea: "Productividad", summary: "Herramienta web para la gestión de equipos y proyectos utilizando metodologías ágiles como Scrum y Kanban.", videoUrl: "https://www.youtube.com/embed/UtyKe22z0mM", demoUrl: "/portfolio/software/sw3", demoLinkText: "Explorar App" },
  { id: "sw4_home", title: "E-commerce Personalizable", category: "Software", thematicArea: "Negocios Digitales", summary: "Solución de comercio electrónico completa, adaptable a diversas necesidades y con integraciones de pasarelas de pago.", videoUrl: "https://www.youtube.com/embed/xVQZxYl8iK8", demoUrl: "/portfolio/software/sw4", demoLinkText: "Explorar App" },
  // Capítulos de Libro
  { 
    id: "cl1_home", 
    title: "IA en la Transformación Educativa", 
    category: "Capítulo de Libro", 
    thematicArea: "Educación y Tecnología", 
    summary: "Análisis profundo sobre el impacto y las aplicaciones de la inteligencia artificial en los modelos educativos contemporáneos.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "IA y educación", hint: "AI education" },
        { src: "https://placehold.co/600x400.png", alt: "Futuro de la educación", hint: "future education" }
    ],
    demoUrl: "/portfolio/articles/cl1", 
    demoLinkText: "Leer Fragmento",
    peerReview: "Doble ciego",
    certification: "Certificado editorial",
    publishedDocumentUrl: "https://example.com/link-to-chapter-cl1-home",
    publishedDocumentLabel: "Consultar en Editorial Académica",
  },
  { 
    id: "cl2_home", 
    title: "Ética en el Desarrollo de Software", 
    category: "Capítulo de Libro", 
    thematicArea: "Ética Profesional", 
    summary: "Discusión sobre los dilemas éticos y las mejores prácticas en la creación de software responsable.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Código ético", hint: "ethical code" },
        { src: "https://placehold.co/600x400.png", alt: "Desarrollo responsable", hint: "responsible development" }
    ],
    demoUrl: "/portfolio/articles/cl2", 
    demoLinkText: "Acceder Capítulo",
    peerReview: "Revisión por pares simple",
    certification: "Incluido en libro con ISBN",
    publishedDocumentLabel: "Disponible en biblioteca digital",
  },
  // Artículos Científicos
  { 
    id: "ac1_home", 
    title: "Modelo Predictivo para Deserción Estudiantil", 
    category: "Artículo Científico", 
    thematicArea: "Data Science", 
    summary: "Artículo publicado en revista Q2 que presenta un modelo de machine learning para predecir la deserción estudiantil.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Gráfico de predicción", hint: "prediction chart" },
        { src: "https://placehold.co/600x400.png", alt: "Análisis de datos educativos", hint: "education data" }
    ],
    demoUrl: "/portfolio/articles/ac1", 
    demoLinkText: "Leer Artículo (PDF)",
    peerReview: "Doble ciego",
    indexations: "Scopus Q2, Latindex",
    certification: "Certificado de publicación",
    publishedDocumentUrl: "https://doi.org/10.xxxx/journal.xxxx.home",
    publishedDocumentLabel: "Ver en Revista Científica XYZ",
  },
  { 
    id: "ac2_home", 
    title: "Impacto de las Redes Sociales en Jóvenes", 
    category: "Artículo Científico", 
    thematicArea: "Ciencias Sociales", 
    summary: "Investigación sobre los efectos psicosociales del uso de redes sociales en la población adolescente.", 
    imageUrls: [
        { src: "https://placehold.co/600x400.png", alt: "Jóvenes y redes sociales", hint: "youth social media" },
        { src: "https://placehold.co/600x400.png", alt: "Salud mental y tecnología", hint: "mental health tech" }
    ],
    demoUrl: "/portfolio/articles/ac2", 
    demoLinkText: "Ver Publicación",
    peerReview: "Simple ciego",
    indexations: "Scielo, Redalyc",
    certification: "No aplica",
    publishedDocumentLabel: "Artículo disponible en ResearchGate",
  },
];

const MAX_ITEMS_PREVIEW = 4;

export function ProduccionesDisponibles() {
  const [activeTab, setActiveTab] = useState<string>("software");

  const categories = ["Software", "Capítulos de Libro", "Artículos Científicos"];
  const tabValues = ["software", "libros", "articulos"];

  const getProductionsForCategory = (categoryName: ProductionItem['category']) => {
    return allProductions.filter(p => p.category === categoryName).slice(0, MAX_ITEMS_PREVIEW);
  };

  return (
    <Tabs defaultValue={tabValues[0]} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        {categories.map((cat, index) => (
          <TabsTrigger key={tabValues[index]} value={tabValues[index]}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat, index) => (
        <TabsContent key={tabValues[index]} value={tabValues[index]}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

