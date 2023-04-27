import axios from "axios";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/chart")
      .then((response) => {
        const dataObj = response.data;
        const dataArray = [];
        for (const [key, value] of Object.entries(dataObj)) {
          dataArray.push({ name: new Date(parseInt(key)), low: value });
        }
        setData(dataArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  const strokeDasharray = data.map((item) => item.low).join(",");

  return (
    <LineChart width={600} height={500} data={data}>
      <CartesianGrid strokeDasharray={strokeDasharray} />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="low" stroke="#8884d8" />
    </LineChart>
  );
}

export default Chart;
