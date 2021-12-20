import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    { id: 1, name: "lorem11", time: "10pm", space: 5, price: 20 },
    { id: 2, name: "lorem12", time: "10pm", space: 8, price: 15 },
    { id: 3, name: "lorem13", time: "10pm", space: 2, price: 18 },
    { id: 4, name: "lorem14", time: "10pm", space: 8, price: 30 },
    { id: 5, name: "lorem15", time: "10pm", space: 3, price: 22 },
    { id: 6, name: "lorem16", time: "10pm", space: 9, price: 39 }
]
const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <h1>available {date.toDateString()}</h1>
            {
                bookingSuccess && <Alert severity="success">Appointment Booked SuccessFully!</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointments;