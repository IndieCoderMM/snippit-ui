import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  CodeBracketIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Inbox', href: '/inbox' },
  { name: 'Contributors', href: '/contributors' },
  { name: 'Bookmarks', href: '/bookmarks' },
  { name: 'Documentation', href: '/documentation' },
];

function classNames({ classes = [] }: { classes?: string[] } = {}) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { pathname } = useLocation();

  const isActive = (href: string) => href === pathname;
  return (
    <Disclosure
      as="nav"
      className="fixed left-0 right-0 top-0 z-20 h-16 border-b border-slate-400 bg-white"
    >
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div className="flex flex-shrink-0 items-center text-primary-color">
                  <CodeBracketIcon className="h-10 w-10 " />
                  <h1 className="text-2xl font-bold">Snippit</h1>
                </div>
              </div>
              <div className="flexStart inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ProfileMenu />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white shadow-sm lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames({
                    classes: [
                      isActive(item.href)
                        ? 'bg-accent-color text-white'
                        : 'text-gray-500 hover:bg-secondary-color hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    ],
                  })}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
