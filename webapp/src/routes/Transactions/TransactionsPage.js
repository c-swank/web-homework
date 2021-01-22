import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AddTransactionPage } from './AddTransactionPage'
// import { DataGrid } from '@material-ui/data-grid'

const HistoryPage = () => {
  return (
    <div>
      Sample History Page
    </div>
  )
}

export default function TransactionsPage () {
  const baseRoute = '/transactions'
  return (
    <Container>
      <Switch>
        <Route path={`${baseRoute}/history`}>
          <HistoryPage />
        </Route>
        <Route path={`${baseRoute}/add-transactions`}>
          <AddTransactionPage />
        </Route>
      </Switch>
    </Container>
  )
}
