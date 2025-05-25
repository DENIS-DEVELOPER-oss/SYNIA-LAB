
import { HeroSection } from "@/components/sections/HeroSection";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { /* Settings, BookOpen, UserCircle, */ GraduationCap, Code, FileText, ArrowRight } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProduccionesDisponibles } from "@/components/sections/ProduccionesDisponibles";

const generalLinks = [
  {
    title: "Nuestros Servicios",
    description: "Descubre cómo podemos impulsar tus proyectos académicos y tecnológicos.",
    iconUrl: "https://cdn.animations.flaticon.com/dist/min/img/animations/icons/settings/9449/9449016.gif", // Settings/Tools icon
    link: "/services",
  },
  {
    title: "Explorar Cursos",
    description: "Capacítate con nuestros programas especializados y actualizados.",
    iconUrl: "https://cdn.animations.flaticon.com/dist/min/img/animations/icons/book/13980/13980341.gif", // Book/Courses icon
    link: "/courses",
  },
  {
    title: "Plataforma Usuario",
    description: "Accede a tu panel personalizado y gestiona tus recursos y proyectos.",
    iconUrl: "https://cdn.animations.flaticon.com/dist/min/img/animations/icons/avatar/13774/13774088.gif", // User/Avatar icon
    link: "/auth/signin",
  },
];

const mainServices = [
  {
    title: "Asesoría en Tesis",
    description: "Orientación personalizada para tesis (pregrado, maestría, doctorado), del tema a la sustentación.",
    icon: GraduationCap,
    iconColor: "text-primary",
    link: "/services#thesis-advisory",
  },
  {
    title: "Desarrollo de Software",
    description: "Soluciones tecnológicas a medida para tus necesidades académicas, de investigación o institucionales.",
    icon: Code,
    iconColor: "text-primary",
    link: "/services#software-development",
  },
  {
    title: "Publicación Científica",
    description: "Apoyo integral en la redacción, edición y selección de revistas indexadas (Scielo, Scopus).",
    icon: FileText, 
    iconColor: "text-primary",
    link: "/services#scientific-publishing", 
  },
];


export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {generalLinks.map((service, index) => (
              <Link key={service.title} href={service.link} className="block h-full group">
                <Card 
                  className={cn(
                    "flex flex-col items-center text-center p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full",
                    "bg-card group-hover:border-2 group-hover:border-primary"
                  )}
                >
                  <div className={cn(
                    "mb-6 flex h-20 w-20 items-center justify-center rounded-full",
                     "bg-muted border"
                  )}>
                    {/* Cambio para usar img con la URL del GIF */}
                    <img src={service.iconUrl} alt={`${service.title} icon`} className="h-12 w-12" />
                  </div>
                  <CardTitle className={cn("text-xl mb-3", "text-card-foreground")}> 
                    {service.title}
                  </CardTitle>
                  <CardDescription className={cn("text-sm flex-grow", "text-muted-foreground")}>
                    {service.description}
                  </CardDescription>
                </Card>
              </Link>
            ))}
          </div>

          <PageHeader 
            title="Nuestros Servicios Principales"
            subtitle="Impulsando la innovación y el conocimiento a través de soluciones expertas."
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <Link key={service.title} href={service.link} className="block h-full group">
                <Card 
                  className={cn(
                    "flex flex-col items-center text-center p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full",
                    "bg-card group-hover:border-2 group-hover:border-primary"
                  )}
                >
                  <div className={cn(
                    "mb-6 flex h-24 w-24 items-center justify-center rounded-full",
                    "bg-muted border"
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
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
              <Link href="/services">Ver todos los servicios <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
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
