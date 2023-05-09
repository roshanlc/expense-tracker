import ExpenseForm from './ExpenseForm/ExpenseForm'
import ExpenseItem from './ExpenseItem/ExpenseItem'

export default function ExpenseHome() {
  const readForm = (data) => {
    console.log(data)
    const date = new Date(data.date)
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    const day = date.toLocaleString('en-US', { day: '2-digit' })
    console.log(year, month, day)
  }

  return (
    <div>
      <ExpenseForm onSubmit={readForm} />
      <ExpenseItem />
    </div>
  )
}
