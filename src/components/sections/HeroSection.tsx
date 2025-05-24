
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_SLOGAN, SITE_NAME } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="https://es.wallpapers.com/images/hd/ciudad-oscura-4k-mczpazmdr0ydz9q7.jpg" 
        alt="Fondo de la sección Hero - Ciudad Oscura"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="dark city"
        priority // Cargar la imagen con prioridad ya que es LCP
      />
      {/* Contenido de la sección Hero */}
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block xl:inline">{SITE_NAME}</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg font-light text-primary-foreground opacity-90 sm:text-xl md:mt-8 md:max-w-3xl">
          {SITE_SLOGAN}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Button asChild size="lg" className="w-full sm:w-auto group transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/services">
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto transition-transform hover:scale-105 bg-sky-500 hover:bg-sky-600 text-primary-foreground border-2 border-primary-foreground">
            <Link href="/courses">Explorar Cursos</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto transition-transform hover:scale-105 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="/auth/signin">Plataforma Usuario</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
