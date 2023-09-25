import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
    />
  );
};

export default SignInPage;
