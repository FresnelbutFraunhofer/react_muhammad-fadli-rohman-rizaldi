import React from "react";
import Button from "./Button";

function Header({ content, onChange }) {
  function handleChangeHeader() {
    const article = {
      title: {
        id: "Buat Produk",
        en: "Create Account",
      },
      description: {
        id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
        en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      },
    };
    onChange(article);
  }

  return (
    <div>
      <div className="container">
        <div className="brand-product text-center">
          <img
            src="/bootstrap-logo-shadow.png"
            alt="Bootstrap"
            width="80"
            height="70"
          />
        </div>
        <div className="row text-center">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
          <div className="head col-xl-10 col-lg-10 col-md-10 col-sm-10">
            <h1>{content.title.id}</h1>
            <p>{content.description.id}</p>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
        </div>
      </div>
      <Button onClick={handleChangeHeader} />
    </div>
  );
}

export default Header;
