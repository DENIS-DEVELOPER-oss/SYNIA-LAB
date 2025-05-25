
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Code, GraduationCap, CheckSquare, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    id: "thesis-advisory",
    title: "Asesoría en Tesis",
    description: "Orientación personalizada para tesis de pregrado, maestría y doctorado, desde la elección del tema y desarrollo metodológico hasta la preparación para la sustentación.",
    icon: <GraduationCap className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "student thesis graduation"
  },
  {
    id: "software-development",
    title: "Desarrollo de Software",
    description: "Soluciones tecnológicas a medida para tus necesidades académicas, de investigación o institucionales. Creamos aplicaciones web, móviles y sistemas de escritorio.",
    icon: <Code className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "coding software interface"
  },
  {
    id: "scientific-publishing",
    title: "Publicación de Artículos Científicos",
    description: "Apoyo integral en la redacción, edición y selección de revistas indexadas (Scielo, Scopus Q3, Q4). Te acompañamos en el proceso editorial para aumentar tus posibilidades de éxito.",
    icon: <CheckSquare className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "scientific journal document"
  },
  {
    id: "educational-works",
    title: "Producción de Trabajos Educativos",
    description: "Elaboración de Ensayos, Monografías, Informes de investigación, Proyectos de innovación y otros trabajos académicos, con rigor metodológico y altos estándares de calidad.",
    icon: <FileText className="h-12 w-12 text-primary mb-4" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "academic writing report"
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
              <CardFooter className="pt-4 pb-6 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                    Solicitar Servicio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
