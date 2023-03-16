import { Container, Nav, Navbar } from "react-bootstrap";

function Content_nev() {
  return (
    <>
      <Nav
        variant="tabs"
        className="justify-content-center"
        defaultActiveKey="/Chart"
      >
        <Nav.Item>
          <Nav.Link defaultActiveKey="/chart">Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link defaultActiveKey="/financial">Financial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link defaultActiveKey="/prediction">Prediction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link defaultActiveKey="/info">Info</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Content_nev;
