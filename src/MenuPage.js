import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function MenuPage() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/linkpage', label: 'Links' },
    { href: '/switchpage', label: 'Switches' },
    { href: '/transitpage', label: 'Transitions' },
    { href: '/extrapage', label: 'Extras' },
    { href: '/scratchpage', label: 'Scratch' },
  ]

  function HomeInactiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9" stroke="#A78BFA" stroke-width="2" />
        <path d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" />
        <path d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" />
      </svg>
    )
  }

  function HomeActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function LinksInactiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.0002 13C10.4297 13.5741 10.9776 14.0491 11.6067 14.3929C12.2359 14.7367 12.9317 14.9411 13.6468 14.9923C14.362 15.0435 15.0798 14.9403 15.7515 14.6897C16.4233 14.4392 17.0333 14.047 17.5402 13.54L20.5402 10.54C21.451 9.59695 21.955 8.33394 21.9436 7.02296C21.9322 5.71198 21.4063 4.45791 20.4793 3.53087C19.5523 2.60383 18.2982 2.07799 16.9872 2.0666C15.6762 2.0552 14.4132 2.55918 13.4702 3.46997L11.7502 5.17997M14.0002 11C13.5707 10.4258 13.0228 9.95078 12.3936 9.60703C11.7645 9.26327 11.0687 9.05885 10.3535 9.00763C9.63841 8.95641 8.92061 9.0596 8.24885 9.31018C7.5771 9.56077 6.96709 9.9529 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.9219 7.01319 21.9333C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }

  function LinksActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function SwitchesInactiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.9995 16H6C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8H13.9995M21.9995 12C21.9995 14.7614 19.7609 17 16.9995 17C14.2381 17 11.9995 14.7614 11.9995 12C11.9995 9.23858 14.2381 7 16.9995 7C19.7609 7 21.9995 9.23858 21.9995 12Z" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }

  function SwitchesActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function TransitionsInactiveIcon(props) {
    return (
      <svg {...props}
        fill="#A78BFA"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        enable-background="new 0 0 72 72"
      >
        <path d="M68.5,61.568c0,3.828-3.104,6.932-6.932,6.932H10.432c-3.828,0-6.932-3.104-6.932-6.932V26.432 c0-3.828,3.104-6.932,6.932-6.932h51.137c3.828,0,6.932,3.104,6.932,6.932V61.568z M64.5,26.432c0-1.619-1.313-2.932-2.932-2.932 H10.432c-1.619,0-2.932,1.313-2.932,2.932v35.137c0,1.619,1.313,2.932,2.932,2.932h51.137c1.619,0,2.932-1.313,2.932-2.932V26.432 z" />
        <path d="M12.5,37.5c-0.553,0-1-0.447-1-1v-3.802c0-2.721,2.313-5.198,4.903-5.198h18.051c0.552,0,1,0.447,1,1s-0.448,1-1,1 H16.403c-1.461,0-2.903,1.614-2.903,3.198V36.5C13.5,37.053,13.052,37.5,12.5,37.5z" />
        <path d="M12.5,42.5c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1c0.552,0,1,0.447,1,1v2C13.5,42.053,13.052,42.5,12.5,42.5z" />
        <path d="M60.454,15.5h-49c-1.104,0-2-0.896-2-2s0.896-2,2-2h49c1.104,0,2,0.896,2,2S61.559,15.5,60.454,15.5z" />
        <path d="M54.454,7.5h-37c-1.104,0-2-0.896-2-2s0.896-2,2-2h37c1.104,0,2,0.896,2,2S55.559,7.5,54.454,7.5z" />
      </svg>
    )
  }

  function TransitionsActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function ExtrasInactiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path d="M24.0607 10L24.024 38" stroke="#A78BFA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 24L38 24" stroke="#A78BFA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }

  function ExtrasActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function ScratchInactiveIcon(props) {
    return (
      <svg {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#A78BFA"
      >
        <path stroke="#A78BFA" d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.507,21.492,48,48,48h416c26.508,0,48-21.493,48-48V48 C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.507,19,19c0,10.492-8.508,19-19,19s-19-8.508-19-19 C425.664,43.507,434.172,35,444.664,35z M374.164,35c10.492,0,19,8.507,19,19c0,10.492-8.508,19-19,19s-19-8.508-19-19 C355.164,43.507,363.672,35,374.164,35z M303.664,35c10.492,0,19,8.507,19,19c0,10.492-8.508,19-19,19s-19-8.508-19-19 C284.664,43.507,293.172,35,303.664,35z M472,464c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z" />
      </svg>
    )
  }

  function ScratchActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  function DocInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

  function DocActiveIcon(props) {
    return (
      <svg {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#C4B5FD" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
      </svg>
    )
  }

  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
        <img src={require("./bck2.svg")} alt="" class="bg-cover" width="1308" />
        <div class="absolute inset-0 bg-[url(./bck2.svg)] bg-cover"></div>
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
            <br></br>
            <p class="font-semibold text-lg text-left">To edit this page, go to your <code class="italic">MenuPage.js</code> file.</p>
            <p class="text-left leading-loose">
              <b>There, you can experiment with things like:</b>

              <div>
                <ul class="list-disc list-inside">
                  <li class="hover:text-purple-500">Render prop API</li>
                  <li class="hover:text-purple-500">Styling with states</li>
                  <li class="hover:text-purple-500">Using data attributes</li>
                  <li class="hover:text-purple-500">Adding transitions</li>
                  <li class="hover:text-purple-500">And more!</li>
                </ul>
              </div>
            </p>
            <br></br>
            <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
              <p class="leading-loose font-medium text-white">Feel free to play around with the features below!</p>
            </div>
            <br></br>
            <div class="whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <Menu>
                <Menu.Button>Unformatted Simple Menu</Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items>
                    {links.map((link) => (
                      /* Use the `active` state to conditionally style the active item. */
                      <Menu.Item key={link.href} as={Fragment}>
                        {({ active }) => (
                          <a
                            href={link.href}
                            class={`${active ? 'bg-violet-600 text-white' : 'bg-slate-200/0 text-black'
                              }`}
                          >
                            {link.label}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div class="my-4 whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div>
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <Menu.Button class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      Fully Formatted Menu
                      <p
                        class="ml-2 -mr-1 h-5 w-5 text-violet-100 hover:text-violet-50"
                        aria-hidden="true"
                      >&darr;</p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div class="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <HomeActiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HomeInactiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="/">Home</a>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <LinksActiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <LinksInactiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="/linkpage">Links</a>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div class="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <SwitchesActiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <SwitchesInactiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="/switchpage">Switches</a>
                            </button>
                          )}
                        </Menu.Item>
                        <div>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <TransitionsActiveIcon
                                    class="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <TransitionsInactiveIcon
                                    class="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                <a href="/transitpage">Transitions</a>
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <ExtrasActiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ExtrasInactiveIcon
                                  class="mr-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="/extrapage">Extras</a>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <ScratchActiveIcon
                                  class="mr-2 h-5 w-5 text-violet-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ScratchInactiveIcon
                                  class="mr-2 h-5 w-5 text-violet-400"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="/scratchpage">Scratch</a>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div class="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              class={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <DocActiveIcon
                                  class="mr-2 h-5 w-5 text-violet-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <DocInactiveIcon
                                  class="mr-2 h-5 w-5 text-violet-400"
                                  aria-hidden="true"
                                />
                              )}
                              <a href="https://www.notion.so/wizteam/Headless-UI-81f102880b084780a589139f50f315c2">HeadlessUI Doc</a>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
    </div>
  )
}

export default MenuPage;
