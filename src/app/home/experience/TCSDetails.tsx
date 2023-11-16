import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import VerticalLinearStepper from "./VerticalStepper";
import { RowTable } from "../../lib/Tables";

const myPath = () => {
  return ["Initial Learning Program", "Target Client", "Rogers Client"];
};

const myStepDetails = (step: number) => {
  switch (step) {
    case 0:
      return <ILP />;
    case 1:
      return <TIPP />;
    default:
      return <Rogers />;
  }
};

export const TCSDetails = () => (
  <React.Fragment>
    <DialogTitle id="TCS" variant="h3">
      Tata Consultancy Services 
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Worked in Full stack development for 3.5 years .
      </DialogContentText>
      <VerticalLinearStepper
        getSteps={myPath}
        getStepContent={myStepDetails}
        revisitText="You have visited all the projects worked in TCS. Click the below button to revisit again"
      />
    </DialogContent>
  </React.Fragment>
);

export const ILP = () => {
  const headers = [
    "Designation",
    "Role",
    "Period",
    "Responsibility",
    "Learning Outcomes",
    "Achievements",
  ];
  const entries = [
    "Assistant Systems Engineer - Trainee",
    "Learning and Project work",
    "Jan 2012 - April 2012",
    <ul>
      <li>To Learn Java, JDBC, MySQL, HTML5, JSP, CSS3 </li>
      <li>
        To complete a Project on `<i>Online Exam Management System</i>`{" "}
      </li>
      <li>
        To manage the development team and guide on the website development
      </li>
    </ul>,
    <ul>
      <li>JSP, Servlets,JDBC, MySQL, HTML5, CSS3 Basics </li>
      <li>Team management skills</li>
    </ul>,
    "Have got Kudos, a star performer of the batch award in ILP, 2012 Batch",
  ];
  return (
    <section id="ilp">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};

export const TIPP = () => {
  const headers = [
    "Designation",
    "Client",
    "Role",
    "Period",
    "Responsibility",
    "Learning Outcomes",
    "Achievements",
  ];
  const entries = [
    "Assistant Systems Engineer",
    "Target - Retail US",
    "Production Support Executive ",
    "April 2012 - July 2013",
    <ul>
      <li>
        To resolve bug fixes and support changes in Target Procurement Process
        Applications{" "}
      </li>
      <li>
        To maintain DB Upgrades and enhance the application with client
        requirements{" "}
      </li>
      <li>
        To program scheduled Batch processing with Java Spring Batch to mine the
        purchase details from oracle to DB2{" "}
      </li>
    </ul>,
    <ul>
      <li>Java Spring Framework and Spring Batch Processing with scheduler</li>
      <li>Oracle and DB2</li>
    </ul>,
    <ul>
      <li>
        Have learnt and implemented Spring Batch job and completed the project
        in short duration
      </li>
      <li>
        Created a automation script for DB2 Patch Generation by every week with
        provided excels. This reduces a 3 man days effort each week.{" "}
      </li>
    </ul>,
  ];
  return (
    <section id="ilp">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};

export const Rogers = () => {
  const headers = [
    "Designation",
    "Client",
    "Role",
    "Period",
    "Responsibility",
    "Learning Outcomes",
    "Achievements",
  ];
  const entries = [
    "Systems Engineer",
    "Rogers - Telecom US",
    "Developer ",
    "July 2013 - July 2015",
    <ul>
      <li>To upgrade the Rogers Telecom site with new features</li>
      <li>To convert the portal into Single Page web Application </li>
      <li>To implement features in Java Rest APIs, AngularJS, Bootstrap. </li>
    </ul>,
    <ul>
      <li>Bootstrap CSS Framework, AngularJS.</li>
      <li>Play Framework, WSDL, Rest APIs</li>
    </ul>,
    <ul>
      <li>Have got Innovator Award in Roger's Innovation contest </li>
      <li>
        Have got appreciation for interactive session on AngularJS and Play
        Framework.{" "}
      </li>
    </ul>,
  ];
  return (
    <section id="ilp">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};
