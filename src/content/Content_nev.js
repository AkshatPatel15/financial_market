import { useState } from "react";

import Chart from "./Chart";
import Financial from "./Financial";
import Prediction from "./Prediction";
import Info from "./Info";
import { Nav } from "react-bootstrap";

function Content_nev() {
  const [activeTab, setActiveTab] = useState("Chart");

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  let componentToRender;
  switch (activeTab) {
    case "Chart":
      componentToRender = <Chart />;
      break;
    case "Financial":
      componentToRender = <Financial />;
      break;
    case "Prediction":
      componentToRender = <Prediction />;
      break;
    case "Info":
      componentToRender = <Info />;
      break;
    default:
      break;
  }

  return (
    <>
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} justify>
        <Nav.Item>
          <Nav.Link eventKey="Chart">Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Financial">Financial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Prediction">Prediction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Info">Info</Nav.Link>
        </Nav.Item>
      </Nav>
      {componentToRender}
    </>
  );
}

export default Content_nev;
