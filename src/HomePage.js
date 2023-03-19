import './App.css';
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div class="HomePage">

      <div>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
          <img src={require("./bck.svg")} alt="" class="bg-cover" width="1308" />
          <div class="absolute inset-0 bg-[url(./bck.svg)] bg-cover"></div>
          <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="mx-auto max-w-md">
              <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
              <div class="divide-y divide-gray-300/50">
                <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                  <p>Welcome to the Wiz HeadlessUI playground! Explore pre-built features like:</p>
                  <ul class="space-y-4">
                    <li class="flex items-center translate-x-1/3">
                      <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p class="ml-4">
                        Menus
                      </p>
                    </li>
                    <li class="flex items-center translate-x-1/3">
                      <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p class="ml-4">
                        Switches and toggles
                      </p>
                    </li>
                    <li class="flex items-center translate-x-1/3">
                      <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2 hover:stroke-purple-700 hover:fill-purple-200 active:fill-green-200 active:stroke-green-500" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p class="ml-4">Transitions</p>
                    </li>
                  </ul>
                  <p>and more! Just edit the code directly in your IDE and watch the changes happen :)</p>
                </div>
                <div class="pt-8 text-base font-semibold leading-7 whitespace-pre-line">
                  <p class="text-gray-900">Need a reminder of HeadlessUI's features?</p>
                  <p>
                    <a href="https://www.notion.so/wizteam/Headless-UI-81f102880b084780a589139f50f315c2" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
                  </p>
                  <p class=" text-gray-900 my-3">Want to see the playgrounds we've got?</p>
                  <button class="hover:bg-violet-600 active:bg-violet-700 mx-w-sm mx-auto bg-violet-500 rounded-2xl h-12 w-32 shadow-lg flex items-center space-x-4">

                    <Link to="linkpage" class="text-white margin-5 hover:text-slate-300 m-auto">Click Here &rarr;</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;