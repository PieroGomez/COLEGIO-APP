"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  AlertTriangle,
  UserCog,
  GraduationCap,
  BookOpen,
  UserRound,
  Settings,
  FileText,
  Wallet,
  Megaphone,
  CalendarDays,
  Smartphone,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { title: "Alumnos", href: "/alumnos", icon: GraduationCap },
    { title: "Profesores", href: "/profesores", icon: UserRound },
    { title: "Apoderados", href: "/apoderados", icon: Users },
    { title: "Cursos", href: "/cursos", icon: BookOpen },
    { title: "Matrículas", href: "/matriculas", icon: FileText },
    { title: "Asistencia", href: "/asistencia", icon: ClipboardCheck },
    { title: "Notas", href: "/notas", icon: BookOpen },
    { title: "Incidencias", href: "/incidencias", icon: AlertTriangle },
    { title: "Pensiones", href: "/pensiones", icon: Wallet },
    { title: "Comunicados", href: "/comunicados", icon: Megaphone },
    { title: "Calendario", href: "/calendario", icon: CalendarDays },
    { title: "Portal Padres", href: "/portal-padres", icon: Smartphone },
    { title: "Usuarios", href: "/usuarios", icon: UserCog },
    { title: "Reportes", href: "/reportes", icon: FileText },
    { title: "Configuración", href: "/configuracion", icon: Settings },
  ];

  return (
    <>
      {/* BOTÓN MÓVIL */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-950 text-white border-b border-slate-800">
        <h1 className="font-bold text-white">Menú</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
        fixed md:static z-50
        top-0 left-0
        w-72 min-h-screen
        bg-slate-900 text-slate-100
        border-r border-slate-800
        flex flex-col
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* LOGO */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              Technology School🎓
            </h1>
            <p className="text-slate-200 text-sm">
              Sistema de Gestión Escolar
            </p>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-blue-500 text-white font-semibold"
                        : "text-slate-100 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-sm md:text-base">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* USUARIO */}
        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
              A
            </div>

            <div>
              <p className="font-medium text-white">
                Administrador
              </p>
              <p className="text-xs text-slate-200">
                admin@colegio.edu.pe
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}