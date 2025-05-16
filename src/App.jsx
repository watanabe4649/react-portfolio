import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseEffectCheck from './pages/UseEffectCheck';
import UseStateCheck from './pages/UseStateCheck';
import UseRefCheck from './pages/UseRefCheck';
import UseReducerCheck from './pages/UseReducerCheck';
import UseImmerCheck from './pages/UseImmerCheck';
import UseMemoCheck from './pages/UseMemoCheck';
import UseContextCheck from './pages/UseContextCheck';

import './App.css';
import UseCallbackCheck from './pages/UseCallbackCheck';

function App() {
  // // useEffect_1
  // useEffect(() => {
  //   console.log('再レンダリングされるたび実行');
  // });
  // // useEffect_2
  // useEffect(() => {
  //   console.log('初回レンダリング時のみ実行');
  // }, []);
  // // useEffect_3
  // useEffect(() => {
  //   console.log('countの値が変わるたび実行');
  // }, [count]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <br />
          <Link to="/UseEffectCheck">UseEffect</Link>
          <br />
          <Link to="/UseStateCheck">UseState</Link>
          <br />
          <Link to="/UseRefCheck">UseRef</Link>
          <br />
          <Link to="/UseReducerCheck">UseReducer</Link>
          <br />
          <Link to="/UseImmerCheck">UseImmer</Link>
          <br />
          <Link to="/UseMemoCheck">UseMemo</Link>
          <br />
          <Link to="/UseContextCheck">UseContext</Link>
          <br />
          <Link to="/UseCallbackCheck">UseCallback</Link>
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UseEffectCheck" element={<UseEffectCheck />} />
            <Route path="/UseStateCheck" element={<UseStateCheck />} />
            <Route path="/UseRefCheck" element={<UseRefCheck />} />
            <Route path="/UseReducerCheck" element={<UseReducerCheck />} />
            <Route path="/UseImmerCheck" element={<UseImmerCheck />} />
            <Route path="/UseMemoCheck" element={<UseMemoCheck />} />
            <Route path="/UseContextCheck" element={<UseContextCheck />} />
            <Route path="/UseCallbackCheck" element={<UseCallbackCheck />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
