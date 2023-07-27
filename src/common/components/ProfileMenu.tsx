import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { currentUser } from '../constants/sample';

function classNames({ classes = [] }: { classes?: string[] } = {}) {
  return classes.filter(Boolean).join(' ');
}

const ProfileMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <Menu as="div" className="relative z-10">
      <Menu.Button
        onMouseEnter={() => setShow(true)}
        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-10 w-10 rounded-full"
          src={currentUser.avatar_url}
          alt=""
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        show={show}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onMouseLeave={() => setShow(false)}
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="flex flex-col items-center gap-y-4">
            <img
              src={currentUser.avatar_url}
              className="h-20 w-20 rounded-full"
              alt="profile"
            />
            <p className="font-semibold">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
          </div>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames({
                  classes: [
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ],
                })}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames({
                  classes: [
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ],
                })}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames({
                  classes: [
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ],
                })}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
