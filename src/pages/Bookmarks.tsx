import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Status } from '../constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import { currentUser } from '../constants/sample';
import SnippetList from '../features/snippets/SnippetList';

const Bookmarks = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  const bookmarks = snippets.data.filter((snippet) =>
    currentUser.bookmarked_snippets.includes(snippet.id),
  );

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      dispatch(getAllSnippets()).catch((error) => console.error(error));
    }
  }, [snippets, dispatch]);

  return <SnippetList snippets={bookmarks} />;
};

export default Bookmarks;
