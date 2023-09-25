import { Snippet } from '../../app/common.types';
import SnippetCard from './SnippetCard';

const SnippetList = ({ snippets }: { snippets: Snippet[] }) => {
  return (
    <div className="flex w-full flex-col gap-2 py-10 md:gap-5">
      {snippets.map((item) => (
        <div className="p-2" key={item.id}>
          <SnippetCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
