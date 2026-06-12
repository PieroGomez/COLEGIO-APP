export default function DetalleAlumno() {
  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            JP
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Juan Pérez
            </h1>

            <p className="text-gray-500">
              Código: ALU-0001
            </p>

            <p className="text-gray-500">
              5to Secundaria - Sección A
            </p>
          </div>
        </div>
      </div>

      {/* Resumen */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Asistencia
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            95%
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Promedio
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            17.5
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

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Pensiones
          </p>

          <h2 className="text-3xl font-bold text-purple-600">
            Al día
          </h2>
        </div>
      </div>

      {/* Información */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Información General
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong>DNI:</strong> 76543210
          </div>

          <div>
            <strong>Fecha Nacimiento:</strong> 12/05/2010
          </div>

          <div>
            <strong>Dirección:</strong> Av. Principal 123
          </div>

          <div>
            <strong>Teléfono:</strong> 999888777
          </div>

          <div>
            <strong>Correo:</strong> alumno@colegio.pe
          </div>

          <div>
            <strong>Estado:</strong> Activo
          </div>
        </div>
      </div>

      {/* Notas */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Notas Recientes
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Curso
              </th>

              <th className="text-left py-3">
                Nota
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">
                Matemática
              </td>

              <td>18</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                Comunicación
              </td>

              <td>17</td>
            </tr>

            <tr>
              <td className="py-3">
                Inglés
              </td>

              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Asistencia */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Asistencia
        </h2>

        <div className="flex gap-3 flex-wrap">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            Presente
          </span>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            Presente
          </span>

          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">
            Falta
          </span>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            Presente
          </span>
        </div>
      </div>

      {/* Incidencias */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Incidencias
        </h2>

        <ul className="space-y-2">
          <li>
            ⚠️ Tardanza - 05/06/2026
          </li>

          <li>
            ⚠️ Uniforme incompleto - 15/05/2026
          </li>
        </ul>
      </div>

      {/* Apoderado */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Apoderado
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong>Nombre:</strong> Carlos Pérez
          </div>

          <div>
            <strong>Teléfono:</strong> 999777666
          </div>

          <div>
            <strong>Correo:</strong> padre@gmail.com
          </div>

          <div>
            <strong>Parentesco:</strong> Padre
          </div>
        </div>
      </div>

      {/* Pensiones */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Pensiones
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