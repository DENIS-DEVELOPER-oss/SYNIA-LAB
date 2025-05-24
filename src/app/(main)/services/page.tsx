
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, BookText, GraduationCap, CheckSquare } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "software-development",
    title: "Desarrollo de Software Personalizado",
    description: "Creamos soluciones de software a medida, desde aplicaciones web y móviles hasta sistemas empresariales complejos, utilizando las últimas tecnologías para garantizar rendimiento, escalabilidad y seguridad.",
    icon: <Code className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "coding development"
  },
  {
    id: "academic-production",
    title: "Producción de Artículos Científicos y Libros",
    description: "Apoyamos en la redacción, edición y publicación de artículos científicos, capítulos de libros y ensayos. Transformamos tu investigación en conocimiento accesible y de alto impacto.",
    icon: <BookText className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "academic books"
  },
  {
    id: "thesis-advisory",
    title: "Asesoría de Tesis (Pregrado, Maestría, Doctorado)",
    description: "Ofrecemos acompañamiento integral en todas las etapas de tu tesis, desde la elección del tema hasta la sustentación. Nuestros expertos te guiarán para asegurar un trabajo de calidad.",
    icon: <GraduationCap className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "student graduation"
  },
  {
    id: "journal-publishing",
    title: "Publicación en Revistas Académicas (Scielo, Q3, Q4)",
    description: "Te asistimos en el proceso de publicación en revistas indexadas de prestigio. Maximizamos las posibilidades de aceptación de tu manuscrito en Scielo, Q3, Q4 y otras.",
    icon: <CheckSquare className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "journal document"
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Nuestros Servicios"
        subtitle="Soluciones integrales en tecnología y academia para impulsar tu éxito."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={service.imageHint}
                />
              </div>
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-lg text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
