import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';




function App() {

  return (


    <div className="App">
      <NavBar />
      <nav className='App-nav'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/playstation' element={<PlayStation />}></Route>
          <Route path='/xbox' element={<Xbox />}></Route>
          <Route path={`/item/:gameName`} element={<ItemPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </nav>
    </div>

  );
}

export default App;
