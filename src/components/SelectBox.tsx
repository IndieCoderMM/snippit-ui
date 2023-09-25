import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const SelectBox = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Listbox value={value} onChange={onChange} as="div" className="space-y-2">
      <div className="relative">
        <Listbox.Button
          as="button"
          className="relative w-full rounded-xl bg-gray-100 py-4 pl-4 pr-10 text-left capitalize focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300"
        >
          {value ? value : 'Select a Language'}
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-primary/10 text-primary' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate capitalize ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
      {/* <Listbox.Options
        as="ul"
        className="mt-2 space-y-1 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
        >
        {options.map((option) => (
          <Listbox.Option
            key={option}
            value={option}
            className={({ active }) =>
              `${
                active ? 'bg-primary ' : 'text-gray-900'
              } relative cursor-pointer select-none px-4 py-2`
            }
            >
            {({ selected }) => (
              <div className="flex">
                {selected && (
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                )}
                <span className="ml-6">{option}</span>
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options> */}
    </Listbox>
  );
};

export default SelectBox;
