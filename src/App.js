import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from 'components/About';
import Piano from 'components/Piano';
import Projects from 'components/Projects';
import CV from 'components/CV';
import Home from 'components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
