
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductionCard, type ProductionItem } from "@/components/cards/ProductionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allProductions: ProductionItem[] = [
  // Software
  { id: "sw1", title: "Plataforma IA para Análisis de Datos", category: "Software", thematicArea: "Inteligencia Artificial", summary: "Sistema avanzado que utiliza machine learning para procesar y visualizar grandes volúmenes de datos en tiempo real.", videoUrl: "https://www.youtube.com/embed/BBJa32lCaaY", demoUrl: "/portfolio/software/sw1", demoLinkText: "Ver Demo" },
  { id: "sw2", title: "App Móvil Educativa Interactiva", category: "Software", thematicArea: "Educación", summary: "Aplicación móvil para iOS y Android diseñada para mejorar el aprendizaje mediante gamificación y contenido interactivo.", videoUrl: "https://www.youtube.com/embed/W_xKx_0f458", demoUrl: "/portfolio/software/sw2", demoLinkText: "Explorar App" },
  { id: "sw3", title: "Sistema de Gestión de Proyectos Ágil", category: "Software", thematicArea: "Productividad", summary: "Herramienta web para la gestión de equipos y proyectos utilizando metodologías ágiles como Scrum y Kanban.", videoUrl: "https://www.youtube.com/embed/UtyKe22z0mM", demoUrl: "/portfolio/software/sw3", demoLinkText: "Probar Sistema" },
  { id: "sw4", title: "E-commerce Personalizable", category: "Software", thematicArea: "Negocios Digitales", summary: "Solución de comercio electrónico completa, adaptable a diversas necesidades y con integraciones de pasarelas de pago.", videoUrl: "https://www.youtube.com/embed/xVQZxYl8iK8", demoUrl: "/portfolio/software/sw4", demoLinkText: "Ver Tienda Modelo" },
  // Capítulos de Libro
  { id: "cl1", title: "IA en la Transformación Educativa", category: "Capítulo de Libro", thematicArea: "Educación y Tecnología", summary: "Análisis profundo sobre el impacto y las aplicaciones de la inteligencia artificial en los modelos educativos contemporáneos.", videoUrl: "https://www.youtube.com/embed/XSAcYk4vF9Y", demoUrl: "/portfolio/articles/cl1", demoLinkText: "Leer Fragmento" },
  { id: "cl2", title: "Ética en el Desarrollo de Software", category: "Capítulo de Libro", thematicArea: "Ética Profesional", summary: "Discusión sobre los dilemas éticos y las mejores prácticas en la creación de software responsable.", videoUrl: "https://www.youtube.com/embed/Q8CON4pbHts", demoUrl: "/portfolio/articles/cl2", demoLinkText: "Acceder Capítulo" },
  { id: "cl3", title: "Big Data y su Aplicación en Salud", category: "Capítulo de Libro", thematicArea: "Salud Digital", summary: "Exploración de cómo el Big Data está revolucionando la investigación y la práctica médica.", videoUrl: "https://www.youtube.com/embed/L_2sk84qK6M", demoUrl: "/portfolio/articles/cl3", demoLinkText: "Consultar Contenido" },
  { id: "cl4", title: "Ciberseguridad en la Era Digital", category: "Capítulo de Libro", thematicArea: "Seguridad Informática", summary: "Guía esencial sobre los principios de ciberseguridad para proteger activos digitales en el entorno actual.", videoUrl: "https://www.youtube.com/embed/fQGzKoq899k", demoUrl: "/portfolio/articles/cl4", demoLinkText: "Ver Resumen Extendido" },
  // Artículos Científicos
  { id: "ac1", title: "Modelo Predictivo para Deserción Estudiantil", category: "Artículo Científico", thematicArea: "Data Science", summary: "Artículo publicado en revista Q2 que presenta un modelo de machine learning para predecir la deserción estudiantil.", videoUrl: "https://www.youtube.com/embed/V0yXAnBAOqE", demoUrl: "/portfolio/articles/ac1", demoLinkText: "Leer Artículo (PDF)" },
  { id: "ac2", title: "Impacto de las Redes Sociales en Jóvenes", category: "Artículo Científico", thematicArea: "Ciencias Sociales", summary: "Investigación sobre los efectos psicosociales del uso de redes sociales en la población adolescente.", videoUrl: "https://www.youtube.com/embed/3BYPlcJ55L0", demoUrl: "/portfolio/articles/ac2", demoLinkText: "Ver Publicación" },
  { id: "ac3", title: "Usabilidad de Interfaces en Software Médico", category: "Artículo Científico", thematicArea: "Interacción Humano-Computador", summary: "Estudio comparativo de la usabilidad en diferentes tipos de software utilizados en el sector salud.", videoUrl: "https://www.youtube.com/embed/JtcjEJw9fCs", demoUrl: "/portfolio/articles/ac3", demoLinkText: "Descargar Estudio" },
  { id: "ac4", title: "Blockchain para Trazabilidad Alimentaria", category: "Artículo Científico", thematicArea: "Tecnologías Emergentes", summary: "Propuesta de un sistema basado en blockchain para mejorar la trazabilidad y seguridad en la cadena de suministro de alimentos.", videoUrl: "https://www.youtube.com/embed/4yudE25jylE", demoUrl: "/portfolio/articles/ac4", demoLinkText: "Acceder Investigación" },
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
