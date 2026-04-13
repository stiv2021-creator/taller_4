import React from "react";
import Header from './features/layout/components/Header'
import Footer from './features/layout/components/Footer'
import Content from './features/layout/components/Content'
import Article from "./features/Views/components/Article";
import Offers from './features/Views/components/Offers'
import Myaccount from "./features/auth/components/Myaccount";
import Mybuys from "./features/auth/components/Mybuys";
import ApiRyc from "./features/api/components/ApiRyC";
import Register from "./features/auth/components/Register";

// 1. Cambiamos BrowserRouter por HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 2. Envolvemos todo en HashRouter
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path="/Article" element={<Article />}></Route>
          <Route path='/Offers' element={<Offers />}></Route>
          <Route path='/ApiRyc' element={<ApiRyc />}></Route>
          <Route path='/Myaccount' element={<Myaccount />}></Route>
          <Route path='/Mybuys' element={<Mybuys />}></Route>
          <Route path='/Login' element={<Myaccount />}></Route>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;