import '../App.css';
import React from 'react';
import { useState, Fragment } from 'react'
import { Transition, Combobox } from '@headlessui/react'

const items = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Arduino' },
    { id: 3, name: 'Spike Prime' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'EV3' },
]


function ComboboxExtras() {

    const [selectedC, setSelectedC] = useState(items[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? items
            : items.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (


        <Combobox as="div" value={selectedC} onChange={setSelectedC} className="z-10">
            <Combobox.Label className="block text-sm leading-5 font-medium text-gray-700">This is a Combobox</Combobox.Label>
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 z-10"
                        displayValue={(item) => item.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                            className="h-5 w-5 text-gray-400"
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
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xl overflow-auto focus:outline-none sm:text-sm sm:leading-5 z-30 absolute w-full bg-white">
                        {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                        ) : (
                            filteredPeople.map((item) => (
                                <Combobox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selectedC, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selectedC ? "font-semibold" : "font-normal"
                                                    }`}
                                            >
                                                {item.name}
                                            </span>
                                            {selectedC ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-amber-800" : "text-amber-500"
                                                        }`}
                                                >
                                                    <svg
                                                        className="h-5 w-5"
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
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>

)
}

export default ComboboxExtras