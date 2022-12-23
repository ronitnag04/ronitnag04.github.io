import React from 'react'
import { Container, Row, Image, Col, Button, Card} from 'react-bootstrap'
import styled from 'styled-components'

const Title = styled.h1`
  color:black;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: 700;
  font-size: 6vw;
`

const Blurb = styled.h2`
  color:black;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 1.5vw;
`

const MainImageStyle = {
  borderRadius: '40px',
}

const ButtonStyle = {
  backgroundColor:'#0094FF',
  border: '#0094FF',
}

const ProjectsBannerStyle = {
  backgroundColor:'#0094FF',
  textAlign: 'center',
  padding: '8px',
}

const ProjectsTitle = styled.h1`
  color:white;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: 900;
  font-size: 3rem;
  margin:auto;
`

const CardButtonStyle = {
  backgroundColor:'#0094FF',
  border: '#0094FF',
}

const ProjectButtonStyle = {
  marginLeft:'1vw',
  backgroundColor:'#0094FF',
  border: '#0094FF',
}

const Splash = () => {
  return (
      <Container  bg="light">

        <Row xs={12} sm={12} md={12} lg={12} className="pt-2 g-5">
          <Col md={6} className="pt-6">
            <Row className="pt-5">
              <Title>Hello! Nice to meet you!</Title>
            </Row>
            <Row className="py-3">
              <Blurb>I am an Electrical Engineering and Computer Science student at UC Berkeley -- Go Bears :)</Blurb>
              <Blurb>I am interested in oppurtunities with data analytics, machine learning, solar cells, hydrogen fuel cells, asteroid mining</Blurb>
            </Row>
            <Button style={ButtonStyle} size="lg" href='./contact' className='shadow'>Contact</Button>
          </Col>
          <Col md={6}>
            <Image fluid src={require('../images/main_lightsaber.png')} alt='Image not found' style={MainImageStyle}></Image>
          </Col>
        </Row>

        <Row style={ProjectsBannerStyle} className='mt-2'>
          <ProjectsTitle>Projects</ProjectsTitle>
        </Row>

        <Row className="p-4 g-5 row-cols-1 row-cols-md-2 mb-2">
          
          <Col className='d-flex'>
            <Card xs={6} className='border-light shadow-lg flex-fill'>
              <Card.Img variant="top" src={require('../images/DSDP_applied_materials_poster.jpg')}/>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>Applied Materials Data Analysis</Card.Title>
                <Card.Text>
                Conducted time series data analysis for Applied Material’s 
                AIx Division on semiconductors. Part of UC Berkeley’s 
                Data Science Discovery Program
                </Card.Text>

                <Card.Text className='text-muted'>
                Skills: Python, Pandas, Seaborn, Scikit-learn, Scipy, Darts, 
                Deepnote
                </Card.Text>

                <Button style={CardButtonStyle} href="./" className='mt-auto'>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className='d-flex'>
            <Card xs={6} className='border-light shadow-lg flex-fill'>
              <Card.Img variant="top" src={require('../images/spot_micro_thumbnail.jpg')}/>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>Spot Micro Robot Dog</Card.Title>
                <Card.Text>
                Designed and constructed electronics and mechanics for 
                quadruped robot dog. Inspired by Spot Micro AI open-source project.
                </Card.Text>

                <Card.Text className='text-muted'>
                Skills: Python, BASH, CAD, 3D-printing, Raspberry Pi, 
                Soldering, Circuit Design, Sensors, Power Electronics 
                </Card.Text>

                <Button style={CardButtonStyle} href="./" className='mt-auto'>Learn More</Button>
              </Card.Body>
            </Card> 
          </Col>
        </Row>

        <Row className="px-4">
          <div class="d-flex justify-content-end">
            <Blurb>Learn more about my projects <span><Button style={ProjectButtonStyle} href="./projects">Projects</Button></span></Blurb>
          </div>
        </Row>

    </Container>
  )
}

export default Splash