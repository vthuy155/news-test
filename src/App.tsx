import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Client from './layouts/Client';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Client />}>
        <Route index element={<Home />} />
        <Route path='/suctre70' element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
