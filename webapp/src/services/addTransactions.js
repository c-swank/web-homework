import { client } from '../network/apollo-client'
import { AddTransaction } from '../gql/transactions.gql'

// TODO: Implement handing mutate respnose to update form
export const addTransaction = (inputData) => {
  client.mutate({
    mutation: AddTransaction,
    variables: { ...inputData }
  })
}

// TODO: Implement bulk transaction adding
// export const addTransactions = (transactions) => {
//   transactions.forEach(transaction => addTransaction(transaction))
// }
