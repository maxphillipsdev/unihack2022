import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StudentHistory = () => {
  const data = [
    { name: "a", pv: 12 },
    { name: "b", pv: 13 },
    { name: "c", pv: 5 },
    { name: "d", pv: 1 },
    { name: "e", pv: 7 },
  ];
  return (
    <div>
      <LineChart
        width={500}
        height={200}
        data={data}
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};

export default StudentHistory;
