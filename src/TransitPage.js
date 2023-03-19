import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react'
import { useState } from 'react'

function TransitPage() {

  const [isShowing, setIsShowing] = useState(false)
  const [isShowing2, setIsShowing2] = useState(false)
  const [isShowing3] = useState(true)
  const [isShowing4, setIsShowing4] = useState(false)

  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
      <img src={require("./bck5.svg")} alt="" class="bg-cover" width="1308" />
      <div class="absolute inset-0 bg-[url(./bck5.svg)] bg-cover"></div>
      <Transition
        appear={true}
        show={isShowing3}
        enter="transform transition duration-[1000ms]"
        enterFrom="opacity-0 rotate-[180deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
            <br></br>
            <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">TransitPage.js</code> file.</p>
            <p class="text-left leading-loose">
              <b>There, you can experiment with things like:</b>

              <ul class="list-disc list-inside">
                <li class="hover:text-purple-500">Render prop API</li>
                <li class="hover:text-purple-500">Showing and hiding content</li>
                <li class="hover:text-purple-500">Animating transitions</li>
                <li class="hover:text-purple-500">Coordinating multiple transitions</li>
                <li class="hover:text-purple-500">And more!</li>
              </ul>
            </p>
            <br></br>
            <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
              <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
            </div>
            <br></br>
            <div class="flex cols-4 flex-col whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div>
                <button class="bg-violet-500 text-white rounded-3xl hover:bg-violet-600 p-4" onClick={() => setIsShowing((isShowing) => !isShowing)}>
                  Click me
                </button>
                <Transition
                  show={isShowing}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <p class="font-mono m-3 p-4 px-12 bg-violet-500 shadow-lg text-white">I will fade in and out</p>
                </Transition>
              </div>
              <br></br>
              <div>
                <button class="bg-sky-500 text-white rounded-3xl hover:bg-sky-600 p-4" onClick={() => setIsShowing2((isShowing) => !isShowing)}>
                  Now me
                </button>
                <Transition show={isShowing2}>
                  <Transition.Child
                    enter="transition ease-in-out duration-1000 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Transition.Child
                      enter="transition-opacity ease-linear duration-1000"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <p class="font-mono m-3 p-4 px-4 bg-sky-500 shadow-lg text-white">I have multiple transitions</p>
                    </Transition.Child>
                  </Transition.Child>

                  <Transition.Child
                    enter="transition ease-in-out duration-1000 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Transition.Child
                      enter="transition-opacity ease-linear duration-1000"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <p class="font-mono m-3 p-4 px-4 bg-sky-500 shadow-lg text-white">Like this!</p>
                    </Transition.Child>
                  </Transition.Child>
                </Transition>
              </div>
              <br></br>
              <div>
                <button class="bg-yellow-500 text-white rounded-3xl hover:bg-yellow-600 p-4" onClick={() => setIsShowing4((isShowing) => !isShowing)}>
                  Make your own :)
                </button>
                <Transition
                  show={isShowing4}
                >
                  <p class="font-mono m-3 p-4 px-12 bg-yellow-500 shadow-lg text-white">Your text here</p>
                </Transition>
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
      </Transition>
    </div>
  )
}

export default TransitPage;
