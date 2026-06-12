export default function Apoderados() {
  const apoderados = [
    {
      id: 1,
      nombre: "Carlos Pérez",
      dni: "87654321",
      telefono: "999888777",
      alumno: "Juan Pérez",
    },
    {
      id: 2,
      nombre: "Ana Torres",
      dni: "45678912",
      telefono: "988777666",
      alumno: "María Torres",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Apoderados
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Nuevo Apoderado
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">DNI</th>
              <th className="p-3 text-left">Teléfono</th>
              <th className="p-3 text-left">Alumno</th>
            </tr>
          </thead>

          <tbody>
            {apoderados.map((apoderado) => (
              <tr key={apoderado.id} className="border-t">
                <td className="p-3">{apoderado.nombre}</td>
                <td className="p-3">{apoderado.dni}</td>
                <td className="p-3">{apoderado.telefono}</td>
                <td className="p-3">{apoderado.alumno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}