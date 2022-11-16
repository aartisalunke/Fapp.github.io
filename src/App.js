import React from 'react';
import Register from './components/register/register';
import Login from './components/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/register/" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
        </>
  )
}

export default App;
