import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainLayout } from './Main/MainLayout'
import TransactionsPage from '../routes/Transactions/TransactionsPage'

export function AppLayout () {
  return (
    <Router>
      <Suspense>
        <MainLayout>
          <Switch>
            <Route exact path='/' />
            <Route path='/transactions'>
              <TransactionsPage />
            </Route>
          </Switch>
        </MainLayout>
      </Suspense>
    </Router>
  )
}
