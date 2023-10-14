import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TableForm from "./component/TableForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Display from "./pages/Display";
import NavigationBar from "./component/NavigationBar";
import Update from "./Update";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      alert("Welcome");
    }, 2000);

    return () => clearTimeout(alertTimeOut);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/landing/" element={<LandingPage />} />
            <Route path="/account" element={<TableForm />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/products/:id" element={<Display />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
