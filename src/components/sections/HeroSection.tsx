import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_SLOGAN, SITE_NAME } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-background text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block xl:inline">{SITE_NAME}</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg font-light text-muted-foreground sm:text-xl md:mt-8 md:max-w-3xl">
          {SITE_SLOGAN}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Button asChild size="lg" className="w-full sm:w-auto group bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
            <Link href="/services">
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-foreground hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105">
            <Link href="/courses">Explorar Cursos</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto text-foreground hover:bg-muted hover:text-foreground transition-transform hover:scale-105">
            <Link href="/auth/signin">Plataforma Usuario</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
