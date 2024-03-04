import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Login from './Login';
import Home from './Home';

const App = () => (
    <Router>
      <div>
        <h1>React路由基础</h1>
        {/*  指定路由入口，点击哪里跳转*/}
        <Link to="/login">去登陆</Link>
        {/*  指定路由出口，跳转到哪里去*/}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <App />
</React.StrictMode>
);