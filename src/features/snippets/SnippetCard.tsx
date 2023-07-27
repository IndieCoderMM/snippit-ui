import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {
  StarIcon as FilledStarIcon,
  BookmarkIcon as FilledBookmarkIcon,
} from '@heroicons/react/24/solid';
import { currentUser } from '../../common/constants/sample';
import { Snippet } from '../../app/common.types';

const SnippetCard = (props: Snippet) => {
  const starred = currentUser.starred_snippets.includes(props.id);
  const bookmarked = currentUser.bookmarked_snippets.includes(props.id);

  return (
    <div className="w-100 flex cursor-pointer flex-col gap-3 rounded-md border bg-white p-5 hover:shadow-md">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <div className="flex gap-5">
        <div>
          <img
            src={props.author.avatar_url}
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{props.author.name}</p>
          <p className="text-slate-500">{props.author.bio}</p>
          <p className="text-sm text-slate-500">3 h ago</p>
        </div>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div className="flexStart gap-2 text-accent-color">
        <span>#Snippit</span>
        <span>#CodeShare</span>
        <span>#Developers</span>
      </div>
      <pre className="max-w-xs overflow-auto rounded-md border p-3 sm:max-w-xl">
        <code>{props.code}</code>
      </pre>
      <div className="flexStart flex-wrap gap-5">
        <button
          type="button"
          className="flexCenter rounded-lg bg-gray-100 p-3 text-gray-500 transition hover:shadow-md hover:ring-1"
        >
          {starred ? (
            <FilledStarIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <StarIcon className="h-6 w-6" />
          )}
          <span className="ml-3 font-medium">{props.stars_counter} stars</span>
        </button>
        <button
          type="button"
          className="flexCenter rounded-lg bg-gray-100 p-3 text-gray-500 transition hover:shadow-md hover:ring-1"
        >
          <ChatBubbleBottomCenterIcon className="h-6 w-6" />
          <span className="ml-3 font-medium">
            {props.comments_counter} comments
          </span>
        </button>
        <button
          type="button"
          className="flexCenter rounded-lg bg-gray-100 p-3 text-gray-500 transition hover:shadow-md hover:ring-1"
        >
          {bookmarked ? (
            <FilledBookmarkIcon className="h-6 w-6 text-accent-color" />
          ) : (
            <BookmarkIcon className="h-6 w-6" />
          )}
          <span className="sr-only">Bookmark</span>
        </button>
        <button
          type="button"
          className="flexCenter rounded-lg bg-gray-100 p-3 text-gray-500 transition hover:shadow-md hover:ring-1"
        >
          <PaperAirplaneIcon className="h-6 w-6 -rotate-12" />
          <span className="sr-only">Share</span>
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
