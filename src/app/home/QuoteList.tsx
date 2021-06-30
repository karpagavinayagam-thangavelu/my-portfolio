import React from "react";
import Quotes from "../../components/Quotes";

export const LearningQuotes = () => {
  return (
    <section
      className="parallax"
      style={{ backgroundImage: `url(/assets/images/bg-1.jpg)` }}
    >
      <div className="introduction">
        <Quotes
          text="Anyone who stops learning is old, whether at twenty or eighty."
          speaker="Henry Ford"
        />
      </div>
    </section>
  );
};

export const ExperienceQuotes = () => {
  return (
    <section className="parallax" style={{ backgroundColor: `#0D6AA8` }}>
      <div className="experience-quotes">
        <Quotes
          text="The only person who is educated is the one who has learned how to learn and change."
          speaker="Carl Rogers"
        />
      </div>
    </section>
  );
};

export const RecognitionQuotes = () => {
  return (
    <section className="parallax" style={{ backgroundImage: `url(/assets/images/paint-in-water.jpg)` }}>
      <div className="experience-quotes">
        <Quotes
          text="Feedback is the breakfast of champions."
          speaker="Ken Blanchard"
        />
      </div>
    </section>
  );
};

export const CertificationQuotes = () => {
  return (
    <section className="parallax" style={{ backgroundImage: `url(/assets/images/certificate-bg.jpg)` }}>
      <div className="experience-quotes">
        <Quotes
          text="Your certificate and skills are vital to the extent of jump-starting your career and giving a chance to compete in a global space."
          speaker="Bernard Kelvin Clive"
        />
      </div>
    </section>
  );
};
