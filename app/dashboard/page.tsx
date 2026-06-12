import AsistenciaChart from "../components/AsistenciaChart";
import AlumnosPorGradoChart from "../components/AlumnosPorGradoChart";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Bienvenido al Sistema de Gestión Escolar
        </p>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            👨‍🎓 Alumnos
          </p>

          <h2 className="text-4xl font-bold mt-2">
            250
          </h2>

          <p className="text-green-600 text-sm mt-2">
            +12 este mes
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            👨‍🏫 Profesores
          </p>

          <h2 className="text-4xl font-bold mt-2">
            25
          </h2>

          <p className="text-blue-600 text-sm mt-2">
            Personal activo
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            📚 Cursos
          </p>

          <h2 className="text-4xl font-bold mt-2">
            18
          </h2>

          <p className="text-purple-600 text-sm mt-2">
            Cursos registrados
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            📝 Matrículas
          </p>

          <h2 className="text-4xl font-bold mt-2">
            240
          </h2>

          <p className="text-orange-600 text-sm mt-2">
            Año escolar 2026
          </p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Asistencia Mensual
          </h2>

          <AsistenciaChart />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Alumnos por Grado
          </h2>

          <AlumnosPorGradoChart />
        </div>
      </div>

      {/* Actividad */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Últimas Actividades
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-3">
              👨‍🎓 Nuevo alumno matriculado
            </div>

            <div className="border-b pb-3">
              📋 Asistencia registrada para 5to A
            </div>

            <div className="border-b pb-3">
              ⚠️ Nueva incidencia reportada
            </div>

            <div>
              📊 Reporte mensual generado
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Próximos Eventos
          </h2>

          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-3">
              📅 Reunión de Padres - 15 Junio
            </div>

            <div className="border-l-4 border-green-500 pl-3">
              📅 Exámenes Bimestrales - 20 Junio
            </div>

            <div className="border-l-4 border-purple-500 pl-3">
              📅 Feria Escolar - 30 Junio
            </div>
          </div>
        </div>
      </div>

      {/* Alertas */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Alertas del Sistema
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            ⚠️ 5 alumnos con faltas consecutivas
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            ⚠️ 2 incidencias pendientes
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            📢 Reunión institucional esta semana
          </div>
        </div>
      </div>
    </div>
  );
}