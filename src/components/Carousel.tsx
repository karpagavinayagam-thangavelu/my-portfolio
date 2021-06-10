import { Paper, Slide } from "@material-ui/core";
import React, { PropsWithChildren } from "react";
// import { CarouselProps } from "react-material-ui-carousel";

interface CarouselProps {}
export const Carousel: React.FC<PropsWithChildren<CarouselProps>> = ({
  children,
}) => {
  return (
    <section className="carousel">
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div className="contents">
            <div className="content">
            {children}
            </div>
        </div>
      </Slide>
    </section>
  );
};
