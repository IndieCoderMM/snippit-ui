import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { Status } from '../common/constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';
import { snippets as sampleSnippets } from '../common/constants/sample';
import SnippetCard from '../features/snippets/SnippetCard';

const SnippetsFeed = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      console.log('Fetching...');
      dispatch(getAllSnippets());
    }
  }, [snippets, dispatch]);

  // if (snippets.status === Status.Loading) {
  //   return (
  //     <div>
  //       <h2 className="font-bold text-2xl text-slate-500 h-1/2 text-center">
  //         Loading...
  //       </h2>
  //     </div>
  //   );
  // }

  return (
    <div className="grid gap-5 max-w-xl mx-auto py-10">
      {sampleSnippets.map((item) => (
        <SnippetCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SnippetsFeed;
