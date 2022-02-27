import { Box } from "@chakra-ui/react";
import React from "react";
import {
  RadialBarChart,
  Legend,
  Tooltip,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

interface Props {}

const data = [
  {
    name: "Math",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Chinese",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "English",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Geography",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "Physics",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "History",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
];

const StudentRadialBar: React.FC<Props> = () => {
  return (
    <ResponsiveContainer width="100%" height="150%">
      <RadialBarChart
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          name="progress"
          label={{ fill: "#666", position: "insideStart" }}
          background
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={110}
          layout="vertical"
          verticalAlign="top"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default StudentRadialBar;
