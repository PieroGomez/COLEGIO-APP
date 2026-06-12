export default function Usuarios() {
  const usuarios = [
    {
      id: 1,
      nombre: "Director General",
      correo: "director@colegio.edu.pe",
      rol: "Director",
    },
    {
      id: 2,
      nombre: "Profesor Matemática",
      correo: "profesor@colegio.edu.pe",
      rol: "Profesor",
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Usuarios
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Correo</th>
              <th className="p-3 text-left">Rol</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="border-t">
                <td className="p-3">{usuario.nombre}</td>
                <td className="p-3">{usuario.correo}</td>
                <td className="p-3">{usuario.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}