import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import './style.css';

// ! MAKE THIS FORM MORE INTERACTIVE LIKE A DOJO SURVEY

const RoamForm = () => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [tripName, setTripName] = useState('');
  const [description, setDescription] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne onNext={handleNextStep} />;
      case 2:
        return (
          <StepTwo onPrevious={handlePreviousStep} onNext={handleNextStep} />
        );
      // Repeat for other steps
      default:
        return null;
    }
  };

  return (
    <div className='mainContainer'>
      {renderStep()}
    </div>
  );
};

export default RoamForm;
