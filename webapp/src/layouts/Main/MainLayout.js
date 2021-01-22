import React from 'react'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { css } from '@emotion/core'
import { PropTypes } from 'prop-types'
import { NavBar } from './NavBar'

const MainContentContainerStyle = css`
  margin-top: 15px;
  padding-left: 50px;
`

export class MainLayout extends React.Component {
  render () {
    return (
      <div
        className='main-container'
        style={{
          overflow: 'auto',
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        <CssBaseline />
        <NavBar />
        <Container css={MainContentContainerStyle}>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
