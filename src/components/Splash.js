import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background:${props => props.color || 'white'};
    width:100%;
    height:7000px;
`

const Splash = (props) => {
  return (
    <Container
      color={props.color}
    />
  )
}

export default Splash