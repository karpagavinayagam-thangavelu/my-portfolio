import React, { useEffect } from "react";

import Footer from "./app/layout/Footer";
import Header from "./app/layout/Header";
import Home from "./app/layout/Home";
import { theme } from "./styles/theme";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  useEffect(
    () => {
      Aos.init({duration:1000});
    }, []
  )
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;