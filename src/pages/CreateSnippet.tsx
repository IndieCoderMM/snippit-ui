import Modal from '@/components/Modal';
import SnippetForm from '@/features/snippets/SnippetForm';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const CreateSnippet = () => {
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded || !userId) navigate('/sign-in');

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
