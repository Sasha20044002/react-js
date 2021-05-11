import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';
const Links = () => {
  return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><Link to={'/'}>Home</Link></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features"><Link to={'/profile'}>Profile</Link></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </div>
  )
};

export default Links