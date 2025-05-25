
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

export default function RenacytCalculatorPage() {
  return (
    <>
      <PageHeader
        title="Criterios de Evaluación y Puntaje RENACYT"
        subtitle="Tabla de criterios para la calificación, clasificación, renovación y promoción en el RENACYT."
      />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-lg border shadow-md">
          <Table className="min-w-full">
            <TableCaption className="text-left p-4 text-sm text-muted-foreground">
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
      </div>
    </>
  );
}

    