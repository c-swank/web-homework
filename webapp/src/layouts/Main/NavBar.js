import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/core'
import { Drawer, Icon, IconButton } from '@material-ui/core'
import { Close, Home, Menu, Receipt, VideogameAsset } from '@material-ui/icons'
import { bool, PropTypes, string } from 'prop-types'
import { navBarWidth } from '../layoutConstants'
// Icon courtesy of https://www.freepik.com
import WizardHatLogo from '../../components/icons/wizard-hat.png'

const DrawerNavLink = (props) => {
  return (
    <NavLink activeClassName='active-route' exact={props.exact} to={props.to}>
      {props.children}
    </NavLink>
  )
}

DrawerNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  exact: bool,
  to: string
}

const NavBarStyle = css`
  width: ${navBarWidth};

  .active-route {
    background-color: #dbdbdb !important;
  }
`

const OpenDrawerIconStyle = css`
  position: fixed !important;
`

export function NavBar () {
  const [state, setState] = React.useState({
    open: false
  })

  const toggleDrawer = (open) => {
    setState({ open })
  }

  const closeDrawer = () => {
    toggleDrawer(false)
  }

  return (
    <div>
      <IconButton css={OpenDrawerIconStyle} onClick={() => { toggleDrawer(true) }}>
        <Menu />
      </IconButton>
      <Drawer anchor='left' css={NavBarStyle} open={state.open}>
        <IconButton onClick={closeDrawer} >
          <Close />
        </IconButton>
        <Icon css={css`
        width: 100% !important;
        height: 50px !important;
        padding-bottom: 100px !important;
      `}>
          <img
            alt='Yer a Harry Wizard'
            css={css`
              padding: 12px !important;
            `}
            src={WizardHatLogo}
            width={25}
          />
        </Icon>
        <DrawerNavLink exact to='/'>
          <IconButton onClick={closeDrawer}>
            <Home />
          </IconButton>
        </DrawerNavLink>
        <DrawerNavLink to='/transactions'>
          <IconButton onClick={closeDrawer}>
            <Receipt />
          </IconButton>
        </DrawerNavLink>
        <DrawerNavLink to='/lets-play'>
          <IconButton onClick={closeDrawer}>
            <VideogameAsset />
          </IconButton>
        </DrawerNavLink>
      </Drawer>
    </div>
  )
}
