import React from "react";
import Header from "../component/Header";
import FormPage from "../component/FormPage";
import NavigationBar from "../component/NavigationBar";

function HomePage() {
  return (
    <div>
      <NavigationBar/>
      <Header />
      <FormPage />
    </div>
  );
}

export default HomePage;
