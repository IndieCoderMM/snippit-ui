import Modal from '@/components/Modal';
import SnippetForm from '@/features/snippets/SnippetForm';
import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';

const CreateSnippet = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return <RedirectToSignIn />;
  }

  return (
    <Modal>
      <h3 className="w-full max-w-5xl text-left text-3xl font-extrabold md:text-5xl">
        Create a New Snippet
      </h3>
      <SnippetForm />
    </Modal>
  );
};

export default CreateSnippet;
