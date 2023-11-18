

import {
    DialogContent,
    DialogTitle,
  } from "@mui/material";
  import React from "react";
import VerticalLinearStepper from "../experience/VerticalStepper";
import { env } from "../../env";
  
const myPath = () => {
    return ["Project Managers Recognition",
    "Product Managers Recognition",
    "Beyond Call of Duty Recognition",
    "Team Recognition",];
  };
  const entries = [
    "ProjectManagers.pdf",
    "ProductManagers.pdf",
    "BeyondCallOfDuty.pdf",
    "TeamRecognition.pdf"
  ];
  const myStepDetails = (step: number) => (
    <object 
        width="100%" 
        height="400px" 
        data={`${env.PDF_PATH}/${entries[step]}`}
        aria-label={myPath()[step]}
        aria-labelledby={myPath()[step]}
    ></object>
  );
  export const StakeHolderComments = () => (
    <React.Fragment>
      <DialogTitle id="StakeHolderComments" variant="h4">
        Stakeholder Recognitions
      </DialogTitle>
      <DialogContent>
        <VerticalLinearStepper
            getSteps={myPath}
            getStepContent={myStepDetails}
            revisitText="You have visited all my Recognitions. Click the below button to revisit again"
        />
      </DialogContent>
    </React.Fragment>
  );
  
  