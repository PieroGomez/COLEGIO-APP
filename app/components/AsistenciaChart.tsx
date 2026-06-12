"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { mes: "Ene", asistencia: 92 },
  { mes: "Feb", asistencia: 95 },
  { mes: "Mar", asistencia: 90 },
  { mes: "Abr", asistencia: 97 },
  { mes: "May", asistencia: 94 },
  { mes: "Jun", asistencia: 96 },
];

export default function AsistenciaChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="asistencia" />
      </BarChart>
    </ResponsiveContainer>
  );
}