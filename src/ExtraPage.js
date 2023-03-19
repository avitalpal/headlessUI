import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ComboboxExtras from './Extras/Combobox';
import ListboxExtras from './Extras/Listbox';
import DisclosureExtras from './Extras/Disclosure';
import ModalExtras from './Extras/Modal';
import PopoverExtras from './Extras/Popover';
import RadioExtras from './Extras/Radio';
import TabExtras from './Extras/Tabs';

function ExtraPage() {


  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
        <img src={require("./bck6.svg")} alt="" class="bg-cover" width="1308" />
        <div class="absolute inset-0 bg-[url(./bck6.svg)] bg-cover"></div>
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
            <br></br>
            <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">ExtraPage.js</code> file.</p>
            <br></br>
            <p class="text-left">
              <b> Each component in it has its own file for individual editing, found in <code class="italic">src &rarr; Extras</code>.</b><p class="my-3 font-semibold">There, you can experiment with things like:</p> 

              <div>
                <ul class="list-disc list-inside">
                  <li class="hover:text-purple-500">Listboxes and comboboxes</li>
                  <li class="hover:text-purple-500">Disclosures and modals</li>
                  <li class="hover:text-purple-500">Popovers</li>
                  <li class="hover:text-purple-500">Radio groups</li>
                  <li class="hover:text-purple-500">And tabs!</li>
                </ul>
              </div>
            </p>
            <br></br>
            <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
              <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
            </div>
            <br></br>
            <div class=" bg-slate-200/70 px-6 py-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

              <ListboxExtras />

              <ComboboxExtras />

              <br/>

              <DisclosureExtras />

              <br/>

              <ModalExtras />

              <br/>

              <PopoverExtras />

              <RadioExtras />

              <TabExtras />

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
    </div>
  )
}

export default ExtraPage;
