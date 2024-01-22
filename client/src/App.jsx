import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import About from "./pages/about";


export default function Main() {
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route  path="/about" element={<About/>}/>
  <Route path="/sign-in" element={<Signin/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</BrowserRouter>
}
