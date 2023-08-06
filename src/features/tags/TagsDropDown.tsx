import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, TagIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { Status } from '../../common/constants';
import { getAllTags } from './tagsSlice';
import { Link } from 'react-router-dom';

const TagsDropDown = () => {
  const tags = useAppSelector((state) => state.tags);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tags.status === Status.Idle) {
      dispatch(getAllTags()).catch((error) => console.error(error));
    }
  }, [tags, dispatch]);

  return (
    <Disclosure>
      <Disclosure.Button
        type="button"
        className="group flex w-full items-center rounded-lg p-2 text-base text-gray-500 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-tags"
      >
        <TagIcon className="h-6 w-6" />
        <span className="ml-3 flex-1 whitespace-nowrap text-left">
          Browse Tags
        </span>
        <ChevronDownIcon className="h-5 w-6" />
      </Disclosure.Button>
      <Disclosure.Panel>
        {tags.status === Status.Success ? (
          <ul className="space-y-1 py-1">
            {tags.data.map((tag) => (
              <li key={tag.id} className="sideDropItem">
                <Link to={`/tags/${tag.name}`} className="h-full w-full">
                  #{tag.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default TagsDropDown;
