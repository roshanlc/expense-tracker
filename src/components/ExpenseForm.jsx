import { useState } from 'react'
import './ExpenseForm.css'
import { Spacer, Flex, Square } from '@chakra-ui/react'

export default function ExpenseForm(props) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setAmount('')
    setDate('')
  }

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }
  const addExpenseAction = (event) => {
    event.preventDefault()
    const enteredExpenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    }

    props.onSaveExpenseData(enteredExpenseData)

    resetForm()
  }

  return (
    <Square borderRadius="5px">
      <form onSubmit={addExpenseAction}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              name="amount"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              name="date"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add New Expense</button>
          </div>
        </div>
      </form>
    </Square>
  )
}
