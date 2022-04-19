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
import RepaintingCreation from './pages/RepaintingCreation';
import Doriano from './pages/Doriano';
import Soundtor from './pages/Soundtor';
import ScrollToTop from './ScrollToTop';
import Resume from './pages/Resume';
import Lumisynth from './pages/Lumisynth';

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="About/" element={<Home />} />
        <Route path="About/repaintingcreation" element={<RepaintingCreation />} />
        <Route path="About/doriano" element={<Doriano />} />
        <Route path="About/soundtor" element={<Soundtor />} />
        <Route path="About/resume" element={<Resume />} />
        <Route path="About/lumisynth" element={<Lumisynth />} />
        <Route path="About/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
