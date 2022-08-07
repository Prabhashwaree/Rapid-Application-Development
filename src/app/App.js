import * as React from "react";
import Users from "../pages/Dashborad/Users/";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Dashborad/Products";
import Carts from "../pages/Dashborad/Carts";
import Home from "../pages/Dashborad/Home";
import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import DashBoard from '../pages/Dashborad'





function App() {
  return (
    <>

    <Routes>
        <Route exact index element={<Login />} />
        <Route exact path="/CreateUser" element={<CreateUser />} />

        <Route exact path="/DashBoard" element={<DashBoard />}>
        <Route exact path="Home" element={<Home />} />
        <Route exact path="Products" element={<Products />} />
        <Route exact path="Users" element={<Users />} />
        <Route exact path="Carts" element={<Carts />} />

      </Route>
    </Routes>


    
          
    </>
  );
}

export default App;
