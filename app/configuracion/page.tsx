export default function Configuracion() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Configuración
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <div className="space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Nombre del Colegio"
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Dirección"
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Teléfono"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}