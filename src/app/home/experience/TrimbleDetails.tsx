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
  return ["Intern", "Spime - Web developer", "Trimble Cloud Platform"];
};

const myStepDetails = (step: number) => {
  switch (step) {
    case 0:
      return <Ecognition />;
    case 1:
      return <Spime />;
    default:
      return <TCP />;
  }
};

export const TrimbleDetails = () => (
  <React.Fragment>
    <DialogTitle id="Trimble">
      <Typography variant="h3">Trimble Inc. </Typography>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Working in Frotn end development for 4 years .
      </DialogContentText>
      <VerticalLinearStepper
        getSteps={myPath}
        getStepContent={myStepDetails}
        revisitText="You have visited all the projects worked in Trimble. Click the below button to revisit again"
      />
    </DialogContent>
  </React.Fragment>
);

export const Ecognition = () => {
  const headers = [
    "Designation",
    "Division",
    "Role",
    "Period",
    "Responsibility",
    "Learning Outcomes",
    "Achievements",
  ];
  const entries = [
    "Software Engineer - Intern",
    "Spime India Technologies Limited",
    "Full stack developer",
    "Jan 2017 - July 2017",
    <ul>
      <li>
        To Create UI on Maps for selecting a region and showing vegetation in
        that region{" "}
      </li>
      <li>
        To theme and develop Mapbased applications in Web based applications.
      </li>
      <li>
        To show the spectrum wave frequency in Graph with Fast Fourier Transform
        and to represent in 2D and 3D Graphs{" "}
      </li>
    </ul>,
    <ul>
      <li>
        Bootstrap 4, Angular 2-6, React, Three.js, D3Graph.js, FFT concepts
      </li>
      <li>Rest APIs, Express Js</li>
    </ul>,
    <ul>
      <li>
        Have got client appreciation for fast completion of 2 projects in short
        duration.
      </li>
    </ul>,
  ];
  return (
    <section id="ecognition">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};

export const Spime = () => {
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
    "Software Engineer",
    "Spime India Technologies Limited",
    "Web Developer",
    "July 2017 - July 2019",
    <ul>
      <li>
        Worked on POSPAC - React based web application for heavy file uploads on
        Maps searching{" "}
      </li>
      <li>Migrated Cloud sites to React applications</li>
      <li>
        Have created common Web components using StencilJS and shared across
        Divisions for One trimble theming{" "}
      </li>
      <li>
        Have worked in Google site Gadget creation for Static sites across
        divisions to share application and technologies used across different
        teams{" "}
      </li>
    </ul>,
    <ul>
      <li>Map Concepts, ReactJS, Bootstrap 4, Webcomponents</li>
      <li>Google site, Google Gadgets in websites.</li>
    </ul>,
    <ul>
      <li>
        Have shared innovative ideas and projects in Hack for 4 years
        continuously.
      </li>
      <li>
        Have started a Knowledge Sharing session to contribute on technical and
        fun learning every week. Got welcoming support from team and have
        continued this for more than a year with new concepts each week.{" "}
      </li>
    </ul>,
  ];
  return (
    <section id="spime">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};

export const TCP = () => {
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
    "Senior Software Engineer",
    "Trimble Cloud Platform",
    "Front end Engineer",
    "July 2019 - At Present",
    <ul>
      <li>
        Worked acros multiple teams to manage different UI applications in Cloud
        division
      </li>
      <li>
        To create and maintain web application for Trimble Identity and
        Authentication Management systems
      </li>
      <li>
        To incorporate features of API Gateway management across different
        divisions which act as central website for all Cloud developers{" "}
      </li>
      <li>To maintain Authorization and User management application</li>
      <li>
        To maaintain Static site for API Documentation using Jekyll and NextJS
      </li>
      <li>
        Build and Deployment Automation with Jenkins, AWS, S3 and Cloudfront.
      </li>
      <li>
        Worked on HotJar, Google Analytics for tracking user difficulties{" "}
      </li>
    </ul>,
    <ul>
      <li>
        ReactJS, Redux, Material UI, Storybook, Storybook, StencilJS, NextJS,
        Jekyll. NodeJS, Angular 6, Rest APIs, Microfront end, SEO,{" "}
      </li>
      <li>
        Contentful for static site, NX based Monorepository for all Cloud
        applications.
      </li>
      <li>Jenkins, AWS, S3, Cloudfront,</li>
    </ul>,
    <ul>
      <li>Have got Bravo award for extension of role at critical time.</li>
      <li>
        Have got Bravo award for fast completion of User Profile application
        within 2 weeks including page optimization.
      </li>
      <li>
        Have started promoting Knowledge sharing as a `<i>Ignite</i>` session
        which makes all team members in division a fun and relaxful learning.
      </li>
      <li>Created some Fun games in team with short web applications</li>
      <li>
        As part of User Interface - Centre of Excellence team, Have shared the
        One Trimble theme implementation in React and StencilJS
      </li>
      <li>
        As part of Mobile Brownbag Chapter team, Have got bravo awards for
        designing ideas.
      </li>
    </ul>,
  ];
  return (
    <section id="tcp">
      <RowTable headers={headers} rowEntries={entries} />
    </section>
  );
};
