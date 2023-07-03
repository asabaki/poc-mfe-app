import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import AuthPage from "./AuthPage";
import Card from "./Card";

function App({ prefix = '' }) {
  return (
    <div className="App">
      <BrowserRouter basename="/">
      <nav>
        <Link to={`${prefix}/auth/test`} >To Test </Link>
      </nav>
        <Routes>
          <Route path={`${prefix}/auth`} element={<AuthPage />}>
            <Route path="test/" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
