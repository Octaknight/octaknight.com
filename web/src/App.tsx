import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import About from './pages/About';
import Tools from './pages/Tools';
import Product from './pages/products/Product';
import ComingSoon from './pages/ComingSoon';

import Footer from './components/Footer';
import AOTM from './pages/products/(tool)/AOTM';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tool-management" element={<Tools />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aotm" element={<AOTM />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    );
  }

  export default App;