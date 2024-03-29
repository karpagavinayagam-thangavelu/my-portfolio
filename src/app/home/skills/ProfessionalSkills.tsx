import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Element } from 'react-scroll';
import { env } from "../../env";


const professionalSkills = [
  [
    {
      name: "Mobile Friendly",
      icon: "rui.svg",
      style: "rui",
      details:
        "Experienced in creating a responsive website accessible in all devices.",
    },
    {
      name: "UX Design ",
      icon: "figma.svg",
      style: "figma",
      details:
        "Can Visually communicate the Product Ideas with User Experience research using Figma",
    },
    {
      name: "Google Gadgets",
      icon: "gadgets.png",
      details:
        "Worked on creating dynamic gadgets which can collect data from Google applications and display in Static Google sites.",
    },
  ],
  [
    {
      name: "ReactJS",
      icon: "react.svg",
      details:
        "Experienced in creating a Single Page application using both Javascript and Typescript",
    },
    {
      name: "Angular JS",
      icon: "angular.png",
      details:
        "having handson experience in creating websites with Angular Framework",
    },

    {
      name: "Micro front-end",
      icon: "nx.png",
      details:
        "Have worked in NX Workspace to share components effectively across different frameworks",
    },
  ],
  [
    {
      name: "Stencil JS",
      icon: "stenciljs.png",
      details:
        "Have created Web Components for Company Style guide for cross Application designs",
    },
    {
      name: "Material UI",
      icon: "materialui.png",
      details: "used Material design Framework for theming Websites. ",
    },
    {
      name: "Bootstrap",
      icon: "bootstrap.png",
      details:
        "Used Bootstrap Framework for Responsive web design and default theming for short term projects",
    },
  ],
];
export const ProfessionalSkills = () => {
  return (
    <Element name="skills" className="section" id="skills" data-aos="zoom-out" >
      <Typography variant="h4" component="h3" align="center" className="section-header">
        Professional Skills
      </Typography>
      <Carousel
        indicators={false}
        animation="slide"
        navButtonsAlwaysVisible={true}
        autoPlay={true}
      >
        {professionalSkills.map((professionalSkill, index) => (
          <React.Fragment key={index}>
            <SkillCard skills={professionalSkill} />
          </React.Fragment>
        ))}
      </Carousel>
    </Element>
  );
};

interface SkillCardProps {
  skills: Array<any>;
}
export const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className="skill-tab"  >
      {skills.map((skill , index) => (
        <Card variant="elevation" className="card" key={index} >
          <CardContent>
            <Typography
              color="primary"
              variant="h6"
              variantMapping={{"h6": "h3"}}
              gutterBottom
              className="skill-name"
            >
              {skill.name}
            </Typography>
            <img
              src={`${env.IMAGE_PATH}/${skill.icon}`}
              className="skill-icon"
              width="100px"
              height="100px"
              alt="skill-set"
            />
            <Typography gutterBottom className="skill-details">
              {skill.details}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ProfessionalSkills;
