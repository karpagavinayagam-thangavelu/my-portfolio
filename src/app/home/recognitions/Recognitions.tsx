import { Typography } from "@material-ui/core";
import { RecognitionQuotes } from "../QuoteList";
import { Element } from 'react-scroll';
import { TataLogo } from "../../../images/tata";
import React from "react";
import { TrimbleLogo } from "../../../images/Trimble";

const ILPAward = () => (
  <div className="filler">
    <TataLogo/>
    <span className="title">ILP Kudos</span>
  </div>
);

const Bravo = () => (
  <div className="filler bravo">
    <TrimbleLogo/>
    <span className="title">Bravo</span>
  </div>
);

const ShoutOut = () => (
  <div className="filler bravo">
    <TrimbleLogo/>
    <span className="title">Shout Out</span>
  </div>
);

const CoE = () => (
  <div className="filler bravo">
    <TrimbleLogo/>
    <span className="title">Centre of Excellence</span>
  </div>
);

const RankHolder = () => (
  <div className="filler award">
    <img src="/assets/images/reward.webp" alt=""/>
    <span className="title">Rank Holder</span>
  </div>
);


const rewardList = [
  
  {
    name: "Rank Holder",
    institution: "Mepco Schlenk Engg College",
    description: "Have got third rank in M.E. Comptuer science with 9.4 CGPA",
    icon: RankHolder
  },
  {
    name: "Member of CoE UI",
    institution: "Trimble",
    description: "Played Key role in UI and Mobile Centre of Excellence Team in Trimble",
    icon: CoE
  },  
  {
    name: "ILP Kudos",
    institution: "Tata Consultancy Services",
    description: "In appreciation of consistent demonstration of performance of the Highest Order",
    icon: ILPAward
  },
  {
    name: "Shout out",
    institution: "Trimble",
    description: "Extensive support in hard situations for multiple squads",
    icon: ShoutOut
  },
  {
    name: "Bravo",
    institution: "Trimble",
    description: " For continuous Knowledge sharing sessions with real time situations and Mathematical concepts.",
    icon: Bravo
  },
];

export const Recognitions = () => {
  return (
    <Element name="recognition" className="section" id="recognition">
      <RecognitionQuotes />
      <Typography variant="h4" align="center" className="section-header">
        Recognitions

      </Typography>
      <div className="rewards">
        <div className="card-carousel">
          {rewardList.map(
            (reward: any, index: number) => (
              <div className="card" key={index} >
                <div className="image-container">
                  {reward.icon && React.createElement(reward.icon)}
                </div>
                {reward.description}
              </div>
            )
          )}
        </div>
      </div>
    </Element>
  );
};
export default Recognitions;
