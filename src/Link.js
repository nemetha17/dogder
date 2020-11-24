import React from 'react'
import {NavLink} from "react-router-dom"
import { css } from "styled-components/macro"

const Link = ({children, ...rest}) =>{
    return (
        <NavLink activeStyle={{ color: "white"}}  {...rest}
        css={css`
        text-decoration: none;
        color: black;

        :hover {
          opacity: 0.9;
        }
    
        `}>
            {children}
        </NavLink>
    )
}

export default Link