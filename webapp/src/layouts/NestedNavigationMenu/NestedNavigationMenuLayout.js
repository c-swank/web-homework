import React from 'react'
import { css } from '@emotion/core'
import { PropTypes, string } from 'prop-types'

const NavigationHeaderStyle = css`

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

`

const NavigationLinkContainerStyle = css`
  & > * {
    display: block;
  }
`

export function NestedNavigationMenuLayout (props) {
  return (
    <div className='nested-menu-container' css={NavigationContainerStyle}>
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
