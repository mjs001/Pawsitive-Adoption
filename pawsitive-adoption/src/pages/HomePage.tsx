import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { fetchApi } from '../utils/fetchApi';
import axios from 'axios';
export default function HomePage() {
  useEffect(() => {
    fetchApi
      .get(`/dogs/search`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={6}>{/* //put stuff here */}</Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
