import { Typography } from "@material-ui/core";
import { TataLogo } from "../../images/tata";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme } from "../../styles/theme";
import React from "react";
import { TrimbleLogo } from "../../images/Trimble";
import { TCSLogo } from "../../images/TcsLogo";

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
    <div className="brand">
      <TrimbleLogo/>
      <div className="tag">Transforming the Way the World Works</div>
    </div>
    <div className="card-body">

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
  return (
    <section className="section experience">
      <Typography variant="h4" align="center" className="section-header">
        Experience
      </Typography>
      <div className="paths">
        {experiencePath.map((path) => (
          <div className="path">
            <div className="flip-card">
              <div className="back" style={{ backgroundColor: path.bgColor }}>
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
              <div className="front">
                {React.createElement(path.companyCard, {})}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
