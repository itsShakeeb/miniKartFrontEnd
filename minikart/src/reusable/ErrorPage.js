import React from "react";
import Image from "../assets/somethingWentWrong.png";
const ErrorPage = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items">
      <img src={Image} alt="Something went wrong" height="500" />
    </div>
  );
};

export default ErrorPage;
