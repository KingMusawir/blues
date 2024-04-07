import React from 'react';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurProperties from './pages/OurProperties/OurProperties';
import HouseDetailsView from './components/houseView/HouseViewDetails';
import ContactUs from './components/contactUs/ContactUs';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/properties' element={<OurProperties />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/viewhouse' element={<HouseDetailsView />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
