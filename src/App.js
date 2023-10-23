import logo from './logo.svg';
import './App.css';
import './Main.scss';
import "./pages/DefaultPage.css"
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import ReactDOM from 'react-dom'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop';

//Games
import Games from './pages/Games';
import LifeSwing from './pages/articles/games/LifeSwing';
import Doriano from './pages/articles/games/Doriano';
import RepaintingCreation from './pages/articles/games/RepaintingCreation';
import SpaceDroid from './pages/articles/games/SpaceDroid';
import TrialJanitor from './pages/articles/games/TrialJanitor';

//Tools
import Tools from './pages/Tools';
import Soundtor from './pages/articles/tools/Soundtor';
import LazyFectcher from './pages/articles/tools/LazyFetcher';
import Lumisynth from './pages/articles/tools/Lumisynth';
import Improvitouch from './pages/articles/tools/Improvitouch';

//Tutorials
import Tutorials from './pages/Tutorials';

//Other
import Resume from './pages/Resume';

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="About/" element={<Home />} />

        <Route path="About/Games" element={<Games />} />
        <Route path="About/Games/Doriano" element={<Doriano />} />
        <Route path="About/Games/SpaceDroid" element={<SpaceDroid />} />
        <Route path="About/Games/Repaintingcreation" element={<RepaintingCreation />} />
        <Route path="About/Games/Lifeswing" element={<LifeSwing />} />
        <Route path="About/Games/TrialJanitor" element={<TrialJanitor />} />

        <Route path="About/Tools" element={<Tools />} />
        <Route path="About/Tools/Soundtor" element={<Soundtor />} />
        <Route path="About/Tools/Lumisynth" element={<Lumisynth />} />
        <Route path="About/Tools/Improvitouch" element={<Improvitouch />} />
        <Route path="About/Tools/LazyFetcher" element={<LazyFectcher />} />

        <Route path="About/Tutorials" element={<Tutorials />} />

        <Route path="About/Resume" element={<Resume />} />
        

        <Route path="About/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
