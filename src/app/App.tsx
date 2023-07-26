import { Routes, Route } from 'react-router-dom';

import Navbar from '../common/components/Navbar';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sidebar from '../common/components/Sidebar';
import PageNotFound from '../pages/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Sidebar />
        <Routes>
          <Route path="/" element={<SnippetsFeed />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
