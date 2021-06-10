import { ThemeProvider } from "@material-ui/core";
import { Button, Card, Typography } from "@material-ui/core";
import React from "react";
import { darkTheme } from "../../styles/theme";

const learningPath = [
  {
    degree: "B.Tech.",
    institution: "Kalasalingam University",
    branch: "Computer science and Engineering",
    detail: "Completed B.Tech, Computer science with 8.6 percentile",
    image: "klu.jpg",
    color: "1,50,32",
  },

  {
    degree: "M.E.",
    institution: "Mepco Schlenk Engineering college",
    branch: "Computer science and Engineering",
    detail: "Completed M.Engg., Computer science with 9.4 percentile",
    image: "mepco.jpg",
    color: "20,28,58", // #141c3a
  },
];
export const Education = () => {
  return (
    <section className="section education">
      <Typography variant="h4" align="center" className="section-header">
        Education
      </Typography>
      <div className="paths">
        {learningPath.map((path) => (
          <ThemeProvider theme={darkTheme}>
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
                    <Typography color="primary">{path.detail}</Typography>
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
    </section>
  );
};

export default Education;
