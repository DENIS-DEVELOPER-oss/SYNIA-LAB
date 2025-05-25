
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_SLOGAN, SITE_NAME } from "@/lib/constants";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const carouselImages = [
  { src: "https://placehold.co/600x400.png", alt: "Ilustración abstracta de tecnología", dataAiHint: "technology abstract" },
  { src: "https://placehold.co/600x400.png", alt: "Equipo colaborando en un proyecto", dataAiHint: "team collaboration" },
  { src: "https://placehold.co/600x400.png", alt: "Interfaz de software moderna", dataAiHint: "software interface" },
];

const AUTO_SLIDE_INTERVAL = 3000; // 3 segundos

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; dataAiHint: string } | null>(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = (image: { src: string; alt: string; dataAiHint: string }) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Asegúrate de que el efecto se limpie y se reinicie si currentIndex cambia

  return (
    <>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Columna Izquierda: Texto y Botones */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block xl:inline">{SITE_NAME}</span>
              </h1>
              <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg font-light text-primary-foreground/90 sm:text-xl md:mt-8 md:max-w-3xl">
                {SITE_SLOGAN}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:justify-start gap-4">
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

            {/* Columna Derecha: Carrusel de Imágenes */}
            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="relative w-full max-w-md sm:max-w-lg h-auto aspect-[4/3] rounded-lg shadow-2xl overflow-hidden group">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                    }`}
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="cursor-pointer"
                      data-ai-hint={image.dataAiHint}
                      priority={index === 0}
                    />
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full ${
                        currentIndex === index ? "bg-white" : "bg-white/50"
                      } hover:bg-white transition-colors`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalImage && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl w-auto p-0 bg-transparent border-none shadow-none">
            <div className="relative aspect-[4/3] sm:aspect-video">
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                data-ai-hint={modalImage.dataAiHint}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
