import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import AdoptConfirmation from "./pages/adopt-confirmation";
import NavBar from "./components/header";
import styled from "styled-components";

const Page = styled.div`
  background-color: #FBF0ED;
  overflow: scroll;
  height: 100vh;
`
const RoutesElements = () => {
return(
  <Page>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Home/>} path="/animals"/>
        <Route element={<div>Perfil</div>} path="/profile"/>
        <Route element={<AdoptConfirmation />} path="/adopt-confirmation"/>
        <Route element={<div>Configurações</div>} path="/settings"/>   
      </Routes>
    </BrowserRouter>
    </Page>
  )
}

export default RoutesElements;