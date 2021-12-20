import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess('Doctor Added successfully')

                }
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    return (
        <div>
            <h3>Add doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic"
                    required
                    sx={{ width: "50%" }}
                    label="Name"
                    variant="standard"
                    onChange={e => setName(e.target.value)}
                    name="name"
                />
                <br />
                <TextField id="standard-basic"
                    required
                    sx={{ width: "50%" }}
                    label="email"
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                    name="email"
                    type="email"
                />
                <br />
                <Input
                    accept="image/*"
                    sx={{ width: "50%", mt: 2 }}
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button
                    sx={{ width: "50%", mt: 2 }}
                    variant="contained"
                    type="submit"
                >
                    Add doctor
                </Button>

            </form>
            {success && <p>{success} </p>

            }
        </div>
    );
};

export default AddDoctor;