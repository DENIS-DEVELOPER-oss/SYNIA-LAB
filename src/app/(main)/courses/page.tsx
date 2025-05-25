
import { PageHeader } from "@/components/shared/PageHeader";
import { GenericCard } from "@/components/shared/GenericCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock } from "lucide-react";

const courses = [
  {
    id: "mendeley",
    title: "Curso de Mendeley",
    description: "El curso de Mendeley es esencial para investigadores y estudiantes, ya que enseña a organizar, compartir y citar referencias bibliográficas de manera eficiente.",
    price: "$ 45.00",
    duration: "4 horas", // From 04:00:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "laptop mendeley",
    category: "Investigación",
  },
  {
    id: "jasp-statistics",
    title: "Análisis estadístico con JASP",
    description: "En el mundo de la investigación científica, el análisis estadístico es la clave para validar hipótesis y obtener conclusiones significativas.",
    price: "$ 45.00",
    duration: "4 horas", // From 04:02:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "JASP statistics software",
    category: "Estadística",
  },
  {
    id: "tesis-diseno-correlacional",
    title: "Tesis de diseño correlacional",
    description: "Descubre cómo analizar la relación entre variables y fortalecer tu investigación con un enfoque estadístico sólido y aplicado.",
    price: "$ 90.00",
    duration: "10h 30m", // From 10:32:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "research presentation man",
    category: "Tesis",
  },
  {
    id: "atlas-ti-cualitativa",
    title: "Atlas.ti elemental para la investigación cualitativa",
    description: "En un mundo donde el análisis de datos cualitativos es clave para la investigación y la toma de decisiones, dominar Atlas.ti es fundamental.",
    price: "$ 55.00",
    duration: "4 horas", // From 04:02:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data analysis interface",
    category: "Investigación Cualitativa",
  },
  {
    id: "normas-apa-7ma",
    title: "Normas Apa 7ma Edición",
    description: "Este curso taller tiene como objetivo brindar herramientas necesarias para aplicar correctamente las Normas APA 7ma edición en trabajos académicos.",
    price: "$ 45.00",
    duration: "8 horas", // From 08:00:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "APA style guide book",
    category: "Redacción Académica",
  },
  {
    id: "excel-docencia-investigacion",
    title: "Excel Orientado a la Docencia Universitaria e Investigación Científica",
    description: "Este curso está diseñado para enseñar el uso de Excel, proporcionando herramientas prácticas para docentes e investigadores.",
    price: "$ 45.00",
    duration: "8 horas", // From 08:00:00
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "excel spreadsheet teaching",
    category: "Herramientas",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Cursos Online"
        subtitle="Accede a una experiencia educativa flexible, adaptada a tus necesidades, donde y cuando lo necesites, impulsando tu desarrollo profesional."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <GenericCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              imageHint={course.imageHint}
              category={course.category}
              footerContent={
                <div className="w-full pt-2">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                        <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1.5 text-primary" /> {course.duration}
                        </span>
                        <span className="font-semibold text-lg text-foreground">{course.price}</span>
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href={`/courses/${course.id}`}>Ver Detalles e Inscribirse</Link>
                    </Button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
