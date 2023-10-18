import logo from './logo.svg';
import './App.css';
import './Main.scss';
import "./pages/DefaultPage.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import ReactDOM from 'react-dom'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'



import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './ScrollToTop';

//Games
import LifeSwing from './pages/articles/LifeSwing';
import Doriano from './pages/articles/Doriano';
import RepaintingCreation from './pages/articles/RepaintingCreation';
import SpaceDroid from './pages/articles/SpaceDroid';

//Software
import Soundtor from './pages/articles/Soundtor';
import Lumisynth from './pages/articles/Lumisynth';
import Improvitouch from './pages/articles/Improvitouch';

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
        <Route path="About/RepaintingCreation" element={<RepaintingCreation />} />
        <Route path="About/lifeswing" element={<LifeSwing />} />
        <Route path="About/Doriano" element={<Doriano />} />
        <Route path="About/Soundtor" element={<Soundtor />} />
        <Route path="About/Resume" element={<Resume />} />
        <Route path="About/Lumisynth" element={<Lumisynth />} />
        <Route path="About/SpaceDroid" element={<SpaceDroid />} />
        <Route path="About/Improvitouch" element={<Improvitouch />} />
        <Route path="About/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
