import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { Status } from '../common/constants';
import { getAllSnippets } from '../features/snippets/snippetsSlice';

const Snippets = () => {
  const snippets = useAppSelector((state) => state.snippets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snippets.status === Status.Idle) {
      console.log('Fetching...');
      dispatch(getAllSnippets());
    }
  }, [snippets, dispatch]);

  return (
    <>
      {snippets.status === Status.Loading && (
        <div>
          <h2 className="font-bold text-2xl text-slate-500 h-1/2 text-center">
            Loading...
          </h2>
        </div>
      )}
      <div>
        {snippets.data?.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Snippets;
