export default function Calendario() {
  const eventos = [
    {
      id: 1,
      fecha: "15/06/2026",
      titulo: "Reunión General de Padres",
      tipo: "Reunión",
    },
    {
      id: 2,
      fecha: "20/06/2026",
      titulo: "Exámenes Bimestrales",
      tipo: "Académico",
    },
    {
      id: 3,
      fecha: "30/06/2026",
      titulo: "Feria Escolar",
      tipo: "Evento",
    },
    {
      id: 4,
      fecha: "28/07/2026",
      titulo: "Fiestas Patrias",
      tipo: "Feriado",
    },
  ];

  const colorTipo = (tipo: string) => {
    switch (tipo) {
      case "Reunión":
        return "bg-blue-100 text-blue-700";
      case "Académico":
        return "bg-purple-100 text-purple-700";
      case "Evento":
        return "bg-green-100 text-green-700";
      case "Feriado":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Calendario Escolar
          </h1>

          <p className="text-gray-500 mt-2">
            Eventos y actividades institucionales.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          + Nuevo Evento
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">
            Eventos
          </h3>
          <p className="text-3xl font-bold">
            18
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">
            Reuniones
          </h3>
          <p className="text-3xl font-bold">
            6
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">
            Exámenes
          </h3>
          <p className="text-3xl font-bold">
            4
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-gray-500">
            Feriados
          </h3>
          <p className="text-3xl font-bold">
            8
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Evento</th>
              <th className="p-3 text-left">Tipo</th>
            </tr>
          </thead>

          <tbody>
            {eventos.map((evento) => (
              <tr key={evento.id} className="border-t">
                <td className="p-3">
                  {evento.fecha}
                </td>

                <td className="p-3">
                  {evento.titulo}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${colorTipo(
                      evento.tipo
                    )}`}
                  >
                    {evento.tipo}
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