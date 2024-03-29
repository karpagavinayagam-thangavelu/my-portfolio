import { Link, Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { BannerWave1, BannerWave2, BannerWave3 } from "../../../images/Banner";
import { darkTheme } from "../../../styles/theme";
import { env } from "../../env";

export const Banner = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <section className="banner" >
        <div className="body">
          <img src={`${env.IMAGE_PATH}/developer-icon.png`} alt="" className="my-photo" />
          <Typography variant="h2" component={"h1"} className="my-name">Karpaga vinayagam Thangavelu</Typography>
          <Typography variant="h3" component={"h2"} className="my-field">Front end Developer</Typography>
        </div>
        <BannerWave1 />
        <BannerWave2 />
        <BannerWave3 />
      </section>
    </ThemeProvider>
  );
};


export const Banner1 = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <section className="banner">
        <header className="body">
          <img src={`${env.IMAGE_PATH}/developer-icon.png`} alt="" className="my-photo" />
          <Typography variant="h2" component={"h1"}  className="my-name">Karpaga vinayagam Thangavelu</Typography>
          <Typography variant="h3" component={"h2"} className="my-field">Front end Developer</Typography>
        </header>
        <footer>
          <Link href="" >View My details</Link>
        </footer>
        <div className="wave"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </ThemeProvider>
  );
};
export default Banner;
