import React from 'react'
import { css } from "styled-components/macro"
import { Link as RouterLink } from "react-router-dom"

import Link from "./Link"
import Container from "./components/Container"
import Title from "./components/Title"
import Nav from "./components/header/Nav"
import LogoImage from "./components/header/LogoImage"


const Header = () => {
    return (
      <Container>
        <RouterLink
          to="/"
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: black;
            text-decoration: none;
          `}
        >
          <LogoImage src="https://images.creativemarket.com/0.1.0/ps/7143452/300/200/m2/fpnw/wm0/dog-logo-01-.jpg?1571185908&s=e953d34e031ce2dfd7d3e9dd8e9d2ac9" alt="logo" />
          <Title>Dogder</Title>
        </RouterLink>
        <Nav>
          <Link exact to="/">
            Dogder
          </Link>
          <Link exact to="/saved">
            Saved
          </Link>
        </Nav>
      </Container>
    )
  }
export default Header
