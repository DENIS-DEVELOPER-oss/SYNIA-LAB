
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_SLOGAN, SITE_NAME } from "@/lib/constants";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Texto y Botones */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block xl:inline">{SITE_NAME}</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light text-primary-foreground/90 sm:text-xl md:mt-8 md:max-w-3xl">
              {SITE_SLOGAN}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto group bg-sky-500 hover:bg-sky-600 text-primary-foreground transition-transform hover:scale-105"
              >
                <Link href="/services">
                  Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground transition-transform hover:scale-105"
              >
                <Link href="/courses">
                  <Play className="mr-2 h-5 w-5" />
                  Explorar Cursos
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground transition-transform hover:scale-105"
              >
                <Link href="/auth/signin">Plataforma Usuario</Link>
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Imagen Ilustrativa */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://placehold.co/600x450.png" 
              alt="Ilustración de tecnología y colaboración"
              width={600}
              height={450}
              className="rounded-lg shadow-2xl"
              data-ai-hint="technology abstract illustration"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
