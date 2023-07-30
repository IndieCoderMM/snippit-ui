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
      console.log('Fetching...');
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

  return <SnippetList snippets={snippets.data} />;
};

export default SnippetsFeed;
