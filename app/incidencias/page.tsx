export default function Incidencias() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Incidencias
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Alumno"
            className="w-full border p-2 rounded"
          />

          <select className="w-full border p-2 rounded">
            <option>Conducta</option>
            <option>Académica</option>
            <option>Disciplina</option>
          </select>

          <textarea
            placeholder="Descripción"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Registrar Incidencia
          </button>
        </form>
      </div>
    </div>
  );
}