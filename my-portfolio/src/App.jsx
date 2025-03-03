import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {

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
