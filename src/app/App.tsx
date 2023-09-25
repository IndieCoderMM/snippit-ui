import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

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
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import Onboarding from '@/pages/Onboarding';

function App() {
  return (
    <Providers>
      <Navbar />
      <SignedIn>
        <Sidebar />
      </SignedIn>
      <main className="bg-background text-text">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <SnippetsFeed />
                </SignedIn>
                <SignedOut>
                  <Home />
                </SignedOut>
              </>
            }
          />
          <Route path="/sign-in/*" element={<SignInPage />} />
          <Route path="/sign-up/*" element={<SignUpPage />} />

          <Route path="/create-snippet" element={<CreateSnippet />} />
          <Route path="/onboarding" element={<Onboarding />} />
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
