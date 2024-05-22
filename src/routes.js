import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import NavBar from "./components/header";
import styled from "styled-components";

const Page = styled.div`
  background-color: #FBF0ED;
`
const RoutesElements = () => {
return(
  <Page>
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<div>Perfil</div>} path="/profile"/>
        <Route element={<div>Animais</div>} path="/animals"/>
        <Route element={<div>Adoção</div>} path="/adopt"/>
        <Route element={<div>Configurações</div>} path="/settings"/>
      </Routes>
    </BrowserRouter>
  </Page>
  )
}

export default RoutesElements;