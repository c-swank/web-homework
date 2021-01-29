import React from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, Input, TextField, Typography } from '@material-ui/core'
import { css } from '@emotion/core'
import { addTransaction } from '../../services/addTransactions'

const Style = css`
  width: 400px;
  
  .form {
    width: 100%;
  }
`

export class AddTransactionPage extends React.Component {
  constructor () {
    super()
    // normamlly would expect data like userId to be provided by a user authentication microservice
    this.state = {
      userId: '33333',
      description: '',
      merchantId: '',
      debit: false,
      credit: false,
      amount: 0.0
    }

    this.submitForm = this.submitForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  submitForm () {
    const { userId, description, merchantId, debit, credit, amount } = this.state
    const data = {
      user_id: userId,
      description: description,
      merchant_id: merchantId,
      debit: debit,
      credit: credit,
      amount: parseFloat(amount)
    }

    // TODO: Implement form state updates on addTransaction response
    addTransaction(data)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div css={Style}>
        <Typography variant='h5'>Add a new transaction</Typography>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.submitForm()
        }}>
          <FormControl style={{ width: '100%' }}>
            <Input label='Merchant' name='merchantId' onChange={this.handleInputChange} placeholder='Merchant' value={this.state.merchantId} />
            <FormControlLabel
              control={<Checkbox />}
              label='Credit'
              name='credit'
              onChange={this.handleInputChange}
              value={this.state.credit}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='Debit'
              name='debit'
              onChange={this.handleInputChange}
              value={this.state.debit}
            />
            <Input name='amount' onChange={this.handleInputChange} placeholder='Amount' type='number' value={this.state.amount} />
            <TextField
              label='Description'
              multiline
              name='description'
              onChange={this.handleInputChange}
              placeholder='Description'
              rows={2}
              rowsMax={5}
              value={this.state.description}
            />
            <Button type='submit'>Submit</Button>
          </FormControl>
        </form>
      </div>
    )
  }
}
