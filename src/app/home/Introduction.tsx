import React from "react";
import Quotes from "../../components/Quotes";

export const Introduction = () => {
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

export default Introduction;
