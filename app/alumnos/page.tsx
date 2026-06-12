export default function Alumnos() {
  const alumnos = [
    {
      id: 1,
      codigo: "AL001",
      nombre: "Juan Pérez",
      grado: "5to",
      seccion: "A",
    },
    {
      id: 2,
      codigo: "AL002",
      nombre: "María Torres",
      grado: "4to",
      seccion: "B",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Alumnos
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Nuevo Alumno
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Código</th>
              <th className="p-3 text-left">Alumno</th>
              <th className="p-3 text-left">Grado</th>
              <th className="p-3 text-left">Sección</th>
            </tr>
          </thead>

          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.id} className="border-t">
                <td className="p-3">{alumno.codigo}</td>
                <td className="p-3">{alumno.nombre}</td>
                <td className="p-3">{alumno.grado}</td>
                <td className="p-3">{alumno.seccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}