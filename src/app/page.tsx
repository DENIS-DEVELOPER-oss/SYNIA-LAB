
import { HeroSection } from "@/components/sections/HeroSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Lightbulb, BarChart3, Code, BookOpen, GraduationCap } from "lucide-react"; // Added more icons

const featuredServices = [
  {
    title: "Desarrollo de Software",
    description: "Soluciones a medida para optimizar tus procesos y alcanzar tus metas.",
    icon: <Code className="h-10 w-10 text-primary mb-4" />, // Updated icon
    link: "/services#software-development",
    image: "https://placehold.co/600x400.png",
    imageHint: "software code screen" // Updated hint
  },
  {
    title: "Producción Académica",
    description: "Transformamos tu investigación en publicaciones de alto impacto.",
    icon: <BookOpen className="h-10 w-10 text-primary mb-4" />, // Updated icon
    link: "/services#academic-production",
    image: "https://placehold.co/600x400.png",
    imageHint: "research publication" // Updated hint
  },
  {
    title: "Asesoría de Tesis",
    description: "Te guiamos paso a paso hacia la culminación exitosa de tu tesis.",
    icon: <GraduationCap className="h-10 w-10 text-primary mb-4" />, // Updated icon
    link: "/services#thesis-advisory",
    image: "https://placehold.co/600x400.png",
    imageHint: "thesis student" // Updated hint
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
              <Card key={service.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative h-48 w-full overflow-hidden"> {/* Added overflow-hidden here */}
                    <Image 
                        src={service.image} 
                        alt={service.title} 
                        layout="fill" 
                        objectFit="cover"
                        data-ai-hint={service.imageHint}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <CardHeader className="text-center">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0 text-center">
                  <Button asChild variant="link" className="text-primary hover:underline font-semibold">
                    <Link href={service.link}>Saber más</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">¿Listo para Transformar tus Ideas?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Contáctanos hoy y descubre cómo SYNIA LAB puede ayudarte a alcanzar tus objetivos.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
              <Link href="/contact">Hablemos de tu Proyecto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
