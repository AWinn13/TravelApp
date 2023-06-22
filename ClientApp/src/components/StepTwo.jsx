import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@mui/material';
// import 'animate.css';

const StepTwo = ({ onNext, onPrevious, handleSetRoam, roam }) => {
  const [exitAnimate, setExitAnimate] = useState(false);
  const [errors, setErrors] = useState(false);
  const handleNext = () => {

    if(roam.StartDate != "" && roam.EndDate != ""){
      setErrors({ Start: false, End: false });
      setExitAnimate(true);
      setTimeout(() => {
        onNext();
      }, 500);
    }
  };
  const handlePrevious = () => onPrevious();

  return (
    <div className={exitAnimate ? 'animate__animated animate__slideOutLeft': 'animate__animated animate__slideInRight'}>
      <Grid container direction='column' className='formContainer' rowGap={3}>
        <Grid item>
          <Typography variant='h3'>When Are You Roaming?</Typography>
        </Grid>
        <Grid item>
          {/* {
            roam.StartDate == "" ?
            <TextField
              error
              focused
              xs={12}
              variant='outlined'
              label='Start Date'
              color='success'
              type='date'
              fullWidth
              onChange={(e) => handleSetRoam({ ...roam, TripName: e.target.value })}
              id='outlined-error-helper-text'
              helperText="Please give your roam a Start Date"
            />
            : */}
            <TextField
              xs={12}
              focused
              variant='outlined'
              label='Start Date'
              color='success'
              type='date'
              fullWidth
              onChange={(e) => handleSetRoam({...roam, StartDate: e.target.value})}
            />
          {/* } */}
        </Grid>
        <Grid item>
          {/* {
            roam.EndDate == "" ?
              <TextField
                error
                focused
                xs={12}
                variant='outlined'
                label='End Date'
                color='success'
                type='date'
                fullWidth
                onChange={(e) => handleSetRoam({ ...roam, TripName: e.target.value })}
                id='outlined-error-helper-text'
                helperText="Please give your roam an End Date"
              />
            : */}
            <TextField
              xs={12}
              focused
              variant='outlined'
              label='End Date'
              color='success'
              type='date'
              fullWidth
              onChange={(e) => handleSetRoam({ ...roam, EndDate: e.target.value })}
            />
          {/* } */}
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
