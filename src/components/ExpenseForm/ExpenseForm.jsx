import { useState } from 'react'
import './ExpenseForm.css'
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Divider,
  Button,
} from '@mui/material'
import Sheet from '@mui/joy/Sheet'
import Add from '@mui/icons-material/Add'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Alert from '@mui/joy/Alert'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'

export default function ExpenseForm(props) {
  const [titleValue, setTitleValue] = useState('')
  const [amountValue, setAmountValue] = useState('')
  const [dateValue, setDateValue] = useState('')
  const [alert, setAlert] = useState('')

  // Handler for title input
  const titleHandler = (event) => {
    setTitleValue(event.target.value)
  }

  // Handler for amount input
  const amountHandler = (event) => {
    setAmountValue(event.target.value)
  }

  // Handler for date input
  const dateHandler = (event) => {
    setDateValue(event.target.value)
  }

  // Handler for form submission
  const addExpenseHandler = (event) => {
    // prevent POST submission of form data
    event.preventDefault()

    if (titleValue.trim().length === 0) {
      setAlert('Please provide title for the expense.')
      return
    }

    if (Number(amountValue) <= 0) {
      setAlert('The expense amount must be greater than zero.')
      return
    }
    const expenseDate = new Date(dateValue)

    const data = {
      title: titleValue,
      amount: amountValue,
      date: expenseDate,
    }

    // send data to parent function
    props.onSubmit(data)

    // reset the form
    resetForm()
  }

  const resetForm = () => {
    setTitleValue('')
    setAmountValue('')
    setDateValue('')
  }
  // Close the alert box
  const closeAlert = (event) => {
    setAlert('')
  }

  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 2 }}>
      <form onSubmit={addExpenseHandler}>
        <FormControl fullWidth>
          <InputLabel htmlFor="title">Title</InputLabel>
          <OutlinedInput
            id="title"
            label="Title"
            name="title"
            type="required"
            required={true}
            onChange={titleHandler}
            value={titleValue}
          />
        </FormControl>

        <Divider variant="inset" style={{ height: '1rem' }} />

        <FormControl fullWidth>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
            id="amount"
            name="amount"
            startAdornment={
              <InputAdornment position="start">$ </InputAdornment>
            }
            label="Amount"
            type="number"
            required={true}
            onChange={amountHandler}
            value={amountValue}
          />
        </FormControl>

        <Divider variant="inset" style={{ height: '1rem' }} />

        <FormControl fullWidth>
          {/* <InputLabel htmlFor="amount">Date</InputLabel> */}
          <OutlinedInput
            id="date"
            name="date"
            type="date"
            label="Date"
            required={true}
            onChange={dateHandler}
            value={dateValue}
          />
        </FormControl>
        <Button
          variant="contained"
          style={{ marginTop: '1rem' }}
          startIcon={<Add />}
          type="submit"
        >
          Add New Expense
        </Button>
      </form>

      {alert.trim().length > 0 && (
        <>
          <Divider variant="inset" style={{ height: '1rem' }} />
          <Alert
            key="alert-box"
            sx={{ alignItems: 'flex-start' }}
            variant="soft"
            color="primary"
            endDecorator={
              <IconButton
                variant="soft"
                size="sm"
                color="primary"
                onClick={closeAlert}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            <div>
              <Typography fontWeight="lg" mt={0.25}>
                Alert
              </Typography>
              <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                {alert}
              </Typography>
            </div>
          </Alert>
        </>
      )}
    </Sheet>
  )
}
