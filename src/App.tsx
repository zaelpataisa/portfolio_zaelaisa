import { Routes, Route } from 'react-router-dom';
import Index from './js/pages/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;