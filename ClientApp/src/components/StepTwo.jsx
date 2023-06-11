import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';

const StepTwo = ({onNext, onPrevious}) => {
    const handleNext = () => onNext();
    const handlePrevious = () => onPrevious();


  return (
    <div>
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
          <Button variant='contained' color='success'>
            {' '}
            Next{' '}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepTwo;
