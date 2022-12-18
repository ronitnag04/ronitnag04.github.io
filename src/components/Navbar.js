import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    top:0;
    width:100%;
    height:50px;
    background-color:black;
`

const Links = styled.ul`
    list-style-type:none;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const LinkItem = styled.li`
    margin-right: 20px;
    font-size: 20px;
    text-transform: uppercase;
    color: #f1f1f1;
    cursor: pointer;
`

export const Link = (props) => {
  return (
    <LinkItem>
        <a href={props.link}>
            {props.text}
        </a>
    </LinkItem>
  )
}



const Navbar = () => {
  return (
    <Nav>
        <Links>
            <Link link='https://www.google.com' text='Home' />
            <Link link='https://www.google.com' text='Experience' />
            <Link link='https://www.google.com' text='Projects' />
            <Link link='https://www.google.com' text='About' />
        </Links>
    </Nav>
  )
}

export default Navbar