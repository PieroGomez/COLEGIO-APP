export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sistema Escolar
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}