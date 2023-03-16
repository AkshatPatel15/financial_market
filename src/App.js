import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Tickerdropdown from "./sidebar/Tickerdropdown";
import Nav_bar from "./searchbar/Nav_bar";
import { Col, Container, Row } from "react-bootstrap";
import Content_nev from "./content/Content_nev";
import TabsExample from "./content/TabsExample";

function App() {
  function fetchData() {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((response) => {
        // handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // handle the error if the request fails
        console.log(error);
      });
  }
  return (
    <>
      <Nav_bar></Nav_bar>
      <Container>
        <Row>
          <Col bg="primary" sm={4}>
            <Tickerdropdown></Tickerdropdown>
          </Col>
          <Col sm={8}>
            <Content_nev></Content_nev>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
