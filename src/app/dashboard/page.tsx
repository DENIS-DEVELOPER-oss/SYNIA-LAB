
"use client";

import { PageHeader } from "@/components/shared/PageHeader";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, LayoutGrid, Award, LogOut } from "lucide-react";


export default function DashboardPage() {
  const { user, signOutUser } = useAuth();

  if (!user) {
    // This should be handled by DashboardLayout, but as a fallback
    return <p>Redirigiendo...</p>;
  }

  return (
    <>
      <PageHeader
        title={`Bienvenido, ${user.displayName || user.email?.split('@')[0] || 'Usuario'}!`}
        subtitle="Este es tu panel personal en SYNIA LAB. Aquí podrás gestionar tus servicios, cursos y más."
      />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><LayoutGrid className="text-primary"/> Mis Servicios</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Visualiza el avance de tus proyectos de desarrollo de software, asesorías de tesis o producción académica contratada.</CardDescription>
              <Button variant="link" asChild className="mt-4 p-0 text-primary"><Link href="/dashboard/my-services">Ver mis servicios</Link></Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="text-primary"/> Mis Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Accede a los cursos en los que estás inscrito, descarga materiales y revisa tu progreso.</CardDescription>
              <Button variant="link" asChild className="mt-4 p-0 text-primary"><Link href="/dashboard/my-courses">Ver mis cursos</Link></Button>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Award className="text-primary"/> Mis Certificados</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Descarga los certificados de los cursos que has completado con éxito.</CardDescription>
              <Button variant="link" asChild className="mt-4 p-0 text-primary"><Link href="/dashboard/my-certificates">Ver mis certificados</Link></Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
            <Button variant="outline" onClick={signOutUser} size="lg">
                <LogOut className="mr-2 h-5 w-5" />
                Cerrar Sesión
            </Button>
        </div>
      </div>
    </>
  );
}
