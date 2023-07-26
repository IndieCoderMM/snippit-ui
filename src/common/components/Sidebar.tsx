import { Disclosure } from '@headlessui/react';
import {
  HomeIcon,
  ChevronDownIcon,
  FireIcon,
  TagIcon,
  BookmarkIcon,
  InboxIcon,
  UsersIcon,
  PencilSquareIcon,
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside
      className="fixed left-0 top-16 z-20 h-screen w-56 -translate-x-full transition-transform sm:translate-x-0"
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
              <FireIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">
                Popular Posts
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox" className="sideMenuItem">
              <InboxIcon className="h-6 w-6" />
              <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
              <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </NavLink>
          </li>
          <li>
            <Disclosure>
              <Disclosure.Button
                type="button"
                className="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
              >
                <TagIcon className="h-6 w-6" />
                <span className="ml-3 flex-1 whitespace-nowrap text-left">
                  Browse Tags
                </span>
                <ChevronDownIcon className="h-5 w-6" />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className="space-y-2 py-2">
                  <li>
                    <a href="#" className="sideDropItem">
                      #WebDev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sideDropItem">
                      #GameDev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sideDropItem">
                      #JavaScript
                    </a>
                  </li>
                </ul>
              </Disclosure.Panel>
            </Disclosure>
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
