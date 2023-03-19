import '../App.css';
import React from 'react';
import { Disclosure } from '@headlessui/react'



function DisclosureExtras() {

    return(

      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 shadow-md overflow-auto focus:outline-none sm:text-sm sm:leading-5 relative">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>What's a Disclosure?</span>
                <svg className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-4 w-4 text-amber-500 transition duration-[450ms] ease-in-out`} fill="#f59e0b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"
                  >
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                This is a disclosure! They're great for sections where you've got loads of information to share, but not too much space to do it.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-amber-100 px-4 py-2 text-left text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                <span>Where do I edit this code?</span>
                <svg className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-4 w-4 text-amber-500 transition duration-[450ms] ease-in-out`} fill="#f59e0b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"
                  >
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Head over to <code>src &rarr; Extras &rarr; Disclosure.js</code>, just make sure not to accidentally commit anything :)
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

)
}

export default DisclosureExtras