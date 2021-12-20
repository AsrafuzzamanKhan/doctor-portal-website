import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';



const Services = () => {
    const services = [
        { name: "Fluoride Treatment", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia a esse labore aliquam fuga fugiat sed excepturi mollitia et?", img: fluoride },
        { name: "Cavity Filling", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia a esse labore aliquam fuga fugiat sed excepturi mollitia et?", img: cavity },
        { name: "Teeth Whitening", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia a esse labore aliquam fuga fugiat sed excepturi mollitia et?", img: whitening }
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'success.main', m: 2, fontWeight: 500 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;