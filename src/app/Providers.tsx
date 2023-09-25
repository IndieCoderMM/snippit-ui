import { Provider } from 'react-redux';
import store from './store';
import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;

const Providers = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={CLERK_KEY} navigate={(to) => navigate(to)}>
        {children}
      </ClerkProvider>
    </Provider>
  );
};

export default Providers;
