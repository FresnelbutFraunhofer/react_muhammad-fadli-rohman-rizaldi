import React from "react";

function Header() {
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
            <h1>Create Product</h1>
            <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
