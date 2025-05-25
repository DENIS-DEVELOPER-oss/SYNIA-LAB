
"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tag, ChevronLeft, ChevronRight, ExternalLink, UserPlus, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ProductionImage {
  src: string;
  alt: string;
  hint: string;
}
export interface ProductionItem {
  id: string;
  title: string;
  category: 'Software' | 'Capítulo de Libro' | 'Artículo Científico' | 'Tesis Doctoral' | 'Tesis de Maestría' | 'Libro';
  thematicArea: string;
  summary: string;
  videoUrl?: string;
  imageUrls?: ProductionImage[];
  demoUrl: string;
  demoLinkText: string;
  peerReview?: string; 
  certification?: string; 
  indexations?: string; 
  publishedDocumentUrl?: string;
  publishedDocumentLabel?: string;
  indexationType?: 'Scielo' | 'Scopus';
}

interface ProductionCardProps {
  production: ProductionItem;
}

export function ProductionCard({ production }: ProductionCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isPublication = production.category === 'Capítulo de Libro' || production.category === 'Artículo Científico';
  const isSoftware = production.category === 'Software';

  const handleNextImage = () => {
    if (production.imageUrls) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % production.imageUrls!.length);
    }
  };

  const handlePrevImage = () => {
    if (production.imageUrls) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + production.imageUrls!.length) % production.imageUrls!.length);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      {isPublication && production.imageUrls && production.imageUrls.length > 0 ? (
        <div className="relative aspect-video overflow-hidden group">
          <Image
            src={production.imageUrls[currentImageIndex].src}
            alt={production.imageUrls[currentImageIndex].alt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={production.imageUrls[currentImageIndex].hint}
          />
          {production.imageUrls.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevImage}
                className="absolute top-1/2 left-1 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNextImage}
                className="absolute top-1/2 right-1 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5">
                {production.imageUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full ${
                      currentImageIndex === index ? "bg-white scale-125" : "bg-white/60"
                    } hover:bg-white transition-all`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : isSoftware && production.videoUrl ? (
        <div className="aspect-video overflow-hidden">
          <iframe
            src={production.videoUrl}
            title={production.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ) : (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Visual no disponible</p>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{production.title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <Tag className="h-3 w-3 mr-1.5" />
          <span>{production.thematicArea}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3">{production.summary}</CardDescription>
      </CardContent>
      <CardFooter className={cn(
        "flex items-center gap-x-4 gap-y-2 p-4", // Base styles for padding and gap
        isSoftware 
          ? "flex-wrap justify-center sm:justify-between" // Software: wrap, center on small, between on sm+
          : "flex-wrap justify-start" // Publications: wrap, start alignment
      )}>
        {isSoftware && (
          <>
            <Button asChild variant="link" className="p-0 text-primary hover:underline">
              <Link href={production.demoUrl} target="_blank" rel="noopener noreferrer">
                {production.demoLinkText} <ExternalLink className="ml-1.5 h-3.5 w-3.5"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-accent border-accent hover:bg-accent/10">
              <Link href="/auth/signin">
                <UserPlus className="mr-1.5 h-4 w-4" />
                Participar
              </Link>
            </Button>
          </>
        )}
        {isPublication && (
          <div className="flex flex-wrap gap-2 w-full sm:flex-nowrap sm:w-auto"> {/*Ensure buttons can wrap on very small screens but prefer inline on sm+ */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="flex-grow sm:flex-grow-0"> {/* Allow button to grow if it's the only one or on small screen */}
                  <Info className="mr-1.5 h-4 w-4" /> Ver detalles
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-primary">{production.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 py-2 text-sm">
                  <p><strong className="font-medium text-foreground">Resumen:</strong> {production.summary}</p>
                  <p><strong className="font-medium text-foreground">Área Temática:</strong> {production.thematicArea}</p>
                  
                  <h4 className="font-semibold text-foreground pt-2">Características de Publicación:</h4>
                  {production.peerReview && <p><strong className="font-medium">Evaluación por pares:</strong> {production.peerReview}</p>}
                  {production.category === 'Artículo Científico' && production.indexations && (
                    <p><strong className="font-medium">Indexaciones:</strong> {production.indexations}</p>
                  )}
                  {production.certification && <p><strong className="font-medium">Certificación:</strong> {production.certification}</p>}
                  
                  {production.publishedDocumentUrl && (
                    <Button asChild variant="link" className="p-0 text-primary hover:underline mt-2">
                      <Link href={production.publishedDocumentUrl} target="_blank" rel="noopener noreferrer">
                        {production.publishedDocumentLabel || "Acceder al documento"} <ExternalLink className="ml-1.5 h-3.5 w-3.5"/>
                      </Link>
                    </Button>
                  )}
                  {!production.publishedDocumentUrl && production.publishedDocumentLabel && (
                     <p><strong className="font-medium">Documento:</strong> {production.publishedDocumentLabel}</p>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <Button asChild variant="outline" size="sm" className="text-accent border-accent hover:bg-accent/10 flex-grow sm:flex-grow-0">
              <Link href="/auth/signin">
                <UserPlus className="mr-1.5 h-4 w-4" />
                Participar
              </Link>
            </Button>
          </div>
        )}
        {!isSoftware && !isPublication && (
          <Button asChild variant="link" className="p-0 text-primary hover:underline">
            <Link href={production.demoUrl}>
              {production.demoLinkText}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
