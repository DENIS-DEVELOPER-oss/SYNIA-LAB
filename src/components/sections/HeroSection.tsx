
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
        src="https://placehold.co/1920x1080.png" 
        alt="Fondo de la sección Hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="modern office"
        priority // Cargar la imagen con prioridad ya que es LCP
      />
      {/* Superposición azul semitransparente */}
      <div className="absolute inset-0 bg-primary/70 z-10"></div>

      {/* Contenido de la sección Hero */}
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block xl:inline">{SITE_NAME}</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg font-light text-blue-100 sm:text-xl md:mt-8 md:max-w-3xl">
          {SITE_SLOGAN}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Button asChild size="lg" className="w-full sm:w-auto group transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/services">
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto transition-transform hover:scale-105 border-white text-white hover:bg-white/10 hover:text-white">
            <Link href="/courses">Explorar Cursos</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto transition-transform hover:scale-105 text-white hover:bg-white/10 hover:text-white">
            <Link href="/auth/signin">Plataforma Usuario</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
