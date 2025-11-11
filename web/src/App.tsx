  import './App.css';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Landing from './pages/Landing';
  import Contact from './pages/Contact';
  import About from './pages/About';

  function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tool-management" element={<div className='text-white'>Tool Management</div>} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;