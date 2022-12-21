import React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Header = styled.header`
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(82,87,88,1) 85%, rgba(0,0,0,1) 100%);
`

const Title = styled.h1`
  color:white;
  font-family: 'Helvetica 65 Medium', sans-serif;
  font-weight: 700;
  font-size: 3.0rem;
`
const topBorder = {
  borderTop: '1px solid #fff',
}

const Splash = () => {
  return (
    <Header>
      <Container bg="dark" style={topBorder}>
      <Row className="pt-5">
        <Col md={6}>
          <Title>Hello!</Title>
        </Col>
        <Col md={6}>
          <Image fluid src={require('../images/main_lightsaber.png')} alt='Image not found'></Image>
        </Col>
        

      </Row>
      
    </Container>


    </Header>

    
  )
}

export default Splash