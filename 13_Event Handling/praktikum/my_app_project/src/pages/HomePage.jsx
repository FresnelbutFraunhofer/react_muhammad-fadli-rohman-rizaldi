import React, {useState} from "react";
import Header from "../component/Header";
import FormPage from "../component/FormPage";
// import Button from "./component/Button";

function HomePage() {
  const [konten, setKonten] = useState({
    title: {
      id: "Create Product"
    },
    description: {
      id: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
  });

  const handleContentChange = (article) => {
    setKonten(article);
  };

  return (
    <div>
      <Header content={konten} onChange={handleContentChange} />
      <FormPage />
    </div>
  );
}

export default HomePage;
