import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default class NavBar extends Component {
    render() {
      return (
        <Navbar expand="xl" bg="primary" variant="dark">
        <Navbar.Brand href="#home">  <img
        alt=""
        src="/logo1.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} SlamBook.Com</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl type="text"  placeholder="Email" className="mr-sm-2" />
          <FormControl type="password" placeholder="Password" className="mr-sm-2" />
          <Button variant=""><b>LogIn</b></Button>
        </Form>
      </Navbar>
      )}}