
import React from 'react';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-20 dark:bg-gray-800">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
