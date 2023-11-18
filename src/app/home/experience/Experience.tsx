import { Dialog, Typography, ThemeProvider } from "@mui/material";
import { TataLogo } from "../../../images/tata";
import { darkTheme } from "../../../styles/theme";
import React, { useState } from "react";
import { TrimbleLogo } from "../../../images/Trimble";
import { TCSLogo } from "../../../images/TcsLogo";
import { Element } from 'react-scroll';
import { ExperienceQuotes } from "../QuoteList";
import { SlideTransition } from "../education/EducationDetails";
import { TrimbleDetails } from "./TrimbleDetails";
import { TCSDetails } from "./TCSDetails";

export const TataCard = () => (
  <section className="tcs-card">
    <div className="brand">
      <TCSLogo className="logo" />
      <div className="tag">Experience Certainty</div>
    </div>
    <div className="card-body">
      <div className="left">
        <div className="name">Karpaga vinayagam</div>
        <div className="position">Systems Engineer</div>
      </div>
      <div className="right">
        <div>3.5 years Experience</div>
        <div>Retail and Telecom services</div>
        <div>AngularJS, Spring Batch, </div>
        <div>JSP, Servlets, Play Framework</div>
      </div>
    </div>
  </section>
);
export const TrimbleCard = () => (
  <section className="trimble-card">
    <div className="wave wave-1"></div>
    <div className="base"></div>
    <div className="wave wave-2"></div>
    <div className="text-holder">
      <div className="brand">
        <TrimbleLogo />
        <div className="tag">Transforming the Way the World Works</div>
      </div>
      <div className="card-body">
        <div className="content">
          <div className="name">Karpaga vinayagam</div>
          <div className="position">Software Engineering Lead ( Front end )</div>
          <div className="experience">4 years Experience</div>
          <div className="services">Spime Maps, Cloud services</div>
          <div className="expert">ReactJS, Angular</div>
        </div>
      </div>
    </div>
  </section>
);

const experiencePath = [
  {
    companyName: "Tata Consultancy Services",
    logo: TataLogo,
    bgColor: "#255295",
    logoWidth: "38%",
    companyCard: TataCard,
  },
  {
    companyName: "Trimble",
    logo: TrimbleLogo,
    bgColor: "#002D5B",
    logoWidth: "48%",
    companyCard: TrimbleCard,
  },
];
export const Experience = () => {
  const [step, setStep] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (companyName: string) => {
    setStep(companyName)
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
  return (
    <Element name="experience" className="section" id="experience">
      <ExperienceQuotes />
      <Typography variant="h4" component="h3" align="center" className="section-header">
        Experience
      </Typography>
      <div className="paths" data-aos="zoom-in-up">
        {experiencePath.map((path, index) => (
          <div className="path" key={index}  >
            <div className="flip-card" 
              onClick={() => handleClickOpen(path.companyName)}
              >
              <div className="front" style={{ backgroundColor: path.bgColor }}>
                <ThemeProvider theme={darkTheme}>
                  {React.createElement(path.logo, {
                    style: {
                      backgroundColor: path.bgColor,
                      width: path.logoWidth,
                      height: "auto",
                      fill: "#fff",
                    },
                  })}
                </ThemeProvider>
              </div>
              <div className="back">
                {React.createElement(path.companyCard, {})}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        open={open}
        TransitionComponent={SlideTransition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="education-details"
        aria-describedby="My Education detail"
      >
        {step === "Trimble" ? <TrimbleDetails /> : <TCSDetails />}
      </Dialog>
    </Element>
  );
};

export default Experience;
