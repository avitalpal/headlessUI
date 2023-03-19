import './App.css';
import React from 'react';

// importing Link from react-router-dom to navigate to different end points, you can choose to use this or you can leave the testing for the react-router playground :)

// import { Link } from "react-router-dom";

function ScratchPage() {
  return (
    <div class="ScratchPage md:pl-64">
      {/* put your code here, you can delete the code below if you'd like! */}
      <div class="flex h-screen">
        <div class="m-auto">
          <p class="text-violet-500 font-bold text-xl leading-loose">You can edit this file and create your own webpage with HeadlessUI components, from scratch!</p>
          <code class="text-violet-700 font-bold text-xl leading-loose">ScratchPage.js</code>
        </div>
      </div>
    </div>
  )
}

export default ScratchPage;
