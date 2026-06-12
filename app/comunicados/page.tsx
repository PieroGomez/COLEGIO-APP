export default function Comunicados() {
  const comunicados = [
    {
      id: 1,
      titulo: "Reunión General de Padres",
      destinatario: "Todos",
      fecha: "15/06/2026",
      estado: "Publicado",
    },
    {
      id: 2,
      titulo: "Exámenes Bimestrales",
      destinatario: "Secundaria",
      fecha: "20/06/2026",
      estado: "Publicado",
    },
    {
      id: 3,
      titulo: "Feria Escolar",
      destinatario: "Primaria",
      fecha: "30/06/2026",
      estado: "Borrador",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Comunicados
          </h1>

          <p className="text-gray-500 mt-2">
            Gestión de avisos y anuncios institucionales.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Nuevo Comunicado
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="Buscar comunicado..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Título</th>
              <th className="p-3 text-left">Destinatario</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {comunicados.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.titulo}</td>
                <td className="p-3">{item.destinatario}</td>
                <td className="p-3">{item.fecha}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.estado === "Publicado"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.estado}
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Ver
                  </button>

                  <button className="bg-slate-600 text-white px-3 py-1 rounded">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}