import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <SignUp
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      redirectUrl="/onboarding"
      afterSignUpUrl="/onboarding"
    />
  );
};

export default SignUpPage;
