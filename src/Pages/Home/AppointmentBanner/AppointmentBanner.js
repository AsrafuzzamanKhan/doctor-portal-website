import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const AppointmentBg = {
    background: `url(${bg})`,
    backgroundPosition: "center",
    backgroundBlendMode: "darken, luminosity",
    backgroundColor: 'rgba(67, 65, 92,.8)',

    marginTop: 150
}
const AppointmentBanner = () => {

    return (
        <Box style={AppointmentBg} sx={{ flexGrow: 1 }}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: '400px', marginTop: '-115px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6'>
                            Appointment
                        </Typography>
                        <Typography variant='h4'>
                            Make an Appointment today
                        </Typography>
                        <Typography variant='h5'>
                            lorem200
                        </Typography>
                        <Button>Learn more</Button>

                    </Grid>

                </Grid>
            </Box>
        </Box >
    );
};

export default AppointmentBanner;