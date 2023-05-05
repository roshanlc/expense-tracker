import ExpenseForm from './ExpenseForm/ExpenseForm'

export default function ExpenseHome() {
  const readForm = (data) => {
    console.log(data)
    /*
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    const day = date.toLocaleString('en-US', { day: '2-digit' })

    */
  }

  return (
    <div>
      <ExpenseForm onSubmit={readForm} />
    </div>
  )
}
