import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './network/apollo-client'

ReactDOM.render(
  (
    <div className='root' data-app-init='' style={{ width: '100%' }}>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
