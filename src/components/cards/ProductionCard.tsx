
"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react"; // Using Tag for thematic area

export interface ProductionItem {
  id: string;
  title: string;
  category: 'Software' | 'Capítulo de Libro' | 'Artículo Científico';
  thematicArea: string;
  summary: string;
  videoUrl: string; // YouTube embed URL
  demoUrl: string;
  demoLinkText: string;
}

interface ProductionCardProps {
  production: ProductionItem;
}

export function ProductionCard({ production }: ProductionCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
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
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary hover:underline">
          <Link href={production.demoUrl} target="_blank" rel="noopener noreferrer">
            {production.demoLinkText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
