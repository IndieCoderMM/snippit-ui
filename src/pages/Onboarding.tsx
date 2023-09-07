import { RedirectToSignIn, useUser } from '@clerk/clerk-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { UserValidation } from '@/lib/validations/user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) return <RedirectToSignIn />;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      username: '',
      bio: '',
    },
  });

  useEffect(() => {
    if (isLoaded && isSignedIn)
      reset({ username: user?.firstName ? user.firstName : '', bio: '' });
  }, [isLoaded, isSignedIn, user, reset]);

  const onSubmit = async (data: z.infer<typeof UserValidation>) => {
    try {
      // TODO: Create a new user in the database
      await user?.update({
        username: data.username,
        unsafeMetadata: {
          profile: {
            bio: data.bio,
          },
        },
      });
      // On success, redirect to home page
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="padding min-h-screen w-full">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-8 text-left text-3xl font-extrabold md:text-5xl">
          Welcome, {user?.fullName}! Let&apos;s get you set up.
        </h3>
        <p className="w-full text-left text-lg md:text-xl">
          Please fill out the following information to complete your profile.
        </p>
        <div className="mt-10 flex gap-8">
          <img
            src={user?.imageUrl}
            alt="Profile"
            className="h-24 w-24 rounded-full border-2 border-white shadow-sm"
          />
          <form
            className="mx-auto flex w-full max-w-5xl flex-col gap-10 text-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col justify-start gap-2">
              <label htmlFor="username">Username</label>
              <input
                {...register('username')}
                className="formInput"
                placeholder="Username"
              />
              {errors?.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start gap-2">
              <label htmlFor="bio">Bio</label>
              <textarea
                {...register('bio')}
                className="formInput"
                placeholder="Short introduction about yourself"
              />
              {errors?.bio && (
                <p className="text-xs text-red-500">{errors.bio.message}</p>
              )}
            </div>

            <button type="submit" className="submitBtn">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
