import { Routes, Route } from 'react-router-dom';

import Navbar from '../common/components/Navbar';
import Footer from '../common/components/Footer';
import Home from '../pages/Home';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sidebar from '../common/components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex mt-20">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snippets" element={<SnippetsFeed />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
