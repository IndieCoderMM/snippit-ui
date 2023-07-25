import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { Snippet } from '../../common.types';

const SnippetCard = (props: Snippet) => {
  return (
    <div className="flex flex-col gap-3 bg-white border rounded-md p-5 hover:shadow-md cursor-pointer">
      <h3 className="text-2xl font-semibold">{props.title}</h3>
      <div className="flex gap-5">
        <div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-12 h-12 rounded-full object-cover"
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
      <div className="flexStart gap-2 text-sky-500">
        <span>#Snippit</span>
        <span>#CodeShare</span>
        <span>#Developers</span>
      </div>
      <pre className="w-full max-w-lg overflow-auto p-3 rounded-md border">
        <code>{props.code}</code>
      </pre>
      <div className="flexStart gap-5">
        <button
          type="button"
          className="flexCenter bg-gray-100 text-gray-500 rounded-lg p-3 transition hover:shadow-md hover:ring-1"
        >
          <StarIcon className="w-6 h-6" />
          <span className="font-medium ml-3">{props.stars_counter} stars</span>
        </button>
        <button
          type="button"
          className="flexCenter bg-gray-100 text-gray-500 rounded-lg p-3 transition hover:shadow-md hover:ring-1"
        >
          <ChatBubbleBottomCenterIcon className="w-6 h-6" />
          <span className="font-medium ml-3">
            {props.comments_counter} comments
          </span>
        </button>
        <button
          type="button"
          className="flexCenter bg-gray-100 text-gray-500 rounded-lg p-3 transition hover:shadow-md hover:ring-1"
        >
          <BookmarkIcon className="w-6 h-6" />
          <span className="sr-only">Bookmark</span>
        </button>
        <button
          type="button"
          className="flexCenter bg-gray-100 text-gray-500 rounded-lg p-3 transition hover:shadow-md hover:ring-1"
        >
          <PaperAirplaneIcon className="w-6 h-6 -rotate-12" />
          <span className="sr-only">Share</span>
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
