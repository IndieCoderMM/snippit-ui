import { Routes, Route } from 'react-router-dom';

import Navbar from '../common/components/Navbar';
import Footer from '../common/components/Footer';
import Home from '../pages/Home';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snippets" element={<SnippetsFeed />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
