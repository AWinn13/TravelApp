import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
// import 'animate.css'


const StepOne = ({onNext, handleSetRoam, roam}) => {
  const [exitAnimate, setExitAnimate] = useState(false);
  const [error, setError] = useState(false);
  const handleNext = () => {
    if (roam.TripName == "") setError(true);
    else {
      setExitAnimate(true);
      setTimeout(() => {
        onNext();
      }, 500);
    }
  };
    

  return (
    <div className={exitAnimate ? 'animate__animated animate__slideOutLeft': 'animate__animated animate__slideInRight'}>
      <Grid container direction='column' className='formContainer' rowGap={3}>
        <Grid item>
          <Typography variant='h3'>Give your Roam a title</Typography>
        </Grid>
        <Grid item>
          {
            error?
              <TextField
                error
                focused
                xs={12}
                variant='outlined'
                label='Roam Title'
                color='success'
                fullWidth
                onChange={(e) => handleSetRoam({ ...roam, TripName: e.target.value })}
                id='outlined-error-helper-text'
                helperText="Please give your roam a title"
              />
            :
            <TextField
              focused
              xs={12}
              variant='outlined'
              label='Roam Name'
              color='success'
              fullWidth
              onChange={(e) => handleSetRoam({...roam, TripName: e.target.value})}
            />
          }
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
