import React from 'react';
import Home from './page/home'
import About from './page/About'
import { Routes, Route } from 'react-router-dom'
import Header from './component/layout/header'
import RequireAuth from './component/auth/requireAuth'
import Profile from './page/Profile'
import Login from './page/Login'
import ProtectRoutes from './component/auth/ProtectRoutes'
function App() {
  return (
    <RequireAuth>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<ProtectRoutes> <About /> </ProtectRoutes>} >
          {/* <Route index element={<About />}></Route>
          <Route path="" element={<About />}></Route>
          <Route path="" element={<About />}></Route> */}
        </Route>
        <Route path='Profile' element={<ProtectRoutes> <Profile /></ProtectRoutes>} />
        <Route path='Login' element={<Login />} />
        <Route path='*' element={<> not Found</>} />
      </Routes>
    </RequireAuth>
  );
}

export default App;
