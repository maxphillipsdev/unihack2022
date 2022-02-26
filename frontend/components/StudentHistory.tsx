import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const StudentHistory = () => {
  const data = [
    {
      name: "23/02/22",
      numeracyCompentency: 0.55,
      literacyCompetency: 0.5,
      emotionalCompetency: 0.2,
    },
    {
      name: "24/02/22",
      numeracyCompentency: 0.5,
      literacyCompetency: 0.6,
      emotionalCompetency: 0.25,
    },
    {
      name: "25/02/22",
      numeracyCompentency: 0.7,
      literacyCompetency: 0.5,
      emotionalCompetency: 0.22,
    },
    {
      name: "26/02/22",
      numeracyCompentency: 0.6,
      literacyCompetency: 0.6,
      emotionalCompetency: 0.3,
    },
    {
      name: "27/02/22",
      numeracyCompentency: 0.6,
      literacyCompetency: 0.7,
      emotionalCompetency: 0.5,
    },
  ];
  return (
    <ResponsiveContainer width="90%" height="100%">
      <LineChart
        data={data}
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="numeracyCompentency" stroke="#8884d8" />
        <Line type="monotone" dataKey="literacyCompetency" stroke="#82ca9d" />
        <Line type="monotone" dataKey="emotionalCompetency" stroke="#f25c5c" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StudentHistory;
