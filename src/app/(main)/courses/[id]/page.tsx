
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Users, Info, ListChecks, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courseDetailsData = [
  { 
    id: "mendeley", 
    title: "Curso de Mendeley", 
    description: "El curso de Mendeley es esencial para investigadores y estudiantes, ya que enseña a organizar, compartir y citar referencias bibliográficas de manera eficiente.", 
    instructor: "Equipo SYNIA LAB", 
    price: "$ 45.00", 
    duration: "4 horas", 
    level: "Todos los niveles", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "laptop mendeley", 
    syllabus: ["Introducción a Mendeley", "Gestión de referencias", "Integración con procesadores de texto", "Colaboración y grupos", "Buenas prácticas de citación"], 
    benefits: ["Certificado de finalización", "Material descargable", "Acceso a ejemplos prácticos"] 
  },
  { 
    id: "jasp-statistics", 
    title: "Análisis estadístico con JASP", 
    description: "En el mundo de la investigación científica, el análisis estadístico es la clave para validar hipótesis y obtener conclusiones significativas. Este curso te introduce a JASP, una alternativa gratuita y potente a SPSS.", 
    instructor: "Dr. Alexandro R.", 
    price: "$ 45.00", 
    duration: "4 horas", 
    level: "Principiante/Intermedio", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "JASP statistics software", 
    syllabus: ["Introducción a JASP", "Tipos de datos y variables", "Estadística descriptiva", "Pruebas T y ANOVA", "Correlaciones y regresión básica"], 
    benefits: ["Certificado de finalización", "Ejercicios prácticos con datasets reales", "Guía de instalación y configuración"] 
  },
  { 
    id: "tesis-diseno-correlacional", 
    title: "Tesis de diseño correlacional", 
    description: "Descubre cómo analizar la relación entre variables y fortalecer tu investigación con un enfoque estadístico sólido y aplicado. Ideal para estudiantes desarrollando tesis con este tipo de diseño.", 
    instructor: "Wilson Sucari", 
    price: "$ 90.00", 
    duration: "10h 30m", 
    level: "Intermedio/Avanzado", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "research presentation man", 
    syllabus: ["Fundamentos del diseño correlacional", "Planteamiento del problema y hipótesis", "Recolección de datos", "Análisis de correlación (Pearson, Spearman)", "Interpretación de resultados y discusión"], 
    benefits: ["Certificado de finalización", "Plantillas para estructura de tesis", "Sesión de preguntas y respuestas grabada"] 
  },
  { 
    id: "atlas-ti-cualitativa", 
    title: "Atlas.ti elemental para la investigación cualitativa", 
    description: "En un mundo donde el análisis de datos cualitativos es clave para la investigación y la toma de decisiones, dominar Atlas.ti es fundamental. Aprende a gestionar, codificar y analizar tus datos cualitativos.", 
    instructor: "Lic. Mario P.", 
    price: "$ 55.00", 
    duration: "4 horas", 
    level: "Principiante", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "data analysis interface", 
    syllabus: ["Introducción a Atlas.ti", "Creación de proyectos y documentos", "Codificación y memos", "Análisis de redes y consultas", "Generación de reportes"], 
    benefits: ["Certificado de finalización", "Guía rápida de comandos", "Ejemplos de proyectos analizados"] 
  },
  { 
    id: "normas-apa-7ma", 
    title: "Normas Apa 7ma Edición", 
    description: "Este curso taller tiene como objetivo brindar herramientas necesarias para aplicar correctamente las Normas APA 7ma edición en trabajos académicos, artículos y tesis.", 
    instructor: "Equipo SYNIA LAB", 
    price: "$ 45.00", 
    duration: "8 horas", 
    level: "Todos los niveles", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "APA style guide book", 
    syllabus: ["Principios de la citación APA 7ma", "Formato de citas en el texto", "Elaboración de la lista de referencias", "Formato general del documento", "Tablas y figuras según APA 7ma"], 
    benefits: ["Certificado de finalización", "Guía de referencia rápida APA 7ma", "Ejemplos de citas para diversos tipos de fuentes"] 
  },
  { 
    id: "excel-docencia-investigacion", 
    title: "Excel Orientado a la Docencia Universitaria e Investigación Científica", 
    description: "Este curso está diseñado para enseñar el uso de Excel, proporcionando herramientas prácticas para la gestión de datos, análisis básicos y visualización, aplicables a la docencia e investigación.", 
    instructor: "Ing. Carla S.", 
    price: "$ 45.00", 
    duration: "8 horas", 
    level: "Principiante/Intermedio", 
    image: "https://placehold.co/800x450.png", 
    imageHint: "excel spreadsheet teaching", 
    syllabus: ["Funciones básicas y avanzadas", "Gestión de bases de datos en Excel", "Tablas dinámicas para análisis", "Creación de gráficos efectivos", "Automatización de tareas sencillas con macros"], 
    benefits: ["Certificado de finalización", "Plantillas de Excel útiles", "Ejercicios prácticos aplicados"] 
  },
];

async function getCourseData(id: string) {
  return courseDetailsData.find(course => course.id === id) || null;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const course = await getCourseData(params.id);
  if (!course) {
    return { title: "Curso no encontrado" };
  }
  return { title: course.title };
}

export default async function IndividualCoursePage({ params }: { params: { id: string } }) {
  const course = await getCourseData(params.id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <PageHeader title="Curso no encontrado" />
        <p className="text-lg text-muted-foreground">
          Lo sentimos, el curso que buscas no existe o no está disponible.
        </p>
        <Button asChild className="mt-8">
          <Link href="/courses">Volver a Cursos</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <PageHeader title={course.title} subtitle={`Impartido por: ${course.instructor}`} />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg overflow-hidden">
              <div className="relative h-72 w-full md:h-96">
                <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" data-ai-hint={course.imageHint}/>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">{course.description}</p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center"><ListChecks className="mr-2 h-5 w-5 text-primary"/>Contenido del Curso</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center"><Award className="mr-2 h-5 w-5 text-primary"/>Beneficios</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.benefits.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>

              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Detalles del Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-lg">
                  <DollarSign className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Precio:</span> {course.price}
                </div>
                <div className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Duración:</span> {course.duration}
                </div>
                 <div className="flex items-center text-lg">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold mr-2">Nivel:</span> {course.level}
                </div>
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105"
                >
                  Inscribirse Ahora
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  ¡Cupos limitados! Asegura tu lugar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return courseDetailsData.map((course) => ({
    id: course.id,
  }));
}
