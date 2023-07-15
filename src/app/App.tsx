import { Routes, Route } from 'react-router-dom';
import Navbar from '../common/components/Navbar';
import Home from '../pages/Home';
import Snippets from '../pages/Snippets';
import Contributors from '../pages/Contributors';
import About from '../features/about/About';
import Contact from '../features/contact/Contact';
import Footer from '../common/components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippets" element={<Snippets />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
