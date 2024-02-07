import * as React from 'react';
import { Fragment } from "react";
import { styled } from "styled-components";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  useTheme,
  TextField,
  Paper,
  Button,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Box
} from "@mui/material";
//-------------------animation---------->
import Lottie from "lottie-react";
import { animationTick } from "../../assets";

import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { Register, Attachments } from ".."

import {
  PhoneInput
} from "../../components";
const steps = ['Company Details', 'Upload Document', 'Finish'];


const Cover = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 30px;
  /* position:fixed;
  width:100%; */
  @media only screen and (max-width: 720px) {
    width: 65%;
  }
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;


const useStyles = makeStyles((theme) => ({
  step: {
    "&.MuiStep-root .MuiStepIcon-root.Mui-active": {
      color: '#0F8EFF'
    },
    "&.MuiStep-root .MuiStepIcon-root.Mui-completed": {
      color: '#0F8EFF'
    }
  },
  box: {
    textAlign: 'center',
    padding: '25px 0px'
  },
  btnComplete: {
    "&.MuiButton-root": {
      borderRadius: '23px',
      background: '#189224',
      color: 'white',
      fontSize: '16px',
      fontWeight: '500',
      textTransform: 'capitalize',
      padding: '5px 20px'
    }
  }
}));

export const Application = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [docStatus, setDocStatus] = React.useState(false);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    if (activeStep === 1) {
      setTimeout(
        function () {
          setActiveStep(1)
          setDocStatus(true)
          // navigate("/login");
        }, 2000);
    };

  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Fragment>
      <Cover>
        <Box className={classes.box}>
          <img
            src={logo}
            style={{
              width: 76,
              height: 35,
            }}
          />
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            {/* if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            } */}
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} className={classes.step}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

      </Cover>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.lightGray.main,
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Cover>

          <React.Fragment>

            {activeStep === 0 && (
              <Register primaryClick={handleNext} />
            )}
            {activeStep === 1 && (
              <Attachments primaryClick={handleNext} docStatus={docStatus} />
            )}
            {activeStep === 2 && (
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ height: '120px' }}>
                  <Lottie animationData={animationTick} loop={false}
                    style={{
                      width: 100,
                      height: 100,
                      margin: 'auto'
                    }} />
                </Box>
                <Typography variant="subtitle4">
                  Thank you!
                </Typography>
                <Typography variant="body1">
                  Your document is under verification, We will get back you soon.
                </Typography>
              </Box>

            )}
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === 2 ? 'Finish' : 'Next'}
              </Button>
            </Box> */}
          </React.Fragment>

          {/* {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>

            {activeStep === 0 && (
              <Typography sx={{ mt: 2, mb: 1 }}>33333333333333</Typography>
            )}
            {activeStep === 1 && (
              <Typography sx={{ mt: 2, mb: 1 }}>1111111</Typography>
            )}
            {activeStep === 2 && (
              <Typography sx={{ mt: 2, mb: 1 }}>33333333</Typography>
            )}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )} */}
        </Cover>
      </Grid>
    </Fragment>
  );
};
