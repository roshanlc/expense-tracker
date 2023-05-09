import Typography from '@mui/joy/Typography'
import { Paper, Stack, Divider, Button } from '@mui/material'

export default function ExpenseItem(props) {
  const date = new Date(props.date)
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  const day = date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <Paper variant="outlined" square sx={{ p: 3, m: 1 }}>
      <Stack
        spacing={5}
        direction={'row'}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          justifyContent: 'center',
        }}
      >
        <Stack direction={'column'} spacing={1} sx={{ border: '' }} flex={'2'}>
          <Typography fontSize="lg">{year}</Typography>
          <Typography fontSize="lg">{day}</Typography>
          <Typography fontSize="lg">{month}</Typography>
        </Stack>

        <Typography fontSize="lg" flex={'2'}>
          {props.title}
        </Typography>
        <Typography fontSize="lg" flex={'2'}>
          ${props.amount}
        </Typography>
        <Stack
          flex={'1'}
          direction={'column'}
          spacing={1}
          sx={{ justifyContent: 'center', justifyItems: 'center' }}
        >
          <Button variant="outlined">Delete</Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
