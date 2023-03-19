import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, Fragment } from 'react'
import { Switch, Transition } from '@headlessui/react'

function SwitchPage() {
  
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(false);
  let [isShowing, setIsShowing] = useState(true);

  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
      <img src={require("./bck4.svg")} alt="" class="bg-cover" width="1308" />
      <div class="absolute inset-0 bg-[url(./bck4.svg)] bg-cover"></div>
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
          <br></br>
          <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">SwitchPage.js</code> file.</p>
          <p class="text-left leading-loose">
            <b>There, you can experiment with things like:</b>

            <ul class="list-disc list-inside">
              <li class="hover:text-purple-500">Render prop API</li>
              <li class="hover:text-purple-500">Styling with states</li>
              <li class="hover:text-purple-500">Using data attributes</li>
              <li class="hover:text-purple-500">Adding transitions</li>
              <li class="hover:text-purple-500">And more!</li>
            </ul>
          </p>
          <br></br>
          <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
            <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
          </div>
          <br></br>
          <div class="whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="justify-between">
            <div class="py-4">
              <Switch.Group>
                <div class="flex justify-between">
                  <Switch.Label class="mr-4">You can click the text too!</Switch.Label>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    class={`${enabled ? 'bg-yellow-800' : 'bg-yellow-500'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      class={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            <div class="py-4">
              <Switch.Group>
                <div class="flex justify-between">
                  <Switch.Label class="mr-4" passive>Or you can make it passive.</Switch.Label>
                  <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-100 scale-95 "
        >
                  <Switch
                  onClick={() => {
                    setIsShowing(false)
                    setEnabled3(true)
                  }}
                    checked={enabled2}
                    onChange={setEnabled2}
                    class={`${enabled2 ? 'bg-sky-800' : 'bg-sky-500'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      class={`${enabled2 ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                  </Transition>
                </div>
              </Switch.Group>
            </div>
            <div class="py-4">
              <Switch.Group>
                <div class="flex justify-between">
                  <Switch.Label class="mr-4" passive>Bring the other switch back ;)</Switch.Label>
                  <Switch
                  onClick={() => {
                    setIsShowing(true)
                    setEnabled2(false)
                  }}
                    checked={enabled3}
                    onChange={setEnabled3}
                    class={`${enabled3 ? 'bg-emerald-800' : 'bg-emerald-500'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      class={`${enabled3 ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            </div>
          </div>
          <div class="pt-8 text-base font-semibold leading-7">
            <p class="text-gray-900">Need a reminder of HeadlessUI's features?</p>
            <p>
              <a href="https://www.notion.so/wizteam/Headless-UI-81f102880b084780a589139f50f315c2" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
            </p>
            <p class="text-gray-900 my-3">Want to go back to the home page?</p>
            <button class=" hover:bg-violet-600 active:bg-violet-700 mx-w-sm mx-auto bg-violet-500 rounded-2xl h-12 w-32 shadow-lg flex items-center space-x-4">
              <Link to="/" class="text-white margin-5 hover:text-slate-300 m-auto">&larr; Click Here</Link>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchPage;
