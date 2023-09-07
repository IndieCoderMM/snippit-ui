import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { Status } from '../constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import SnippetList from '../features/snippets/SnippetList';
import Loading from '../components/Loading';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

const SnippetsFeed = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      dispatch(getAllSnippets()).catch((error) => console.error(error));
    }
  }, [snippets, dispatch]);

  if (snippets.status === Status.Loading) {
    return (
      <div className="grid min-h-screen w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:col-span-4 lg:px-8">
        <Loading
          title="Fetching data from API"
          message="Please be patient. Sometimes it only takes ETERNITY! 😉"
        />
      </div>
    );
  }

  if (snippets.status === Status.Error) {
    return (
      <div className="flex min-h-screen w-full flex-col gap-5 bg-white py-10 text-center lg:col-span-4">
        <h2 className="text-2xl font-semibold">Oops! Something went wrong😯</h2>
        <p className="text-lg font-medium text-rose-500">{snippets.error}</p>
      </div>
    );
  }

  return (
    <div className="col-span-1 flex h-screen flex-col gap-2 overflow-y-auto p-4 pb-8 lg:col-span-6 xl:col-span-4">
      <header className="flex justify-between gap-1">
        <h2 className="text-2xl font-semibold">Your Feed</h2>
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-1 transition-all hover:scale-105 hover:bg-gray-300"
        >
          <Cog6ToothIcon className="h-6 w-6" />
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
