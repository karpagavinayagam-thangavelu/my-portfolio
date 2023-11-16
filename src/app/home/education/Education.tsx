import { ThemeProvider, Typography } from "@mui/material";
import { darkTheme } from "../../../styles/theme";
import { Element } from 'react-scroll';
import { LearningQuotes } from "../QuoteList";
import { EducationDetails } from "./EducationDetails";
import { env } from "../../env";

const learningPath = [
  {
    degree: "B.Tech.",
    institution: "Kalasalingam University",
    location: "Srivilliputhur, Tamil Nadu, India",
    branch: "Computer science and Engineering",
    image: "klu.jpg",
    color: "1,50,32",
  },

  {
    degree: "M.E.",
    institution: "Mepco Schlenk Engineering college ",
    location: "Sivakasi, Tamil Nadu, India",
    branch: "Computer science and Engineering",
    image: "mepco.jpg",
    color: "20,28,58", // #141c3a
  },
];
export const Education = () => {
  return (
    <Element name="education"  className="section" id="education">
      <LearningQuotes />
      <Typography variant="h4"component="h3" align="center" className="section-header">
        Education
      </Typography>
      <div className="paths" data-aos="zoom-in-down">
        {learningPath.map((path , index) => (
          <ThemeProvider theme={darkTheme} key={index}>
            <div className="path"   >
              <div className="bg-image"  style={{ backgroundImage: `url(${env.imagePath}/${path.image})` }}>
                <div  className="body" style={{ backgroundColor: `rgba(${path.color},0.8)` }}>
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
                    <Typography variant="h4" component="h3">{path.institution}</Typography>
                    <Typography className="location">{path.location}</Typography>
                    <Typography className="branch">{path.branch}</Typography>
                    <EducationDetails step={path.degree} />
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
