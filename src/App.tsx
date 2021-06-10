import React from 'react';
import Banner from './app/home/Banner';
import Education from './app/home/Education';
import Introduction from './app/home/Introduction';
import ProfessionalSkills from './app/home/ProfessionalSkills';
import Footer from './app/layout/Footer';
import Header from './app/layout/Header';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="App">
        <Banner/>
        <ProfessionalSkills/>
        <Introduction/>
        <Education/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
