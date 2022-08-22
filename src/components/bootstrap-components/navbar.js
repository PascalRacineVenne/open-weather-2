// import {Container, Row, Col, Navbar } from 'react-bootstrap';
import Search from '../search/search.js'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({handleOnSearchChange}) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Row>
          <Col xs md lg xl={2}>
            <Navbar.Brand href="#home">Open Weather</Navbar.Brand>
          </Col>
          <Col xs md lg xl="auto">
            <Search onSearchChange={handleOnSearchChange}/>
          </Col>
          <Col xs md lg xl={2}>
            <h2>Test</h2>
          </Col>
        </Row>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default BasicExample;