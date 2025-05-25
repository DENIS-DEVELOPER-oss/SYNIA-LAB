
import { PageHeader } from "@/components/shared/PageHeader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RenacytCalculatorPage() {
  const nivelesInvestigador = [
    { nivel: "Investigador Distinguido", grupo: "Carlos Monge Medrano", puntajeMinProduccion: "Índice h ≥ 10", puntajeTotal: "150" },
    { nivel: "Nivel I", grupo: "Carlos Monge Medrano", puntajeMinProduccion: "55", puntajeTotal: "80" },
    { nivel: "Nivel II", grupo: "Carlos Monge Medrano", puntajeMinProduccion: "35", puntajeTotal: "50" },
    { nivel: "Nivel III", grupo: "Carlos Monge Medrano", puntajeMinProduccion: "25", puntajeTotal: "30" },
    { nivel: "Nivel IV", grupo: "Carlos Monge Medrano", puntajeMinProduccion: "15", puntajeTotal: "20" },
    { nivel: "Nivel I", grupo: "María Rostworowski Tovar", puntajeMinProduccion: "30", puntajeTotal: "35" },
    { nivel: "Nivel II", grupo: "María Rostworowski Tovar", puntajeMinProduccion: "20", puntajeTotal: "25" },
    { nivel: "Nivel III", grupo: "María Rostworowski Tovar", puntajeMinProduccion: "10", puntajeTotal: "15" },
    { nivel: "Nivel IV", grupo: "María Rostworowski Tovar", puntajeMinProduccion: "5", puntajeTotal: "10" },
  ];

  const bonificacionesEjemplo = [
    { criterio: "Publicación en revista de alto impacto (Top 10%)", bonificacion: "+5 puntos", nota: "Adicional al puntaje Q1" },
    { criterio: "Patente internacional concedida", bonificacion: "+10 puntos", nota: "Adicional al puntaje de patente" },
    { criterio: "Participación en proyectos con financiamiento externo competitivo", bonificacion: "+3 puntos por proyecto", nota: "Máximo 2 proyectos" },
  ];

  return (
    <>
      <PageHeader
        title="Calculadora de Puntaje RENACYT"
        subtitle="Consulta los criterios, niveles y bonificaciones para la calificación en el RENACYT."
      />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Tabla 1: Criterios de Evaluación y Puntaje RENACYT</CardTitle>
            <p className="text-sm text-muted-foreground">Detalle de los criterios para la calificación, clasificación, renovación y promoción.</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table className="min-w-full">
                <TableCaption className="text-left p-4 text-sm text-muted-foreground bg-muted/30 mt-0 border-t">
                  <p className="mb-2">
                    * Son obligatorios los indicadores B y/o C y/o D, por lo que se debe cumplir por lo menos uno de ellos para ser calificado. Así mismo, se debe tener por lo menos un ítem generado en los últimos 3 años. Para el caso de estudiantes, el puntaje mínimo en estos indicadores será de 9 puntos.
                  </p>
                  <p>
                    ** Incluye Universidades, Institutos de Educación Superior Tecnológica, entre otros.
                  </p>
                </TableCaption>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-1/12 font-semibold">Criterio</TableHead>
                    <TableHead className="w-3/12 font-semibold">Indicador</TableHead>
                    <TableHead className="w-4/12 font-semibold">Ítem</TableHead>
                    <TableHead className="w-1/12 text-center font-semibold">Puntaje por ítem</TableHead>
                    <TableHead className="w-1/12 text-center font-semibold">Puntaje Máximo por criterio</TableHead>
                    <TableHead className="w-1/12 text-center font-semibold">Puntaje Mínimo por criterio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Formación */}
                  <TableRow>
                    <TableCell rowSpan={5} className="font-medium align-top border-r">Formación</TableCell>
                    <TableCell rowSpan={5} className="align-top border-r">
                      A. Grado Académico y/o Título Profesional registrado en SUNEDU o MINEDU (**).
                    </TableCell>
                    <TableCell>Grado de Doctor</TableCell>
                    <TableCell className="text-center">10</TableCell>
                    <TableCell rowSpan={5} className="text-center align-middle border-l border-r">10</TableCell>
                    <TableCell rowSpan={5} className="text-center align-middle">0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grado de Magíster</TableCell>
                    <TableCell className="text-center">6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Título Profesional</TableCell>
                    <TableCell className="text-center">4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grado de Bachiller o Egresado</TableCell>
                    <TableCell className="text-center">2</TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell>Constancia de Matrícula en Instituciones de Educación Superior</TableCell>
                    <TableCell className="text-center">1</TableCell>
                  </TableRow>

                  {/* Producción Total - Artículos */}
                  <TableRow>
                    <TableCell rowSpan={10} className="font-medium align-top border-r">Producción Total (*)</TableCell>
                    <TableCell rowSpan={5} className="align-top border-r">
                      B. Artículos científicos en revistas indizadas en las bases de datos bibliográficas Scopus, Web of Science – WoS y SciELO.
                    </TableCell>
                    <TableCell>Scopus / WoS (Cuartil Q1 de Scimago o JCR)</TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell rowSpan={5} className="text-center align-middle border-l border-r">Sin puntaje total máximo</TableCell>
                    <TableCell rowSpan={5} className="text-center align-middle">10 / 6 (SciELO)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Scopus / WoS (Cuartil Q2 de Scimago o JCR)</TableCell>
                    <TableCell className="text-center">4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Scopus / WoS (Cuartil Q3 de Scimago o JCR)</TableCell>
                    <TableCell className="text-center">3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Scopus / WoS (Cuartil Q4 de Scimago o JCR)</TableCell>
                    <TableCell className="text-center">2</TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell>Conference Proceedings (Scopus o WoS) / SciELO</TableCell>
                    <TableCell className="text-center">1</TableCell>
                  </TableRow>

                  {/* Producción Total - Registros de propiedad */}
                  <TableRow>
                    <TableCell rowSpan={2} className="align-top border-r">
                      C. Registros de propiedad intelectual, concedidas y registradas en INDECOPI, SCOPUS u otras fuentes internacionales equivalentes.
                    </TableCell>
                    <TableCell>Patente de invención o Certificado de Obtentor o Paquete tecnológico</TableCell>
                    <TableCell className="text-center">3</TableCell>
                    <TableCell rowSpan={2} className="text-center align-middle border-l border-r">Sin puntaje total máximo</TableCell>
                    <TableCell rowSpan={2} className="text-center align-middle"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell>Patente de modelo de utilidad o certificado de derecho de autor por software</TableCell>
                    <TableCell className="text-center">1</TableCell>
                  </TableRow>

                  {/* Producción Total - Publicaciones de libros */}
                  <TableRow>
                    <TableCell rowSpan={2} className="align-top border-r">
                      D. Publicaciones de libros y/o capítulos de libro en su especialidad indizados en bases de datos bibliográficas o que cumplan con un proceso de revisión de pares externos y otros estándares.
                    </TableCell>
                    <TableCell>Libro</TableCell>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell rowSpan={2} className="text-center align-middle border-l border-r">10</TableCell>
                    <TableCell rowSpan={2} className="text-center align-middle"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableCell>Capítulo de libro</TableCell>
                    <TableCell className="text-center">1</TableCell>
                  </TableRow>
                  
                  {/* Producción Total - Indice h */}
                  <TableRow className="border-b">
                    <TableCell className="align-top border-r">E. Índice h (Scopus)</TableCell>
                    <TableCell>Valor del índice h ≥ 10</TableCell>
                    <TableCell className="text-center">No tiene puntaje</TableCell>
                    <TableCell className="text-center align-middle border-l border-r">
                      De cumplimiento obligatorio únicamente para el Nivel "Investigador Distinguido"
                    </TableCell>
                    <TableCell className="text-center align-middle"></TableCell>
                  </TableRow>

                  {/* Asesoría */}
                  <TableRow>
                    <TableCell rowSpan={3} className="font-medium align-top border-r">Asesoría</TableCell>
                    <TableCell rowSpan={3} className="align-top">
                      F. Haber asesorado o co-asesorado tesis sustentadas y aprobadas de pregrado y/o posgrado.
                    </TableCell>
                    <TableCell>Para la obtención del Grado de Doctor</TableCell>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell rowSpan={3} className="text-center align-middle border-l border-r">10</TableCell>
                    <TableCell rowSpan={3} className="text-center align-middle">0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Para la obtención del Grado de Magíster</TableCell>
                    <TableCell className="text-center">1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Para la obtención del Grado de Bachiller o Título Profesional</TableCell>
                    <TableCell className="text-center">0.5</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Tabla 2: Niveles de Investigador RENACYT y Puntajes Mínimos</CardTitle>
            <p className="text-sm text-muted-foreground">Clasificación según grupo y puntaje total obtenido.</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-semibold">Nivel</TableHead>
                    <TableHead className="font-semibold">Grupo de Investigador</TableHead>
                    <TableHead className="text-center font-semibold">Puntaje Mínimo en Producción Científica</TableHead>
                    <TableHead className="text-center font-semibold">Puntaje Total Mínimo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nivelesInvestigador.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.nivel}</TableCell>
                      <TableCell>{item.grupo}</TableCell>
                      <TableCell className="text-center">{item.puntajeMinProduccion}</TableCell>
                      <TableCell className="text-center">{item.puntajeTotal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
             <p className="mt-4 text-xs text-muted-foreground">
              Nota: Los puntajes y requisitos específicos pueden variar según la normativa vigente del CONCYTEC. Esta tabla es una representación general.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Tabla 3: Bonificaciones y Consideraciones Especiales (Ejemplo)</CardTitle>
            <p className="text-sm text-muted-foreground">Ejemplos de posibles bonificaciones adicionales al puntaje base.</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-2/5 font-semibold">Criterio de Bonificación</TableHead>
                    <TableHead className="w-1/5 text-center font-semibold">Bonificación Sugerida</TableHead>
                    <TableHead className="w-2/5 font-semibold">Nota / Condición</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bonificacionesEjemplo.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.criterio}</TableCell>
                      <TableCell className="text-center">{item.bonificacion}</TableCell>
                      <TableCell>{item.nota}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Importante: Las bonificaciones reales y sus valores son definidos por CONCYTEC en sus convocatorias y reglamentos. Esta tabla es solo ilustrativa.
            </p>
          </CardContent>
        </Card>

      </div>
    </>
  );
}
