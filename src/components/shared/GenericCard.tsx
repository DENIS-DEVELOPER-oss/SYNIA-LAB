
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GenericCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  linkUrl?: string;
  linkText?: string;
  tags?: string[];
  category?: string;
  icon?: ReactNode;
  footerContent?: ReactNode;
}

export function GenericCard({
  title,
  description,
  imageUrl,
  imageHint,
  linkUrl,
  linkText = "Leer más",
  tags,
  category,
  icon,
  footerContent,
}: GenericCardProps) {
  return (
    <Card className={cn(
      "flex flex-col overflow-hidden shadow-lg h-full group",
      "hover:shadow-xl hover:scale-105 transition-all duration-300"
    )}>
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden"> {/* Added overflow-hidden here */}
          <Image 
            src={imageUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={imageHint}
            className="transition-transform duration-300 group-hover:scale-110" // Slightly larger scale for image
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
            {category && <span className="text-xs uppercase font-semibold text-primary">{category}</span>}
            {icon && <div className="text-primary">{icon}</div>}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0"> {/* Ensure footer content is primary driver */}
        {footerContent ? (
            <div className="w-full">{footerContent}</div>
        ) : linkUrl ? (
          <Button asChild variant="link" className="p-0 text-primary hover:underline">
            <Link href={linkUrl}>{linkText}</Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
