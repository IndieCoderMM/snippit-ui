import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { Status } from '../common/constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import SnippetList from '../features/snippets/SnippetList';
import Loading from '../common/components/Loading';

const SnippetsFeed = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      dispatch(getAllSnippets());
    }
  }, [snippets, dispatch]);

  if (snippets.status === Status.Loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Loading
          title="Fetching data from API"
          message="Please be patient. Sometimes it only takes ETERNITY! 😉"
        />
      </div>
    );
  }

  if (snippets.status === Status.Error) {
    return (
      <div className="flex min-h-screen flex-col gap-5 bg-white py-10 text-center">
        <h2 className="text-2xl font-semibold">Oops! Something went wrong😯</h2>
        <p className="text-lg font-medium text-rose-500">{snippets.error}</p>
      </div>
    );
  }

  return <SnippetList snippets={snippets.data} />;
};

export default SnippetsFeed;
