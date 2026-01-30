import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WhenNotWorking from './components/WhenNotWorking';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <WhenNotWorking />
    </div>
  );
}

export default App;
