import ExpenseForm from './ExpenseForm/ExpenseForm'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import './ExpenseHome.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ExpenseHome() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (data) => {
    const date = new Date(data.date)
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    const day = date.toLocaleString('en-US', { day: '2-digit' })

    const expense = {
      id: `expense- ${date.valueOf()}`,
      title: data.title,
      amount: data.amount,
      date: {
        year: year,
        month: month,
        day: day,
      },
    }
    localStorage.setItem(expense.id, JSON.stringify(expense))

    setExpenses([expense, ...expenses])
  }

  // fetch todo items from localStorage
  useEffect(() => {
    const expData = []
    // fetch items from localStorage
    const items = Object.keys(localStorage)
    for (const item of items) {
      if (item.includes('expense-')) {
        expData.push(JSON.parse(localStorage.getItem(item)))
      }
    }
    setExpenses(expData)
  }, [])

  const readForm = (data) => {
    addExpense(data)
  }

  const removeExpense = (id) => {
    localStorage.removeItem(id)
    setExpenses(expenses.filter((item) => item.id !== id))
  }

  return (
    <div className="expense-home">
      <ExpenseForm onSubmit={readForm} />
      {expenses.map((expense) => {
        console.log(expense.id)
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            deleteAction={() => {
              removeExpense(expense.id)
            }}
          />
        )
      })}
    </div>
  )
}
