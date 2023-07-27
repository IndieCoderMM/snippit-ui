import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Status } from '../common/constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import { currentUser } from '../common/constants/sample';
import SnippetList from '../features/snippets/SnippetList';
import { snippets as sampleSnippets } from '../common/constants/sample';

const Bookmarks = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const bookmarks = sampleSnippets.filter((snippet) =>
    currentUser.bookmarked_snippets.includes(snippet.id),
  );

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      console.log('Fetching...');
      dispatch(getAllSnippets());
    }
  }, [snippets, dispatch]);

  return <SnippetList snippets={bookmarks} />;
};

export default Bookmarks;
