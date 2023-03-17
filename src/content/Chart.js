import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

function Chart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400 },
    { name: "Page B", uv: 300, pv: 2000, amt: 2400 },
    { name: "Page C", uv: 200, pv: 1600, amt: 2400 },
    { name: "Page D", uv: 100, pv: 1200, amt: 2400 },
    { name: "Page E", uv: 10, pv: 2400, amt: 2400 },
    { name: "Page f", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page g", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page h", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page i", uv: 400, pv: 2400, amt: 2400 },
  ];

  return (
    <LineChart width={600} height={500} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}

export default Chart;
