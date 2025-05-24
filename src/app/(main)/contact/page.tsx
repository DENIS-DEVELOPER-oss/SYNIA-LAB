
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
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

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
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form data:", data);
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });
    reset(); // Reset form after submission
  };

  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Estamos listos para escucharte. Ponte en contacto con nosotros para cualquier consulta o proyecto."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Send className="text-primary"/> Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" {...register("name")} placeholder="Tu nombre" className="mt-1" />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" className="mt-1" />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" {...register("subject")} placeholder="Asunto de tu mensaje" className="mt-1" />
                  {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" {...register("message")} placeholder="Escribe tu mensaje aquí..." rows={5} className="mt-1" />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Correo Electrónico</h4>
                    <a href="mailto:info@synialab.com" className="text-muted-foreground hover:text-primary">info@synialab.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Teléfono / WhatsApp</h4>
                    <a href="tel:+51987654321" className="text-muted-foreground hover:text-primary">+51 987 654 321</a> (Ejemplo Perú)
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-muted-foreground">Av. Principal 123, Lima, Perú (Oficina virtual)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Síguenos en Redes</CardTitle>
              </CardHeader>
              <CardContent className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Facebook"><Facebook /></Link>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn"><Linkedin /></Link>
                </Button>
                 <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Twitter"><Twitter /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
