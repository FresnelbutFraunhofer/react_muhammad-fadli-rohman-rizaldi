import React from "react";
import Navigation from "./component/navbar/Navigation";
import Welcome from "./component/welcome/Welcome";
import Package from "./component/package/Package";
import Contact from "./component/contact/Contact";
import AboutUs from "./component/about/AboutUs";

function OnePage() {
  return (
    <div>
      <>
        <Navigation />
        <Welcome />
        <Package />
        <AboutUs />
        <Contact />
      </>
    </div>
  );
}

export default OnePage;
