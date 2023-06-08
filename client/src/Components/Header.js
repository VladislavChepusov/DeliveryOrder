import React from "react";
import { Nav, Navbar } from "react-bootstrap";


export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="me-2"> <Nav.Link href="/">
          Почтовый Груз
        </Nav.Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responvise-navbar-nav" />
        <Navbar.Collapse id="responvise-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link href="/create">
              Оформить заказ
            </Nav.Link>
            <Nav.Link href="/orders">
              Текущие Заказы

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  );

}