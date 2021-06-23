import { Typography } from "@material-ui/core";
import { RecognitionQuotes } from "../QuoteList";
import { Element } from 'react-scroll';
/*

const rewardList = [
  {
    name: "Bravo",
    institution: "Trimble",
    description: " Knowledge Sharing sessions in Trimble Spime"
  },
  {
    name: "Shout out",
    institution: "Trimble",
    description: " extensive support in hard situations in"
  },
  {
    name: "ILP Kudos",
    institution: "Tata Consultancy Services",
    description: ""
  }
]*/
export const Recognitions = () => {
  return (
    <Element name="recognition" className="section" id="recognition">
      <RecognitionQuotes />
      <Typography variant="h4" align="center" className="section-header">
        Recognitions

      </Typography>
      <div className="rewards">
        <div className="container">
          <div className="card-carousel">
            <div className="card" id="1">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="2">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="3">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="4">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
            <div className="card" id="5">
              <div className="image-container"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Recognitions;
