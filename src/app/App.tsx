import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';

import Navbar from '../components/Navbar';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sidebar from '../components/Sidebar';
import PageNotFound from '../pages/PageNotFound';
import Bookmarks from '../pages/Bookmarks';
import TagPage from '../pages/TagPage';
import Home from '../pages/Home';

import Providers from './Providers';
import CreateSnippet from '@/pages/CreateSnippet';

function App() {
  return (
    <Providers>
      <Navbar />
      <main className="mt-16 grid min-h-screen place-items-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Sidebar />
                  <SnippetsFeed />
                </SignedIn>
                <SignedOut>
                  <Home />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />

          <Route path="/create-snippet" element={<CreateSnippet />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tags/:tagName" element={<TagPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Providers>
  );
}

export default App;
