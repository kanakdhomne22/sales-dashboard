"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 5200 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6800 },
  { month: "May", sales: 5900 },
  { month: "Jun", sales: 7600 },
  { month: "Jul", sales: 6400 },
  { month: "Aug", sales: 8200 },
  { month: "Sep", sales: 7100 },
  { month: "Oct", sales: 9000 },
  { month: "Nov", sales: 8500 },
  { month: "Dec", sales: 9800 },
];

export default function SalesChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="sales"
            fill="#4857f6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}