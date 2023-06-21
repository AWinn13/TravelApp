import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
import 'animate.css'


const StepOne = ({onNext}) => {
  const [exitAnimate, setExitAnimate] = useState(false);
  const handleNext = () => {
    setExitAnimate(true);
    setTimeout(() => {
      onNext();
    }, 500);
  };
    

  return (
    <div className={exitAnimate ? 'animate__animated animate__slideOutLeft': 'animate__animated animate__slideInRight'}>
      <Grid container direction='column' className='formContainer' rowGap={3}>
        <Grid item>
          <Typography variant='h3'>Where Are You Roaming?</Typography>
        </Grid>
        <Grid item>
          <TextField
            focused
            xs={12}
            variant='outlined'
            label='Roam Name'
            color='success'
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant='contained' color='success' onClick={handleNext}>
            {' '}
            Next{' '}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepOne;
