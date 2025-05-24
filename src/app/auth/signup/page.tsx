
"use client";

import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Chrome } from "lucide-react"; // Lucide 'Chrome' icon for Google

const signUpSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden.",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const { signUpWithEmail, signInWithGoogle, loading } = useAuth();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      await signUpWithEmail(data.email, data.password);
    } catch (error: any) {
      toast({
        title: "Error al Registrarse",
        description: error.message || "Ocurrió un problema. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle(); // Firebase handles new user creation with Google sign-in
    } catch (error: any) {
       toast({
        title: "Error con Google",
        description: error.message || "No se pudo registrar con Google.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-center mb-2">
        Crear una Cuenta
      </h1>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Únete a SYNIA LAB y accede a nuestros recursos.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" className="mt-1" />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" {...register("password")} placeholder="********" className="mt-1" />
          {errors.password && <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>}
        </div>
         <div>
          <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
          <Input id="confirmPassword" type="password" {...register("confirmPassword")} placeholder="********" className="mt-1" />
          {errors.confirmPassword && <p className="mt-1 text-sm text-destructive">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
          {loading ? "Creando cuenta..." : "Registrarse"}
        </Button>
      </form>

      <div className="my-6">
        <Separator />
      </div>

      <Button variant="outline" onClick={handleGoogleSignUp} disabled={loading} className="w-full">
        <Chrome className="mr-2 h-4 w-4" /> {/* Using Chrome icon for Google */}
        {loading ? "Conectando..." : "Registrarse con Google"}
      </Button>

      <p className="mt-6 text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Button variant="link" asChild className="p-0 h-auto">
          <Link href="/auth/signin" className="font-medium text-primary hover:underline">
            Inicia sesión aquí
          </Link>
        </Button>
      </p>
    </>
  );
}
