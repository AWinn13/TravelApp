import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './style.css';

// ! MAKE THIS FORM MORE INTERACTIVE LIKE A DOJO SURVEY

const RoamForm = ({handleLoggedUser}) => {
  const navigate = useNavigate("")
  const id = JSON.parse(localStorage.getItem("user"))
  const [loggedUser, setLoggedUser] = useState(false)
  const [step, setStep] = useState(1);
  const [roam, setRoam] = useState({
    TripName: "",
    StartDate: "",
    EndDate: "",
    Location: "",
    Description: "",
    UserId: id.userId
  })

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      handleLoggedUser(loggedInUser);
    }
    else {
      navigate("/")
    }
  }, [loggedUser]);

  const handleSetRoam = (change) => {
    setRoam(change);
  }

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne onNext={handleNextStep} handleSetRoam={handleSetRoam} roam={roam} />;
      case 2:
        return (
          <StepTwo onPrevious={handlePreviousStep} onNext={handleNextStep} handleSetRoam={handleSetRoam} roam={roam} />
        );
      case 3:
        return (
          <StepThree onPrevious={handlePreviousStep} onNext={handleNextStep} handleSetRoam={handleSetRoam} roam={roam} />
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
