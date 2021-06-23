import { ThemeProvider } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import React from "react";
import { darkTheme } from "../../../styles/theme";
import { Element } from 'react-scroll';
import { LearningQuotes } from "../QuoteList";

const learningPath = [
  {
    degree: "B.Tech.",
    institution: "Kalasalingam University",
    location: "Srivilliputhur, Tamil Nadu, India",
    branch: "Computer science and Engineering",
    score: "8.6 / 10",
    image: "klu.jpg",
    color: "1,50,32",
  },

  {
    degree: "M.E.",
    institution: "Mepco Schlenk Engineering college ",
    location: "Sivakasi, Tamil Nadu, India",
    branch: "Computer science and Engineering",
    score: "9.4 / 10",
    image: "mepco.jpg",
    color: "20,28,58", // #141c3a
  },
];
export const Education = () => {
  return (
    <Element name="education"  className="section" id="education">
      <LearningQuotes />
      <Typography variant="h4" align="center" className="section-header">
        Education
      </Typography>
      <div className="paths">
        {learningPath.map((path , index) => (
          <ThemeProvider theme={darkTheme} key={index}>
            <div
              className="path"
            >
              <div className="bg-image"
              
              style={{ backgroundImage: `url(/assets/images/${path.image})` }}
              >
                <div
                  className="body"
                  style={{ backgroundColor: `rgba(${path.color},0.8)` }}
                >
                  <div className="center">
                    <div>
                      <Typography color="primary">{path.degree}</Typography>
                    </div>
                    <div>
                      <Typography color="primary">{path.branch}</Typography>
                    </div>
                  </div>
                </div>
                <div className="overlay">
                  <div className="body">
                    <Typography variant="h4">{path.institution}</Typography>
                    <Typography className="location">{path.location}</Typography>
                    <Typography className="branch">{path.branch}</Typography>
                    <Typography className="score">{path.score}</Typography>
                    <Button color="primary" variant="contained">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
        ))}
      </div>
    </Element>
  );
};

export default Education;
