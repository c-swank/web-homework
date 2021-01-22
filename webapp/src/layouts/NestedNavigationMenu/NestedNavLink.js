import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/core'
import { bool, func, PropTypes, string } from 'prop-types'

const NestedNavLinkStyle = css`
  color: #083254;
  margin-top: 10px;
  width: 100%;
  display: inline-block;
  
  font-style: normal;
  text-decoration: underline;
  
  & :not(.active-nested-route) {
    font-style: italic;
    text-decoration: none;
  }
`

export function NestedNavLink (props) {
  return (
    <NavLink activeClassName='active-nested-route' css={NestedNavLinkStyle} exact={props.exact} onClick={props.onClick} to={props.to}>
      {props.children}
    </NavLink>
  )
}

NestedNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  exact: bool,
  onClick: func,
  to: string
}
