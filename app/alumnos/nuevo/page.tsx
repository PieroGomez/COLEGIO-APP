export default function NuevoAlumno() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Nuevo Alumno
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <form className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Nombres"
          />

          <input
            className="border p-2 rounded"
            placeholder="Apellidos"
          />

          <input
            className="border p-2 rounded"
            placeholder="DNI"
          />

          <input
            className="border p-2 rounded"
            placeholder="Fecha de nacimiento"
            type="date"
          />

          <input
            className="border p-2 rounded"
            placeholder="Apoderado"
          />

          <input
            className="border p-2 rounded"
            placeholder="Teléfono"
          />

          <select className="border p-2 rounded">
            <option>1ro</option>
            <option>2do</option>
            <option>3ro</option>
            <option>4to</option>
            <option>5to</option>
          </select>

          <select className="border p-2 rounded">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <button
            className="bg-blue-600 text-white rounded p-2 col-span-2"
          >
            Guardar Alumno
          </button>
        </form>
      </div>
    </div>
  );
}