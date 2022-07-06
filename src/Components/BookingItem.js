import { format, parseISO } from 'date-fns'
import React from 'react'

const BookingItem = ({booking}) => {
  return (
    <p>
      {format(parseISO(booking.arrival), 'yyyy-MM-dd')} - {format(parseISO(booking.departure), 'yyyy-MM-dd')}
    </p>
  )
}

export default BookingItem