import '../App.css';
import React from 'react';
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react';

const plans = [
    {
      name: 'I like this',
      desc: 'This is a nice feature to have.'
    },
    {
        name: "It's alright I guess",
        desc: "I'm not sure I'll use it too often."
    },
    {
        name: "I'm not a fan",
        desc: "I refuse to use radio groups."
    },
  ]

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

function RadioExtras() {

    const [selected, setSelected] = useState(plans[0])

    return(
        <div className="w-full px-4 py-6">
        <div className="mx-auto w-full max-w-md">
          <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label class="block text-sm leading-5 font-medium text-gray-700 mb-2">
                      This is a Radio group
                    </RadioGroup.Label>
            <div className="space-y-2">
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                    ${
                      checked ? 'bg-violet-700 bg-opacity-75 text-white' : 'bg-white'
                    }
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center text-left">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? 'text-sky-100' : 'text-gray-500'
                              }`}
                            >
                              <span>
                                {plan.desc}
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
)
}

export default RadioExtras