"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Alumnos",
      href: "/alumnos",
      icon: GraduationCap,
    },
    {
      title: "Profesores",
      href: "/profesores",
      icon: UserRound,
    },
    {
      title: "Apoderados",
      href: "/apoderados",
      icon: Users,
    },
    {
      title: "Cursos",
      href: "/cursos",
      icon: BookOpen,
    },
    {
      title: "Matrículas",
      href: "/matriculas",
      icon: FileText,
    },
    {
      title: "Asistencia",
      href: "/asistencia",
      icon: ClipboardCheck,
    },
    {
      title: "Notas",
      href: "/notas",
      icon: BookOpen,
    },
    {
      title: "Incidencias",
      href: "/incidencias",
      icon: AlertTriangle,
    },
    {
      title: "Pensiones",
      href: "/pensiones",
      icon: Wallet,
    },
    {
      title: "Comunicados",
      href: "/comunicados",
      icon: Megaphone,
    },
    {
      title: "Calendario",
      href: "/calendario",
      icon: CalendarDays,
    },
    {
      title: "Portal Padres",
      href: "/portal-padres",
      icon: Smartphone,
    },
    {
      title: "Usuarios",
      href: "/usuarios",
      icon: UserCog,
    },
    {
      title: "Reportes",
      href: "/reportes",
      icon: FileText,
    },
    {
      title: "Configuración",
      href: "/configuracion",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white border-r border-slate-800 flex flex-col">
{/* Logo */}
<div className="p-6 border-b border-slate-800 flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Logo"
    className="w-10 h-10 object-contain"
  />

  <div>
    <h1 className="text-xl font-bold">
      Technology School🎓
    </h1>

    <p className="text-slate-400 text-sm mt-1">
      Sistema de Gestión Escolar
    </p>
  </div>
</div>

      {/* Navegación */}
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Usuario */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              A
            </div>

            <div>
              <p className="font-medium">
                Administrador
              </p>

              <p className="text-xs text-slate-400">
                admin@colegio.edu.pe
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}