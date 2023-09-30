import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TableForm from "./component/TableForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Display from "./pages/Display";

function App() {
  useEffect(() => {
    const alertTimeOut = setTimeout(() => {
      alert("Welcome");
    }, 2000);

    return () => clearTimeout(alertTimeOut);
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing/" element={<LandingPage />} />
            <Route path="/account" element={<TableForm />}>
            </Route>
            <Route path="/:id" element={<Display />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;