import { Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BannerWave1, BannerWave2, BannerWave3 } from "../../images/Banner";
import { darkTheme } from "../../styles/theme";

export const Banner = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <section className="banner">
        <div className="body">
          <img src="/assets/images/developer-icon.png" alt="" className="my-photo" />
          <Typography variant="h2" className="my-name">Karpaga vinayagam Thangavelu</Typography>
          <Typography variant="h3" className="my-field">Front end Developer</Typography>
        </div>
        <BannerWave1 />
        <BannerWave2 />
        <BannerWave3 />
      </section>
    </ThemeProvider>
  );
};

export default Banner;
