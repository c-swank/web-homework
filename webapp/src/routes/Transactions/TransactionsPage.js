import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { css } from '@emotion/core'
// import { DataGrid } from '@material-ui/data-grid'
import { NestedNavigationMenuLayout } from '../../layouts/NestedNavigationMenu/NestedNavigationMenuLayout'
import { bool, PropTypes, string } from 'prop-types'

const NestedNavigationContentContainerStyle = css`
  height: calc(100vh - 10px);
  display: inline-block;
  padding: 10px 20px 0 20px;
`

const NestedNavigationContentContainer = (props) => {
  return (
    <div css={NestedNavigationContentContainerStyle}>
      {props.children}
    </div>
  )
}

NestedNavigationContentContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const HistoryPage = () => {
  return (
    <div style={{ height: '2000px' }}>
      Some element
    </div>
  )
}

const NestedNavLink = (props) => {
  return (
    <NavLink activeClassName='active-nested-route' exact={props.exact} to={props.to}>
      {props.children}
    </NavLink>
  )
}

NestedNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  exact: bool,
  to: string
}

export default function TransactionsPage () {
  const basePath = '/transactions'

  return (
    <div>
      <NestedNavigationMenuLayout headerMessage='Transactions'>
        <NestedNavLink to={`${basePath}/history`}>
          History
        </NestedNavLink>
        <NestedNavLink to={`${basePath}/new-transaction`}>
          Add New Transaction
        </NestedNavLink>
      </NestedNavigationMenuLayout>
      <NestedNavigationContentContainer>
        <Switch>
          <Route path='/transactions/history'>
            <HistoryPage />
          </Route>
        </Switch>
      </NestedNavigationContentContainer>
    </div>
  )
}
