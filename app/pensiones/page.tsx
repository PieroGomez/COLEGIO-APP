export default function Pensiones() {
  const pensiones = [
    {
      id: 1,
      alumno: "Juan Pérez",
      mes: "Junio",
      monto: "S/ 450",
      estado: "Pagado",
    },
    {
      id: 2,
      alumno: "María Torres",
      mes: "Junio",
      monto: "S/ 450",
      estado: "Pendiente",
    },
    {
      id: 3,
      alumno: "Luis García",
      mes: "Junio",
      monto: "S/ 450",
      estado: "Vencido",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Gestión de Pensiones
        </h1>

        <p className="text-gray-500 mt-2">
          Control de pagos y deudas escolares.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Total Cobrado
          </p>

          <h2 className="text-3xl font-bold text-green-600">
            S/ 95,000
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Pendiente
          </p>

          <h2 className="text-3xl font-bold text-yellow-600">
            S/ 15,000
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">
            Vencido
          </p>

          <h2 className="text-3xl font-bold text-red-600">
            S/ 4,500
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Alumno</th>
              <th className="p-3 text-left">Mes</th>
              <th className="p-3 text-left">Monto</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {pensiones.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.alumno}</td>
                <td className="p-3">{p.mes}</td>
                <td className="p-3">{p.monto}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      p.estado === "Pagado"
                        ? "bg-green-100 text-green-700"
                        : p.estado === "Pendiente"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.estado}
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