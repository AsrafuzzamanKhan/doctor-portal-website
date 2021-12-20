import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false)
    const handleOnBlue = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Make An Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlue}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
                {
                    success && <Alert severity="success">This is a success alert — check it out!</Alert>
                }

            </form>
        </div>
    );
};

export default MakeAdmin;