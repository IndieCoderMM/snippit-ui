import { Routes, Route } from 'react-router-dom';

import Navbar from '../common/components/Navbar';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sidebar from '../common/components/Sidebar';
import PageNotFound from '../pages/PageNotFound';
import Bookmarks from '../pages/Bookmarks';
import TagPage from '../pages/TagPage';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<SnippetsFeed />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tags/:tagName" element={<TagPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
