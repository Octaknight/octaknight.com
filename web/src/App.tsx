  import './App.css';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import { Toaster } from 'sonner';
  import Landing from './pages/Landing';
  import Contact from './pages/Contact';
  import About from './pages/About';

  function App() {

    return (
      <BrowserRouter>
        {/* 
          This component renders the notifications. 
          'richColors' gives it default success/error styling, 
          and 'theme="dark"' matches your site. 
        */}
        <Toaster position="bottom-right" richColors theme="dark" />

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