export default function Matriculas() {
  const matriculas = [
    {
      id: 1,
      alumno: "Juan Pérez",
      anio: "2026",
      grado: "5to",
      seccion: "A",
      estado: "Activo",
    },
    {
      id: 2,
      alumno: "María Torres",
      anio: "2026",
      grado: "4to",
      seccion: "B",
      estado: "Activo",
    },
    {
      id: 3,
      alumno: "Luis García",
      anio: "2026",
      grado: "3ro",
      seccion: "A",
      estado: "Pendiente",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Matrículas
        </h1>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          + Nueva Matrícula
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 mb-6">
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
              <th className="p-3 text-left">Año</th>
              <th className="p-3 text-left">Grado</th>
              <th className="p-3 text-left">Sección</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {matriculas.map((matricula) => (
              <tr key={matricula.id} className="border-t">
                <td className="p-3">{matricula.alumno}</td>
                <td className="p-3">{matricula.anio}</td>
                <td className="p-3">{matricula.grado}</td>
                <td className="p-3">{matricula.seccion}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      matricula.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {matricula.estado}
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