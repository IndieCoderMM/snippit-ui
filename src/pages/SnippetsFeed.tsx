import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { Status } from '../constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import SnippetList from '../features/snippets/SnippetList';
import Loading from '../components/Loading';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const SnippetsFeed = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      dispatch(getAllSnippets()).catch((error) => console.error(error));
    }
  }, [snippets, dispatch]);

  if (snippets.status === Status.Loading) {
    return (
      <div className="mt-16 grid min-h-screen w-full place-items-center bg-foreground px-6 py-24 sm:py-32 md:ml-[250px] lg:col-span-4 lg:px-8">
        <Loading
          title="Fetching data from API"
          message="Please be patient. Sometimes it only takes ETERNITY! 😉"
        />
      </div>
    );
  }

  if (snippets.status === Status.Error) {
    return (
      <div className="mt-16 flex min-h-screen w-full flex-col gap-5 bg-foreground py-10 text-center md:ml-[250px] lg:col-span-4">
        <h2 className="text-2xl font-semibold">
          Oops! Something went wrong 😯
        </h2>
        <p className="text-lg font-medium text-rose-500">{snippets.error}</p>
      </div>
    );
  }

  return (
    <div className="mt-16 flex max-w-full flex-col gap-2 p-1 pb-8 md:ml-[250px] md:p-4">
      <header className="flex justify-between gap-1">
        <h2 className="text-2xl font-semibold">Snippets Feed</h2>
        <button
          type="button"
          onClick={() => navigate('/create-snippet')}
          className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 font-medium text-white  shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          <PlusIcon className="mr-2 h-6 w-6" />
          Create Snippet
        </button>
      </header>
      <SnippetList snippets={snippets.data} />
      <footer className="my-10 w-full flex-shrink-0 py-10">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2023 Snippit. All rights reserved.
          </p>
          <div className="flex gap-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </a>
            <p className="text-sm text-gray-500">|</p>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SnippetsFeed;
