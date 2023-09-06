import { useUser } from '@clerk/clerk-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { UserValidation } from '@/lib/validations/user';

const Onboarding = () => {
  const { user } = useUser();

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: user?.firstName ? user.firstName : 'hello',
      username: user?.username ? user.username : '',
      bio: '',
    },
  });

  console.log(user);

  return (
    <section className="padding min-h-screen w-full">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-8 text-left text-3xl font-extrabold md:text-5xl">
          Welcome, {user?.firstName}! Let&apos;s get you set up.
        </h3>
        <p className="w-full text-left text-lg md:text-xl">
          Please fill out the following information to complete your profile.
        </p>
        <form
          className="mx-auto flex w-full max-w-5xl flex-col gap-10 pt-12 text-lg lg:pt-24"
          onSubmit={form.handleSubmit((data) => console.log(data))}
        >
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="name">Name</label>
            <input {...form.register('name')} className="formInput" />
            <p>{form.formState.errors.name?.message}</p>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="username">Username</label>
            <input {...form.register('username')} className="formInput" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bio">Bio</label>
            <textarea {...form.register('bio')} className="formInput" />
          </div>

          <button type="submit" className="submitBtn">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Onboarding;
