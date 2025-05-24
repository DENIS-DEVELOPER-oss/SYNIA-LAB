
import { PageHeader } from "@/components/shared/PageHeader";
import { GenericCard } from "@/components/shared/GenericCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DollarSign, Clock, Users } from "lucide-react";

const courses = [
  {
    id: "nextjs-pro",
    title: "Next.js para Profesionales",
    description: "Domina Next.js y crea aplicaciones web modernas, rápidas y escalables. Desde los fundamentos hasta despliegues en producción.",
    price: "S/ 499",
    duration: "40 horas",
    students: 120,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "coding screen",
    category: "Desarrollo Web",
  },
  {
    id: "academic-writing",
    title: "Redacción Científica de Alto Impacto",
    description: "Aprende las técnicas y estrategias para escribir artículos científicos que logren publicación en revistas de prestigio.",
    price: "S/ 350",
    duration: "24 horas",
    students: 85,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing research",
    category: "Investigación",
  },
  {
    id: "thesis-masterclass",
    title: "Masterclass: Tu Tesis Exitosa",
    description: "Un curso intensivo que te guiará paso a paso en la elaboración de tu tesis, desde la idea inicial hasta la sustentación.",
    price: "S/ 599",
    duration: "30 horas",
    students: 95,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "student study",
    category: "Académico",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Nuestros Cursos"
        subtitle="Capacítate con expertos y adquiere las habilidades que necesitas para destacar."
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
                <div className="w-full">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                        <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1 text-green-500"/> {course.price}</span>
                        <span className="flex items-center"><Clock className="h-4 w-4 mr-1"/> {course.duration}</span>
                        <span className="flex items-center"><Users className="h-4 w-4 mr-1"/> {course.students}</span>
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
