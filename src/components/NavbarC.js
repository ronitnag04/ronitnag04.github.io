import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'

const BottomBorder = {
  borderBottom: '1px solid #CCC',
}

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" variant="light" style={BottomBorder}>
      <Container>
        <Navbar.Brand href="./">Ronit Nagarapu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/#/experience">Experience</Nav.Link>
                <Nav.Link href="/#/projects">Projects</Nav.Link>
                <Nav.Link href="/#/about">About</Nav.Link>
                <Nav.Link href="/#/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}




export default NavbarC