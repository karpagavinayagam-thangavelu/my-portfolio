import React from "react";

import Footer from "./app/layout/Footer";
import Header from "./app/layout/Header";
import Home from "./app/layout/Home";
import { ThemeProvider } from '@material-ui/core';
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
