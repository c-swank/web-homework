import React from 'react'
import { PropTypes } from 'prop-types'
import { NavBar } from './NavBar'

export function MainLayout (props) {
  return (
    <div className='main-container' style={{ height: '100vh', overflow: 'auto' }}>
      <NavBar />
      <div style={{ display: 'inline-block' }}>
        {props.children}
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
