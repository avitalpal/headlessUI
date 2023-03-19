import './App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

function LinkPage() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
      <img src={require("./bck3.svg")} alt="" class="bg-cover" width="1308" />
      <div class="absolute inset-0 bg-[url(./bck3.svg)] bg-cover"></div>
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Here are some local playgrounds that you can play around with by editing their <code class="text-sm font-bold text-gray-900">.js</code> files:</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4 hover:text-sky-500">
                    <Link to="/menupage" class="underline">Menu customization:</Link>
                    <code class="text-sm font-bold text-gray-900"> MenuPage.js</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4 hover:text-sky-500">
                    <Link to="/switchpage" class="underline">Switches and toggles:</Link>
                    <code class="text-sm font-bold text-gray-900"> SwitchPage.js</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4 hover:text-sky-500">
                    <Link to="/transitpage" class="underline">Transitions:</Link>
                    <code class="text-sm font-bold text-gray-900"> TransitPage.js</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4 hover:text-sky-500">
                    <Link to="/extrapage" class="underline">Other components:</Link>
                    <code class="text-sm font-bold text-gray-900"> ExtraPage.js</code>
                  </p>
                </li>
                <li class="flex items-center">
                  <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p class="ml-4 hover:text-sky-500">
                    <Link to="/scratchpage" class="underline">Build from scratch:</Link>
                    <code class="text-sm font-bold text-gray-900"> ScratchPage.js</code>
                  </p>
                </li>
              </ul>
              <p class="text-gray-900">You can also play around with <b>screen sizes</b>, <b>themes</b>, and <b>plugins</b> by editing
                <code class="text-sm font-bold text-gray-900"> tailwind.config.js</code>
              </p>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <p class="text-gray-900">Need a reminder of HeadlessUI's features?</p>
              <p>
                <a href="https://www.notion.so/wizteam/Headless-UI-81f102880b084780a589139f50f315c2" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
              </p>
              <p class="text-gray-900 my-3">Want to go back to the previous page?</p>
              <button class=" hover:bg-violet-600 active:bg-violet-700 mx-w-sm mx-auto bg-violet-500 rounded-2xl h-12 w-32 shadow-lg flex items-center space-x-4">
                <Link to="/" class="text-white margin-5 hover:text-slate-300 m-auto" >&larr; Click Here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkPage;
