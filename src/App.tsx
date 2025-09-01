import { Routes, Route } from 'react-router-dom';
import Index from './js/pages/Index';
import Knowledges from './js/pages/Knowledges';
import Skills from './js/pages/Skills';
import Works from './js/pages/Works';
import Projects from './js/pages/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"               element={<Index />} />
        <Route path="/knowledges"     element={<Knowledges />} />
        <Route path="/skills"         element={<Skills />} />
        <Route path="/works"          element={<Works />} />
        <Route path="/projects"       element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;