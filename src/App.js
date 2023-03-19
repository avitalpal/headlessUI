import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import SwitchPage from './SwitchPage';
import TransitPage from './TransitPage';
import LinkPage from './LinkPage';
import ExtraPage from './ExtraPage';
import ScratchPage from './ScratchPage';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <App/> } /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="menupage" element={<MenuPage />} />
        <Route path="switchpage" element={<SwitchPage />} />
        <Route path="transitpage" element={<TransitPage />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="extrapage" element={<ExtraPage />} />
        <Route path="scratchpage" element={<ScratchPage />} />
        <Route path="*" element={<div class="my-auto"><p>Hey there :D <br></br> Looks like this page doesn't exist! You can just hit the back button to continue where you left off</p><br></br> <img class="mx-auto" src="https://media.tenor.com/udq1uD9WHSQAAAAM/oops.gif" alt="mistake monkey gif"></img></div>} />
      </Routes>
    </div>
  );
}

export default App;
