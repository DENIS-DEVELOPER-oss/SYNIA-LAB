
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Users, Info, ListChecks, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data fetching function - replace with actual data fetching
async function getCourseData(id: string) {
  // In a real app, fetch this from a DB or CMS
  const courses = [
    { id: "nextjs-pro", title: "Next.js para Profesionales", description: "Domina Next.js y crea aplicaciones web modernas, rápidas y escalables. Desde los fundamentos hasta despliegues en producción.", instructor: "Dr. Alexandro R.", price: "S/ 499", duration: "40 horas", level: "Intermedio/Avanzado", image: "https://placehold.co/800x450.png", imageHint: "web development", syllabus: ["Introducción a Next.js", "Routing y Layouts", "Data Fetching", "Server Components", "Autenticación", "Despliegue"], benefits: ["Certificado de finalización", "Acceso a comunidad privada", "Material descargable"] },
    { id: "academic-writing", title: "Redacción Científica de Alto Impacto", description: "Aprende las técnicas y estrategias para escribir artículos científicos que logren publicación en revistas de prestigio.", instructor: "Lic. Mario P.", price: "S/ 350", duration: "24 horas", level: "Todos los niveles", image: "https://placehold.co/800x450.png", imageHint: "academic writing", syllabus: ["Estructura de un artículo", "Estilo y lenguaje científico", "Manejo de referencias", "Proceso de revisión por pares"], benefits: ["Revisión de un borrador", "Plantillas de artículos", "Ejemplos prácticos"] },
    { id: "thesis-masterclass", title: "Masterclass: Tu Tesis Exitosa", description: "Un curso intensivo que te guiará paso a paso en la elaboración de tu tesis, desde la idea inicial hasta la sustentación.", instructor: "Equipo SYNIA LAB", price: "S/ 599", duration: "30 horas", level: "Pregrado/Maestría", image: "https://placehold.co/800x450.png", imageHint: "graduation thesis", syllabus: ["Definición del problema", "Marco teórico", "Metodología", "Análisis de resultados", "Redacción y formato", "Preparación para sustentación"], benefits: ["Asesoría personalizada (1 sesión)", "Grupo de estudio", "Guías y checklists"] },
  ];
  return courses.find(course => course.id === id) || null;
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
                <Button size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
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

// This function is needed for Next.js to know which dynamic paths to pre-render if using SSG.
// For SSR, this might not be strictly necessary, but good practice.
export async function generateStaticParams() {
  const courses = [ // This should come from your data source
    { id: "nextjs-pro" },
    { id: "academic-writing" },
    { id: "thesis-masterclass" },
  ];
 
  return courses.map((course) => ({
    id: course.id,
  }));
}
