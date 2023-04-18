import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Mission from './components/Mission';
import WrongPath from './components/WrongPath';
import History from './components/History';
import Company from './components/Company';
import Team from './components/Team';
import Members from './components/Members';
import MemberDetail from './components/MemberDetail';
import React from 'react';

function App() {
  const LazyAboutUs = React.lazy(() => import('./components/AboutUs'))
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={
          <React.Suspense>
            <LazyAboutUs />
          </React.Suspense>
        } />
        <Route path='/mission' element={<Mission />} />
        <Route path='/history' element={<History />}>
          <Route path='company' element={<Company />} />
          <Route path='team' element={<Team />} />
        </Route>
        <Route path='/members' element={<Members />} />
        <Route path='/members/:memberId' element={<MemberDetail />} />
        <Route path='*' element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
