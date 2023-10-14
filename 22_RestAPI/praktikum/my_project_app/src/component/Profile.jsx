import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { id, email, firstName, lastName, avatar } = location.data;
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className="header">
        <h1>Info Pengunjung</h1>
        <p>
          Email Pengunjung {email} dia bernama {firstName} {lastName}
          dengan avatar <img src={avatar} alt=""/>
        </p>
        <p>Id user : {id}</p>
        <button onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
}

export default Profile;
