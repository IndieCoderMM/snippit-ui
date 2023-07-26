import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { Snippet } from '../../common.types';

const SnippetCard = (props: Snippet) => {
  return (
    <div className="flex cursor-pointer flex-col gap-3 rounded-md border bg-white p-5 hover:shadow-md">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <div className="flex gap-5">
        <div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">Bob Realman</p>
          <p className="text-slate-500">Senior React Developer</p>
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
      <pre className="max-w-md overflow-auto rounded-md border p-3">
        <code>{props.code}</code>
      </pre>
      <div className="flexStart gap-5">
        <button
          type="button"
          className="flexCenter rounded-lg bg-gray-100 p-3 text-gray-500 transition hover:shadow-md hover:ring-1"
        >
          <StarIcon className="h-6 w-6" />
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
          <BookmarkIcon className="h-6 w-6" />
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
