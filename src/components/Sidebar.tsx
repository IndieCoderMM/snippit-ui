import {
  Squares2X2Icon,
  BookmarkIcon,
  InboxIcon,
  UsersIcon,
  PencilSquareIcon,
  ArrowLeftCircleIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import TagsDropDown from '../features/tags/TagsDropDown';

const Sidebar = () => {
  return (
    <div
      className="fixed inset-y-0 bottom-0 left-0 top-16 z-20 hidden w-[250px] flex-col justify-between bg-foreground md:flex"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink to="/" className="sideMenuItem">
              <Squares2X2Icon className="h-6 w-6" />
              <span className="ml-3">My Feed</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className="sideMenuItem">
              <InboxIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
              <span className="bg-secondary-color text-primary-color ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">
                3
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" className="sideMenuItem">
              <BookmarkIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contributors" className="sideMenuItem">
              <UsersIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">
                Contributors
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/popular_posts" className="sideMenuItem">
              <DocumentIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">
                Documentation
              </span>
            </NavLink>
          </li>
          <li>
            <TagsDropDown />
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <ArrowLeftCircleIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <PencilSquareIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
