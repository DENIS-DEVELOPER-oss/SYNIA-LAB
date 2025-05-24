
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Users, Target, Eye, BookOpen } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    { name: "Dr. Alexandro R.", role: "Director & Fundador", image: "https://placehold.co/300x300.png", imageHint: "professional portrait" },
    { name: "Ing. Carla S.", role: "Líder de Desarrollo", image: "https://placehold.co/300x300.png", imageHint: "software engineer" },
    { name: "Lic. Mario P.", role: "Coordinador Académico", image: "https://placehold.co/300x300.png", imageHint: "academic person" },
  ];

  return (
    <>
      <PageHeader
        title="Quiénes Somos"
        subtitle="Conoce más sobre SYNIA LAB, nuestra misión, visión y el equipo que lo hace posible."
      />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Target className="text-primary"/> Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Nuestra misión es potenciar la innovación y el avance del conocimiento mediante el desarrollo de software de vanguardia y la producción académica de alta calidad, brindando soluciones integrales y personalizadas a nuestros clientes y colaboradores.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><Eye className="text-primary"/> Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Ser un referente a nivel nacional e internacional en la sinergia entre tecnología y academia, reconocidos por nuestra excelencia, integridad y capacidad para transformar ideas en realidades tangibles que impacten positivamente en la sociedad.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2"><BookOpen className="text-primary"/> Nuestra Historia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Fundada en [Año de Fundación], SYNIA LAB nació de la pasión por la tecnología y la investigación. Desde nuestros inicios, hemos trabajado incansablemente para construir un puente entre el desarrollo de software innovador y la rigurosidad académica, ayudando a profesionales, investigadores e instituciones a alcanzar sus metas más ambiciosas. A lo largo de los años, hemos crecido y evolucionado, pero nuestro compromiso con la calidad y la transformación sigue siendo el motor que nos impulsa.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"><Users className="text-primary h-8 w-8"/> Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary mb-4">
                    <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.imageHint} />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
