import React from 'react'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./">Ronit Nagarapu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav>
                <Nav.Link href="./">Home</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <NavDropdown title="Projects">
                    <NavDropdown.Item href="./">Big Data Website</NavDropdown.Item>
                    <NavDropdown.Item href="https://sites.google.com/view/spotmicro/home">Spot Micro Robot Dog</NavDropdown.Item>
                    <NavDropdown.Item href="https://sites.google.com/view/interactive-tennis-net/home">Interactive Tennis Net</NavDropdown.Item>
                    <NavDropdown.Item href="./">DIY Lightsaber</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




export default NavbarC