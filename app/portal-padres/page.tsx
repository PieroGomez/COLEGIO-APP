export default function PortalPadres() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Portal de Padres
        </h1>

        <p className="text-gray-500 mt-2">
          Consulta rápida de información académica y administrativa.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            CP
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Carlos Pérez
            </h2>

            <p className="text-gray-500">
              Apoderado Principal
            </p>

            <p className="text-gray-500">
              Alumno: Juan Pérez
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Promedio
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            17.5
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Asistencia
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            95%
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Pensiones
          </p>

          <h2 className="text-3xl font-bold text-purple-600">
            Al día
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Incidencias
          </p>

          <h2 className="text-3xl font-bold text-orange-600">
            2
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Últimas Notas
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">
                  Curso
                </th>

                <th className="text-left py-2">
                  Nota
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-2">
                  Matemática
                </td>
                <td>18</td>
              </tr>

              <tr>
                <td className="py-2">
                  Comunicación
                </td>
                <td>17</td>
              </tr>

              <tr>
                <td className="py-2">
                  Inglés
                </td>
                <td>19</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Comunicados
          </h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              📢 Reunión de Padres - 15 Junio
            </div>

            <div className="border rounded-lg p-3">
              📢 Exámenes Bimestrales - 20 Junio
            </div>

            <div className="border rounded-lg p-3">
              📢 Feria Escolar - 30 Junio
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Estado de Pensiones
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Mes
              </th>

              <th className="text-left py-3">
                Estado
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">
                Junio
              </td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Pagado
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">
                Julio
              </td>

              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  Pendiente
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}