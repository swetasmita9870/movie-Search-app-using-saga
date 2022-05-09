import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

const Header = ({query,setQuery})=> {
  return (
      <>
    <Navbar className="nav-main">
     <Navbar variant="dark" bg="dark" expand="lg" className="mainnav"></Navbar>
     <Navbar.Brand href="#home">
      <img
        src={require('./logo.png')}
        width="100"
        height="70"
        className="d-inline-block align-left"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
     <Form className="d-flex">
        <FormControl
          type="search"
          value={query}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      </Navbar>
    </>
  );
};

export default Header;
