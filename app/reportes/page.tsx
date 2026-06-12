export default function Reportes() {
  const reportes = [
    {
      nombre: "Reporte de Alumnos",
      descripcion:
        "Listado completo de alumnos registrados."
    },
    {
      nombre: "Reporte de Asistencia",
      descripcion:
        "Control de asistencia por aula."
    },
    {
      nombre: "Reporte de Matrículas",
      descripcion:
        "Matrículas realizadas por periodo."
    },
    {
      nombre: "Reporte de Incidencias",
      descripcion:
        "Incidencias registradas por alumno."
    },
    {
      nombre: "Reporte de Profesores",
      descripcion:
        "Listado de docentes activos."
    },
    {
      nombre: "Reporte de Cursos",
      descripcion:
        "Cursos asignados por grado."
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Reportes
        </h1>

        <p className="text-gray-500 mt-2">
          Generación de reportes institucionales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reportes.map((reporte) => (
          <div
            key={reporte.nombre}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-3">
              {reporte.nombre}
            </h2>

            <p className="text-gray-500 mb-6">
              {reporte.descripcion}
            </p>

            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                📄 PDF
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                📊 Excel
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Historial de Reportes
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Reporte
              </th>
              <th className="text-left py-3">
                Fecha
              </th>
              <th className="text-left py-3">
                Usuario
              </th>
              <th className="text-left py-3">
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">
                Reporte de Asistencia
              </td>
              <td>12/06/2026</td>
              <td>Administrador</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Generado
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                Reporte de Matrículas
              </td>
              <td>11/06/2026</td>
              <td>Administrador</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Generado
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">
                Reporte de Incidencias
              </td>
              <td>10/06/2026</td>
              <td>Director</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Generado
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}