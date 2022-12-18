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
                <Nav.Link href="./">Experience</Nav.Link>
                <NavDropdown title="Projects">
                    <NavDropdown.Item href="./">Big Data Website</NavDropdown.Item>
                    <NavDropdown.Item href="./">Spot Micro Robot Dog</NavDropdown.Item>
                    <NavDropdown.Item href="./">Interactive Tennis Net</NavDropdown.Item>
                    <NavDropdown.Item href="./">DIY Lightsaber</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="./">About</Nav.Link>
                <Nav.Link href="./">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




export default NavbarC