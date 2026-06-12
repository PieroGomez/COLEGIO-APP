"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

const data = [
  { name: "1ro", value: 40 },
  { name: "2do", value: 45 },
  { name: "3ro", value: 50 },
  { name: "4to", value: 55 },
  { name: "5to", value: 60 },
];

export default function AlumnosPorGradoChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}