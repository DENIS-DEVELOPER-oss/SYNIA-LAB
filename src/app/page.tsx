
import { HeroSection } from "@/components/sections/HeroSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lightbulb, BarChart3 } from "lucide-react";

const featuredServices = [
  {
    title: "Desarrollo de Software",
    description: "Soluciones a medida para optimizar tus procesos y alcanzar tus metas.",
    icon: <BarChart3 className="h-10 w-10 text-primary mb-4" />,
    link: "/services#software-development",
    image: "https://placehold.co/600x400.png",
    imageHint: "software code"
  },
  {
    title: "Producción Académica",
    description: "Transformamos tu investigación en publicaciones de alto impacto.",
    icon: <Lightbulb className="h-10 w-10 text-primary mb-4" />,
    link: "/services#academic-production",
    image: "https://placehold.co/600x400.png",
    imageHint: "research books"
  },
  {
    title: "Asesoría de Tesis",
    description: "Te guiamos paso a paso hacia la culminación exitosa de tu tesis.",
    icon: <CheckCircle className="h-10 w-10 text-primary mb-4" />,
    link: "/services#thesis-advisory",
    image: "https://placehold.co/600x400.png",
    imageHint: "student graduation"
  },
];


export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <PageHeader 
            title="Nuestros Servicios Destacados"
            subtitle="Impulsando la innovación y el conocimiento a través de soluciones expertas."
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                    <Image 
                        src={service.image} 
                        alt={service.title} 
                        layout="fill" 
                        objectFit="cover"
                        data-ai-hint={service.imageHint}
                    />
                </div>
                <CardHeader className="text-center">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                  <Button asChild variant="link" className="text-primary hover:underline">
                    <Link href={service.link}>Saber más</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">¿Listo para Transformar tus Ideas?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contáctanos hoy y descubre cómo SYNIA LAB puede ayudarte a alcanzar tus objetivos.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Hablemos de tu Proyecto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
