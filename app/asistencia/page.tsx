export default function Asistencia() {
  const alumnos = [
    "Juan Pérez",
    "María Torres",
    "Carlos Díaz",
    "Ana López",
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Registro de Asistencia
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Alumno</th>
              <th className="text-left">Asistencia</th>
            </tr>
          </thead>

          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno} className="border-t">
                <td className="py-3">{alumno}</td>
                <td>
                  <select className="border rounded p-2">
                    <option>Presente</option>
                    <option>Tardanza</option>
                    <option>Falta</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Guardar Asistencia
        </button>
      </div>
    </div>
  );
}