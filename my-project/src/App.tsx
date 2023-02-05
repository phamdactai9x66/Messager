import React, { createContext, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './component/layout/header'
import RequireAuth from './component/auth/requireAuth'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ProtectRoutes from './component/auth/ProtectRoutes'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Home = lazy(() => import('./page/home'));
const About = lazy(() => import('./page/About'));
const Profile = lazy(() => import('./page/Profile'));
const Login = lazy(() => import('./page/Login'));
const TestFeature = lazy(() => import('./page/TestFeature'));
const checkThemLocal = localStorage.getItem('themeLocal');
export const getTheme = createContext<any>(null);
function App() {
  const [changeTheme, setChangeTheme] = React.useState<any>(checkThemLocal ? checkThemLocal : 'light');
  const darkTheme = createTheme({
    palette: {
      mode: changeTheme as 'light' | 'dark'
    }
  })
  const Feedback = (): JSX.Element => {
    return <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <getTheme.Provider value={{ setChangeTheme, changeTheme }}>
        <Suspense fallback={Feedback()}>
          <RequireAuth>
            <div>
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
                <Route path='TestFeature' element={<TestFeature />} />
                <Route path='*' element={<> not Found</>} />
              </Routes>
            </div>
          </RequireAuth>
        </Suspense>
      </getTheme.Provider>
    </ThemeProvider>
  );
}

export default App;
