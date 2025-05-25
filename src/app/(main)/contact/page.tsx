
"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, User, FileText, MessageSquare, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange", 
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form data:", data);
    toast({
      title: "Mensaje Enviado con Éxito",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      variant: "default", 
    });
    reset(); 
  };

  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Estamos listos para escucharte. Ponte en contacto con nosotros para cualquier consulta o proyecto."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <Card className="md:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Send className="h-6 w-6 text-primary"/> Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="name" 
                      {...register("name")} 
                      placeholder="Tu nombre completo" 
                      className={cn("pl-10", errors.name && "border-destructive focus-visible:ring-destructive")} 
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                   <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      {...register("email")} 
                      placeholder="tu@email.com" 
                      className={cn("pl-10", errors.email && "border-destructive focus-visible:ring-destructive")} 
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <div className="relative mt-1">
                    <FileText className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="subject" 
                      {...register("subject")} 
                      placeholder="Asunto de tu mensaje" 
                      className={cn("pl-10", errors.subject && "border-destructive focus-visible:ring-destructive")} 
                    />
                  </div>
                  {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <div className="relative mt-1">
                     <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea 
                      id="message" 
                      {...register("message")} 
                      placeholder="Escribe tu mensaje aquí..." 
                      rows={5} 
                      className={cn("pl-10", errors.message && "border-destructive focus-visible:ring-destructive")} 
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-3 transition-transform hover:scale-105"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 md:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <a href="mailto:info@synialab.com" className="text-muted-foreground hover:text-primary transition-colors">info@synialab.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Teléfono / WhatsApp</h4>
                    <a href="tel:+51987654321" className="text-muted-foreground hover:text-primary transition-colors">+51 987 654 321</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-muted-foreground">Av. Principal 123, Lima, Perú (Oficina virtual)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Síguenos en Redes</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-3">
                <Button variant="outline" size="icon" asChild className="hover:scale-105 hover:text-primary hover:border-primary transition-all">
                  <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
                </Button>
                 <Button variant="outline" size="icon" asChild className="hover:scale-105 hover:text-primary hover:border-primary transition-all">
                  <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
                </Button>
                 <Button variant="outline" size="icon" asChild className="hover:scale-105 hover:text-primary hover:border-primary transition-all">
                  <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Escríbenos directamente por:</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-3">
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform hover:scale-105 rounded-md py-3">
                  <Link href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chatea por WhatsApp
                  </Link>
                </Button>
                 <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white transition-transform hover:scale-105 rounded-md py-3">
                  <Link href="mailto:info@synialab.com">
                    <Mail className="mr-2 h-5 w-5" /> Escribir al Correo
                  </Link>
                </Button>
                 <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white transition-transform hover:scale-105 rounded-md py-3">
                  <Link href="https://m.me/nombredepagina" target="_blank" rel="noopener noreferrer"> {/* Reemplaza nombredepagina */}
                    <Facebook className="mr-2 h-5 w-5" /> Mensaje por Facebook
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
