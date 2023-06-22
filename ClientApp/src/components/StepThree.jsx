import React, { useState } from 'react';
// import 'animate.css'

import { TextField, Grid, Typography, Button } from '@mui/material';

const StepThree = ({ onNext, onPrevious, handleSetRoam, roam }) => {
  const [exitAnimate, setExitAnimate] = useState(false);
  const [error, setError] = useState(false)
  const handleNext = () => {
    if (roam.Location == "") setError(true);

    if (roam.Location != "") {
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
          <Typography variant='h3'>Where Are You Roaming?</Typography>
        </Grid>
        {
          error ?
            roam.Location == "" ?
            <>
              <Grid item>
                <TextField
                  error
                  focused
                  xs={12}
                  variant='outlined'
                  label='Location'
                  color='success'
                  fullWidth
                  onChange={(e) => handleSetRoam({ ...roam, Location: e.target.value })}
                  id='outlined-error-helper-text'
                  helperText="Please give your roam a Location"
                />
              </Grid>
                <Grid item>
                  <TextField
                    focused
                    xs={12}
                    variant='outlined'
                    label='Description'
                    color='success'
                    fullWidth
                    onChange={(e) => handleSetRoam({ ...roam, Description: e.target.value })}
                  />
                </Grid>
              </>
              :
              <>
                <Grid item>
                  <TextField
                    focused
                    xs={12}
                    variant='outlined'
                    label='Location'
                    color='success'
                    fullWidth
                    onChange={(e) => handleSetRoam({ ...roam, Location: e.target.value })}
                  />
                </Grid>
              <Grid item>
                <TextField
                  focused
                  xs={12}
                  variant='outlined'
                  label='Description'
                  color='success'
                  fullWidth
                  onChange={(e) => handleSetRoam({ ...roam, Description: e.target.value })}
                />
              </Grid>
            </>
          :
          <>
            <Grid item>
              <TextField
                focused
                xs={12}
                variant='outlined'
                label='Location'
                color='success'
                fullWidth
                onChange={(e) => handleSetRoam({ ...roam, Location: e.target.value })}
              />
            </Grid>
            <Grid item>
              <TextField
                focused
                xs={12}
                variant='outlined'
                label='Description'
                color='success'
                fullWidth
                onChange={(e) => handleSetRoam({ ...roam, Description: e.target.value })}
              />
            </Grid>
          </>
        }
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

export default StepThree;
