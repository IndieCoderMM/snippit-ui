import { Disclosure } from '@headlessui/react';
import {
  HomeIcon,
  ChevronDownIcon,
  FireIcon,
  TagIcon,
  BookmarkIcon,
  InboxIcon,
  UsersIcon,
  ArrowLeftOnRectangleIcon,
  PencilSquareIcon,
  ArrowLeftCircleIcon,
} from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside
      className="fixed top-16 left-0 bottom-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="#" className="sideMenuItem">
              <HomeIcon className="w-6 h-6" />
              <span className="ml-3">My Feed</span>
            </a>
          </li>

          <li>
            <a href="#" className="sideMenuItem">
              <BookmarkIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">Bookmarks</span>
            </a>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <UsersIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Contributors
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <FireIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Popular Posts
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <InboxIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </li>
          <li>
            <Disclosure>
              <Disclosure.Button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
              >
                <TagIcon className="w-6 h-6" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Browse Tags
                </span>
                <ChevronDownIcon className="w-6 h-5" />
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className="py-2 space-y-2">
                  <li>
                    <a href="#" className="sideDropItem">
                      WebDev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sideDropItem">
                      GameDev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="sideDropItem">
                      JavaScript
                    </a>
                  </li>
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <ArrowLeftCircleIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a href="#" className="sideMenuItem">
              <PencilSquareIcon className="w-6 h-6" />
              <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
