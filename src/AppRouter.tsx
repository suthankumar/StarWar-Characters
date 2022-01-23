import React, {Fragment} from "react";
import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';
import Favourite from './pages/Favourite';
import Footer from "./components/Footer";

export default function AppRouter() {
    return (
      <div className="bg-gray-700">
        <Router>
          <Header/>
          <Routes>
          {/* <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Home/>}/>
          </Route> */}
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<ViewDetails/>}/>
            <Route path='/fav' element={<Favourite/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
    );
  }


//   import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }
  