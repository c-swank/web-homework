import React from 'react'
import { css } from '@emotion/core'
import { PropTypes, string } from 'prop-types'

const NavigationHeaderStyle = css`
  padding-bottom: 50px;
`

export function NavigationHeader (props) {
  return (
    <div css={NavigationHeaderStyle}>
      {props.headerMessage || ''}
    </div>
  )
}

NavigationHeader.propTypes = {
  headerMessage: string
}

const NavigationContainerStyle = css`
  max-width: 200px;
  min-width: 10px;
  height: calc(100vh - 100px);
  display: inline-block;
  float: left;
  background-color: #d3e7e8;
  padding: 100px 20px 0 20px;
`

const NavigationLinkContainerStyle = css`
  & > * {
    display: block;
  }
`

export function NestedNavigationMenuLayout (props) {
  return (
    <div className='nest-menu-container' css={NavigationContainerStyle}>
      <NavigationHeader headerMessage={props.headerMessage} />
      <div css={NavigationLinkContainerStyle}>
        {props.children}
      </div>
    </div>
  )
}

NestedNavigationMenuLayout.propTypes = {
  headerMessage: string,
  children: PropTypes.node.isRequired
}
