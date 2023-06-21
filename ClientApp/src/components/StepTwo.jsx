import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import 'animate.css';

const StepTwo = ({ onNext, onPrevious }) => {
  const [exitAnimate, setExitAnimate] = useState(false);
  const handleNext = () => {
    setExitAnimate(true);
     setTimeout(() => {
      onNext();
    }, 500);
  };
  const handlePrevious = () => onPrevious();

  return (
    <div className={exitAnimate ? 'animate__animated animate__slideOutLeft': 'animate__animated animate__slideInRight'}>
      <Grid container direction='column' className='formContainer' rowGap={3}>
        <Grid item>
          <Typography variant='h3'>When Are You Roaming?</Typography>
        </Grid>
        <Grid item>
          <TextField
            xs={12}
            focused
            variant='outlined'
            label='Start Date'
            color='success'
            type='date'
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            xs={12}
            focused
            variant='outlined'
            label='End Date'
            color='success'
            type='date'
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant='contained' color='success' onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant='contained' color='success' onClick={handleNext}>
            {' '}
            Next{' '}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepTwo;
