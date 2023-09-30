import React from "react";
import { useLocation} from "react-router-dom";

function Display() {
  const location = useLocation();
  const formTable = location.state;
  console.log(location)

  const sentence = `ID: ${formTable.id}, Product Name: ${formTable.pname}, Product Category: ${formTable.pcategory}, Product Freshness: ${formTable.pfreshness}, Price: ${formTable.price}`;

  return (
    <div>
      <h1 className="text-center">Display Page</h1>
      <p className="text-center">{sentence}</p>
    </div>
  );
}

export default Display;
