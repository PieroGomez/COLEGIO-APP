export default function Notas() {
  const notas = [
    {
      id: 1,
      alumno: "Juan Pérez",
      curso: "Matemática",
      bimestre: "I",
      nota: 18,
    },
    {
      id: 2,
      alumno: "Juan Pérez",
      curso: "Comunicación",
      bimestre: "I",
      nota: 17,
    },
    {
      id: 3,
      alumno: "Juan Pérez",
      curso: "Inglés",
      bimestre: "I",
      nota: 19,
    },
    {
      id: 4,
      alumno: "María Torres",
      curso: "Matemática",
      bimestre: "I",
      nota: 12,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Gestión de Notas
          </h1>

          <p className="text-gray-500 mt-2">
            Registro y consulta de calificaciones.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          + Registrar Nota
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Promedio General
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            16.8
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Aprobados
          </p>

          <h2 className="text-3xl font-bold text-blue-600">
            230
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            En Riesgo
          </p>

          <h2 className="text-3xl font-bold text-yellow-600">
            18
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">
            Desaprobados
          </p>

          <h2 className="text-3xl font-bold text-red-600">
            7
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="Buscar alumno..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Alumno</th>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Bimestre</th>
              <th className="p-3 text-left">Nota</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {notas.map((nota) => (
              <tr key={nota.id} className="border-t">
                <td className="p-3">{nota.alumno}</td>
                <td className="p-3">{nota.curso}</td>
                <td className="p-3">{nota.bimestre}</td>
                <td className="p-3 font-bold">
                  {nota.nota}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      nota.nota >= 14
                        ? "bg-green-100 text-green-700"
                        : nota.nota >= 11
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {nota.nota >= 14
                      ? "Aprobado"
                      : nota.nota >= 11
                      ? "En Riesgo"
                      : "Desaprobado"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}