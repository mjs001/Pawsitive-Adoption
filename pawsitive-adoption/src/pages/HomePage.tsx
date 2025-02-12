import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { fetchApi } from '../utils/fetchApi';
import axios from 'axios';
import Title from '../components/Title';
import '../sass/main.scss';
export default function HomePage() {
  let tries = 3;
  useEffect(() => {
    setTimeout(() => {}, 1500);
    fetchApi
      .get(`/dogs/search`, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div className='homepageContainer'>
      <Title />
      <Navbar />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={6}>{/* //put stuff here */}</Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
