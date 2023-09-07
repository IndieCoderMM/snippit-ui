import { Snippet } from '../../app/common.types';
import SnippetCard from './SnippetCard';

const SnippetList = ({ snippets }: { snippets: Snippet[] }) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 py-10 lg:w-[90%]">
      {snippets.map((item) => (
        <div className="p-2" key={item.id}>
          <SnippetCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
