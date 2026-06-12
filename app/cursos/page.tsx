export default function Cursos() {
  const cursos = [
    {
      id: 1,
      nombre: "Matemática",
      profesor: "Carlos Rojas",
      grado: "5to A",
    },
    {
      id: 2,
      nombre: "Comunicación",
      profesor: "María Torres",
      grado: "4to B",
    },
    {
      id: 3,
      nombre: "Inglés",
      profesor: "Juan Pérez",
      grado: "3ro A",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Cursos
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Nuevo Curso
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Profesor</th>
              <th className="p-3 text-left">Grado</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id} className="border-t">
                <td className="p-3">{curso.nombre}</td>
                <td className="p-3">{curso.profesor}</td>
                <td className="p-3">{curso.grado}</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Activo
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