import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Sidebar_td from "./Sidebar_td";

function Tickerdropdown() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/tickers")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Table striped bordered hover>
        {data.map((option) => (
          <tr>
            <td key={option} value={option}>
              <Sidebar_td ticker={option}></Sidebar_td>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default Tickerdropdown;
