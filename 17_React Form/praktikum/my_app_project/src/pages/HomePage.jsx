import React from "react";
import Header from "../component/Header";
import NavigationBar from "../component/NavigationBar";
import FormPage from "../component/FormPage";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();

  return (
    <div>
      <NavigationBar />
      <Header />
      <button
        onClick={() => {
          nav("/landing/");
        }}
      >
        To Landing Page
      </button>
      <FormPage />
    </div>
  );
}

export default HomePage;
