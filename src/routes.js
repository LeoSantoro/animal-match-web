import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import NavBar from "./components/header";
import styled from "styled-components";

const Page = styled.div`
  background-color: #FBF0ED;
  padding-bottom: 36px;
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
        <Route element={<div>Confirmação de Adoção</div>} path="/adopt-confirmation"/>
        <Route element={<div>Configurações</div>} path="/settings"/>
        
      </Routes>
   
    </BrowserRouter>
    </Page>
  )
}

export default RoutesElements;