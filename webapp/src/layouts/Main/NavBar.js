import React from 'react'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/core'
import { Drawer, Icon, IconButton } from '@material-ui/core'
import { Home, Receipt, Settings, VideogameAsset } from '@material-ui/icons'
import { bool, PropTypes, string } from 'prop-types'
import { merge } from 'lodash'
// Icon courtesy of https://www.freepik.com
import WizardHatLogo from '../../components/icons/wizard-hat.png'
import { NestedNavLink } from '../NestedNavigationMenu/NestedNavLink'

const DrawerNavLink = (props) => {
  return (
    <NavLink activeClassName='active-route' className='route' exact={props.exact} to={props.to}>
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
  .drawer {
    max-width: 50px;
  }
  
  .nested-drawer {
    display: none;
  }
  
  .nested-drawer-open {
    margin-left: 49px;
    display: block;
    background-color: #799c9b !important;
  }

  .active-route {
    background-color: #dbdbdb !important;
  }
  
  .active-menu-item {
    background-color: #799c9b !important;
  }
  
  .bottom-nav-container {
    position: absolute;
    bottom: 0;
  }
  
  .nested-navigation-container {
    margin-top: 75px;
  }
  
  .nested-navigation-links {
    text-align: center;
  }
`

const EmptyNavItem = (props) => {
  const getClassName = () => {
    const { pathname } = window.location
    let className = props.className || ''
    if (props.activeClassName && props.to) {
      className += new RegExp(props.to).test(pathname) ? props.activeClassName : ''
    }
    return className
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  )
}

EmptyNavItem.propTypes = {
  activeClassName: string,
  children: PropTypes.node.isRequired,
  className: string,
  to: string
}

export class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      open: false,
      activeNestedItem: false
    }
    this.closeDrawer = this.closeDrawer.bind(this)
  }

  transactionsBasePath = '/transactions'

  mergeState (newState) {
    // trying to avoid using some kind of state management library, possibly to my own detriment at this point
    // it won't be too hard to add that in later, even if more features are added. in the meantime, need to
    // merge in the existing state with the new state.
    this.setState(merge(this.state, newState))
  }

  toggleDrawer () {
    this.mergeState({ open: !this.state.open })
  }

  closeDrawer () {
    this.mergeState({ open: false, activeNestedItem: '' })
  }

  getNestedListItems () {
    return this.nestedListItems
  }

  setNestedListItems = (items) => { this.nestedListItems = items }

  render () {
    return (
      <div>
        <Drawer anchor='left' classes={{ paper: ('drawer') }} css={NavBarStyle} variant='permanent'>
          <Icon
            css={css`
            width: 100% !important;
            height: 50px !important;
            margin-top: 10px !important;;
            margin-bottom: 100px !important;
          `}
          >
            <img
              alt='Yer a Harry Wizard'
              css={css`
              padding: 12px !important;
              width: 100%;
            `}
              src={WizardHatLogo}
            />
          </Icon>
          <DrawerNavLink exact to='/'>
            <IconButton onClick={this.closeDrawer}>
              <Home />
            </IconButton>
          </DrawerNavLink>
          <EmptyNavItem activeClassName='active-route' className={`${this.state.activeNestedItem === 'transactions' ? 'active-menu-item' : ''}`} to={this.transactionsBasePath} >
            <IconButton onClick={() => {
              if (!this.state.open) {
                this.mergeState({ open: true, activeNestedItem: 'transactions' })
              } else {
                this.mergeState({ open: false, activeNestedItem: '' })
              }
            }}>
              <Receipt />
            </IconButton>
          </EmptyNavItem>
          <DrawerNavLink to='/lets-play'>
            <IconButton onClick={this.closeDrawer}>
              <VideogameAsset />
            </IconButton>
          </DrawerNavLink>
          <div className='bottom-nav-container'>
            <DrawerNavLink to='/settings'>
              <IconButton onClick={this.closeDrawer}>
                <Settings />
              </IconButton>
            </DrawerNavLink>
          </div>
        </Drawer>
        {/* Can add in as many drawers as needed, with some refactoring to make their classes more specific */}
        <Drawer anchor='left' classes={{ paper: ((this.state.open && 'nested-drawer-open') || 'nested-drawer') }} css={NavBarStyle} open={this.state.open} variant='permanent'>
          <div className='nested-navigation-container'>
            <div style={{ padding: '10px', textAlign: 'center' }}>Transactions</div>
            <div className='nested-navigation-links'>
              <NestedNavLink exact onClick={this.closeDrawer} to={`${this.transactionsBasePath}/history`}>
                History
              </NestedNavLink>
              <NestedNavLink exact onClick={this.closeDrawer} to={`${this.transactionsBasePath}/add-transactions`}>
                Add transaction
              </NestedNavLink>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}
