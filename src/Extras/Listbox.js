import '../App.css';
import React from 'react';
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const items = [
    "This is an option",
    "Also called an item",
    "This is one too",
    "You can select them",
    "Or click away",
    "Up to you really",
    "Another option",
    "And another one",
    "Infinite options"
  ];

function ListboxExtras() {

    const [selectedL, setSelectedL] = useState(items[0])

    return(

        <Listbox as="div"
                class="space-y-1 mb-4"
                value={selectedL}
                onChange={setSelectedL}>
                {({ open }) => (
                  <>
                    <Listbox.Label class="block text-sm leading-5 font-medium text-gray-700">
                      This is a Listbox
                    </Listbox.Label>
                    <div class="relative">
                      <span class="inline-block w-full rounded-md shadow-sm">
                        <Listbox.Button class="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                          <span class="block truncate">{selectedL}</span>
                          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                              class="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Listbox.Button>
                      </span>

                      <Transition
                        show={open}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                      >
                        <Listbox.Options
                          static
                          class="max-h-60 rounded-md py-1 text-base leading-6 shadow-xl overflow-auto focus:outline-none sm:text-sm sm:leading-5 z-50 absolute w-full bg-white"
                        >
                          {items.map((item) => (
                            <Listbox.Option key={item} value={item}>
                              {({ selectedL, active }) => (
                                <div
                                  class={`${active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                    } cursor-default select-none relative py-2 pl-8 pr-4`}
                                >
                                  <span
                                    class={`${selectedL ? "font-semibold" : "font-normal"
                                      } block truncate`}
                                  >
                                    {item}
                                  </span>
                                  {selectedL && (
                                    <span
                                      class={`${active ? "text-amber-800" : "text-amber-500"
                                        } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                    >
                                      <svg
                                        class="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

)
}

export default ListboxExtras