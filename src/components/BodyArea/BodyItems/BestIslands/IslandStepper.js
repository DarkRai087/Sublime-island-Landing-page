import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const PackageStepper = ({ places }) => {
  const [activeStep, setActiveStep] = useState(0);

  const backHandler = () => {
    setActiveStep((prev) => prev - 1);
  };

  const nextHandler = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper
        orientation="vertical"
        activeStep={activeStep}
        style={{ backgroundColor: "inherit" }}
      >
        {places.map((place, index) => (
          <Step key={index}>
            <StepLabel onClick={() => setActiveStep(index)}>
              <span className="text-lg airbnbml:text-xl font-bold">{place.name}</span>
            </StepLabel>
            <StepContent>
              <div className="lexs:-ml-3 py-8 px-9 lg:pr-2 ml-10 h-80 relative bg-[#050505] airbnbml:h-auto sm:py-3 sm:px-4">
                <div className="flex">
                  <div className="text-white text-lg w-[30vw] airbnbml:w-full">
                    <h1 className="airbnbml:hidden text-[24px] flex items-center mb-7 text-[#FF8682]">
                      {index > 0 && (
                        <span>
                          {" "}
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            onClick={backHandler}
                          >
                            Prev
                          </Button>
                        </span>
                      )}
                      {index > 0 && <HiArrowLongLeft />}
                      <span>{place.name}</span>
                      {index < places.length - 1 && <HiArrowLongRight />}
                      {index < places.length - 1 && (
                        <span>
                          {" "}
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            onClick={nextHandler}
                          >
                            Next
                          </Button>
                        </span>
                      )}
                    </h1>
                    <p>{place.description}</p>
                  </div>
                  <Image
                    className="h-96 w-[40%] airbnbml:w-2/3 airbnbml:mx-auto sm:w-auto absolute object-cover right-[59px] lg:right-[40px] bottom-0 airbnbml:hidden"
                    src={place.image ? place.image : "-"}
                    alt="."
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === places.length && (
        <Paper
          square
          elevation={0}
          style={{
            padding: "10px",
            marginLeft: "10px",
            backgroundColor: "inherit",
          }}
        >
          <Typography>Your Journey Completes Here</Typography>
          <Button onClick={handleReset} style={{ marginTop: "5px" }} color="primary">
            Get Back
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default PackageStepper;
