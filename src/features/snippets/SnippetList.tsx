import { Snippet } from '../../app/common.types';
import SnippetCard from './SnippetCard';

const SnippetList = ({ snippets }: { snippets: Snippet[] }) => {
  return (
    <div className="mx-auto grid w-full justify-start gap-5 py-10 sm:max-w-2xl">
      {snippets.map((item) => (
        <div className="max-w-full overflow-hidden p-2" key={item.id}>
          <SnippetCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
