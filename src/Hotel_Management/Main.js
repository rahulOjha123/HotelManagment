import React from "react";
import Home from "./HomePage/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hotel from "./PostHotel/Hotel";


function Main() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact  path="/"element={<Home></Home>}></Route>
        <Route exact path="/hotel"element={<Hotel></Hotel>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
