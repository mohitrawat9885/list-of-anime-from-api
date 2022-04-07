import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Detail from "./Screens/Detail/Detail";
export default function App() {
  // const [pageLoading, setPageLoading] = useState(false);
  function SetPageLoading() {
    document
      .getElementById("page-loading")
      .classList.toggle("page-loading-active");
    document.body.classList.toggle("stop-scrolling");
  }
  return (
    <>
      <div id="page-loading" className="page-loading">
        <ReactLoading type="cylon" color="red" height={80} width={80} />
      </div>
      {/* <button
        style={{
          zIndex: 10000,
          position: "fixed",
        }}
        onClick={() => SetPageLoading()}
      >
        Om
      </button> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home SetPageLoading={SetPageLoading} />} />
          <Route
            path="/detail/:id"
            element={<Detail SetPageLoading={SetPageLoading} />}
          />
        </Routes>
      </Router>
    </>
  );
}
