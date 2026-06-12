export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">
          Sistema de Gestión Escolar
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          🔔
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <p className="font-medium">Administrador</p>
            <p className="text-xs text-gray-500">
              admin@colegio.edu.pe
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}