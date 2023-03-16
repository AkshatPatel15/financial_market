import { Button, Container, Form, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav_bar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Trading Platform</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;
