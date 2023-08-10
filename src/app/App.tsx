import { Routes, Route, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';

import Navbar from '../common/components/Navbar';
import SnippetsFeed from '../pages/SnippetsFeed';
import Contributors from '../pages/Contributors';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Sidebar from '../common/components/Sidebar';
import PageNotFound from '../pages/PageNotFound';
import Bookmarks from '../pages/Bookmarks';
import TagPage from '../pages/TagPage';
import Home from '../pages/Home';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;

function App() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={CLERK_KEY} navigate={(to) => navigate(to)}>
      <Navbar />
      <main className="mt-16 min-h-screen grid place-items-center">
        <Routes>

          <Route path="/" element={
            <>
              <SignedIn>
                <Sidebar />
                <SnippetsFeed />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path="/sign-in/*" element={<SignIn routing='path' path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing='path' path="/sign-up" />} />

          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/tags/:tagName" element={<TagPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
    </ClerkProvider>
  );
}

export default App;
