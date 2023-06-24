import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import './style.css';

// ! MAKE THIS FORM MORE INTERACTIVE LIKE A DOJO SURVEY

const RoamForm = ({handleLoggedUser, loggedUser}) => {
  const navigate = useNavigate("")
  const id = JSON.parse(localStorage.getItem("user"))
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post("https://localhost:7096/api/trip",
      {...roam},
      {
        "headers": {
          "Content-Type": "application/json; charset=utf-8",
          "Server": "Kestrel"
        }
      }
    )
    .then(res => {
      navigate("/dashboard")
    })
    .catch(err => {
      console.log(err);
      if(err.response) {
        console.log(err.response.data)
      }
    })
  }

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
          <StepThree onPrevious={handlePreviousStep} onNext={handleNextStep} handleSetRoam={handleSetRoam} roam={roam} handleSubmit= {handleSubmit}/>
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
