import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPa ge />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
