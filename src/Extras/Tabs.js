import '../App.css';
import React from 'react';
import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Image1() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/1147/1147161.png" alt="tabs" />
  )
}

function Image2() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/7129/7129527.png" alt="tabs" />
  )
}

function Image3() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/1975/1975643.png" alt="tabs" />
  )
}

function Image4() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/1157/1157026.png" alt="tabs" />
  )
}

function Image5() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png" alt="tabs" />
  )
}

function Image6() {
  return (
    <img src="https://cdn-icons-png.flaticon.com/512/3571/3571425.png" alt="tabs" />
  )
}

function TabExtras() {
    let [categories] = useState({
        Recent: [
          {
            id: 1,
            title: 'This is a tab',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
            img: Image1()
          },
          {
            id: 2,
            title: "Organize your content",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
            img: Image2()
          },
        ],
        Trending: [
          {
            id: 1,
            title: 'Edit with Tabs.js',
            date: 'Mar 8',
            commentCount: 31,
            shareCount: 12,
            img: Image3()
          },
          {
            id: 2,
            title: 'Check the Extras folder',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 15,
            img: Image4()
          },
        ],
        Recommended: [
          {
            id: 1,
            title: "Play around with it",
            date: '3d ago',
            commentCount: 33,
            shareCount: 16,
            img: Image5()
          },
          {
            id: 2,
            title: "It's fun I promise",
            date: '23h ago',
            commentCount: 8,
            shareCount: 11,
            img: Image6()
          },
        ],
      })
    
      return (
        <div className="w-full max-w-md px-2 py-4 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-red-600/30 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-900',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3 shadow-md',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <div className="text-sm font-medium leading-5 text-left flex justify-between">
                          <div class="inline-block">{post.title}
                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul></div>
                          <div class="inline-block justify-end w-10 h-10">{post.img}</div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-red-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      )
}

export default TabExtras