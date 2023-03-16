// import React, { useState, useEffect } from "react";
// import { Nav } from "react-bootstrap";
// import { Switch, Route, useHistory } from "react-router-dom";
// import Chart from "./Chart";
// import Financial from "./Financial";
// import Prediction from "./Prediction";
// import Info from "./Info";

// function TabsExample() {
//   const history = useHistory();
//   const [activeTab, setActiveTab] = useState("chart");

//   const handleSelect = (eventKey) => {
//     setActiveTab(eventKey);
//     history.push(eventKey);
//   };

//   useEffect(() => {
//     switch (activeTab) {
//       case "/Chart":
//         history.push("/Chart");
//         break;
//       case "/Financial":
//         history.push("/Financial");
//         break;
//       case "/Prediction":
//         history.push("/Prediction");
//         break;
//       case "/Info":
//         history.push("/Info");
//         break;
//       default:
//         break;
//     }
//   }, [activeTab, history]);

//   return (
//     <>
//       <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} justify>
//         <Nav.Item>
//           <Nav.Link eventKey="/Chart">Chart</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="/Financial">Financial</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="/Prediction">Prediction</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="/Info">Info</Nav.Link>
//         </Nav.Item>
//       </Nav>
//       <Switch>
//         <Route path="/Chart">
//           <Chart />
//         </Route>
//         <Route path="/Financial">
//           <Financial />
//         </Route>
//         <Route path="/Prediction">
//           <Prediction />
//         </Route>
//         <Route path="/Info">
//           <Info />
//         </Route>
//       </Switch>
//     </>
//   );
// }

// export default TabsExample;
