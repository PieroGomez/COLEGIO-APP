export default function Profesores() {
  const profesores = [
    {
      id: 1,
      nombre: "Carlos Rojas",
      especialidad: "Matemática",
      cursos: 3,
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "María Torres",
      especialidad: "Comunicación",
      cursos: 2,
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Luis Gómez",
      especialidad: "Inglés",
      cursos: 1,
      estado: "Pendiente",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Profesores
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Nuevo Profesor
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <input
          type="text"
          placeholder="Buscar profesor..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Profesor</th>
              <th className="p-3 text-left">Especialidad</th>
              <th className="p-3 text-left">Cursos</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {profesores.map((profesor) => (
              <tr key={profesor.id} className="border-t">
                <td className="p-3">{profesor.nombre}</td>
                <td className="p-3">{profesor.especialidad}</td>
                <td className="p-3">{profesor.cursos}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      profesor.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {profesor.estado}
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