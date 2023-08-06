import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import SnippetList from '../features/snippets/SnippetList';

const TagPage = () => {
  const { tagName } = useParams();
  const snippets = useAppSelector((state) => state.snippets);

  const filteredSnippets = snippets.data?.filter((item) =>
    item.tags.map((t) => t.name).includes(tagName || ''),
  );

  if (filteredSnippets.length === 0) {
    return (
      <div className="ml-64 flex min-h-screen flex-col gap-5 bg-white py-10 text-center">
        <h2 className="text-2xl font-semibold">
          There's no snippets tagged with{' '}
          <span className="text-primary-color">#{tagName}</span> yet!
        </h2>
      </div>
    );
  }

  return <SnippetList snippets={filteredSnippets} />;
};

export default TagPage;
