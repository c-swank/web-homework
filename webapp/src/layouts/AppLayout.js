import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainLayout } from './Main/MainLayout'
import TransactionsPage from '../routes/Transactions/TransactionsPage'
import { Home } from '../home/home-page'
import HomePage from '../routes/Home/HomePage'

export function AppLayout () {
  return (
    <Router>
      <Suspense>
        <MainLayout>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/transactions'>
              <TransactionsPage />
            </Route>
            <Route path='/prebuilt-home'>
              <Home />
            </Route>
          </Switch>
        </MainLayout>
      </Suspense>
    </Router>
  )
}
