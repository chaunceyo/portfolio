import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on load
    setTimeout(() => {
      document.documentElement.style.height = `${window.innerHeight}px`; // Force full height
    }, 100);
  }, []);
  return (

    <>
      <div className='container'>
        <div className="App">
          <NavBar />
          <nav className='App-nav'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
