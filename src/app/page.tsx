
import { HeroSection } from "@/components/sections/HeroSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Send, LogIn } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProduccionesDisponibles } from "@/components/sections/ProduccionesDisponibles"; // Import the new section

const featuredServices = [
  {
    title: "Nuestros Servicios",
    description: "Experiencia de usuario fluida y accesible, con un diseño sencillo que facilita la navegación y el uso de todas sus funciones.",
    icon: Users,
    iconColor: "text-purple-600",
    link: "/services",
  },
  {
    title: "Explorar Cursos",
    description: "Formación reciente y relevante, siempre al día con las últimas tendencias y conocimientos en tecnología y software.",
    icon: Send,
    iconColor: "text-orange-500",
    link: "/courses",
  },
  {
    title: "Plataforma Usuario",
    description: "Accede a tu cuenta personalizada, gestiona tus cursos, servicios y progreso.",
    icon: LogIn,
    iconColor: "text-green-600",
    link: "/auth/signin", 
  },
];


export default function HomePage() {
  return (
    <MainLayout>
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
              <Link key={service.title} href={service.link} className="block h-full group">
                <Card 
                  className={cn(
                    "flex flex-col items-center text-center p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full",
                    "bg-card group-hover:border-2 group-hover:border-primary" // Always use bg-card and add hover border
                  )}
                >
                  <div className={cn(
                    "mb-6 flex h-24 w-24 items-center justify-center rounded-full",
                    "bg-muted border" // Always use bg-muted for icon container
                  )}>
                    <service.icon className={cn("h-12 w-12", service.iconColor)} />
                  </div>
                  <CardTitle className={cn("text-2xl mb-3", "text-card-foreground")}> 
                    {service.title}
                  </CardTitle>
                  <CardDescription className={cn("text-base flex-grow", "text-muted-foreground")}>
                    {service.description}
                  </CardDescription>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Producciones Disponibles"
            subtitle="Explora los softwares desarrollados, capítulos de libros y artículos científicos publicados por SYNIA LAB."
            className="mb-12 text-center"
          />
          <ProduccionesDisponibles />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
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
    </MainLayout>
  );
}
