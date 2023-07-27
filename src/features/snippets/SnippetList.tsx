import { Snippet } from '../../common.types';
import SnippetCard from './SnippetCard';

const SnippetList = ({ snippets }: { snippets: Snippet[] }) => {
  return (
    <div className="mx-auto grid w-full gap-5 py-10 sm:max-w-2xl sm:pl-10">
      {snippets.map((item) => (
        <div className="p-2" key={item.id}>
          <SnippetCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
