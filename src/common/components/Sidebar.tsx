import {
  HomeIcon,
  BookmarkIcon,
  InboxIcon,
  UsersIcon,
  PencilSquareIcon,
  ArrowLeftCircleIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import TagsDropDown from '../../features/tags/TagsDropDown';

const Sidebar = () => {
  return (
    <aside
      className="fixed left-0 top-16 z-20 h-screen w-64 -translate-x-full border-r transition-transform lg:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white px-3 py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink to="/" className="sideMenuItem">
              <HomeIcon className="h-6 w-6" />
              <span className="ml-3">My Feed</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className="sideMenuItem">
              <InboxIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
              <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-secondary-color p-3 text-sm font-medium text-primary-color">
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
    </aside>
  );
};

export default Sidebar;
