import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51JxuwnHGpG3qJjDoA9U1PlqgLwMTZt2PYYvt6O4OxwCGFbiR3gUvBQoICsmkK1FFiV2UrUA6P9TmuEKZJuddtRTp00hrfwFTwq');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <div>
            <h1>Payment: {appointmentId}</h1>

            <h4>Service Name: {appointment.serviceName} </h4>
            <h4>Patient Name: {appointment.patientName} </h4>
            <h4>price: ${appointment.price} </h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;