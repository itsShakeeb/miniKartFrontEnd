import React from "react";
import TheContent from "./TheContent";
import TheHeader from "./TheHeader";
import TheSidebar from "./TheSidebar";

const TheLayout = () => {
  return (
    <div className="layout ">
      <div className="sidebar ">
        <TheSidebar />
      </div>
      <div className="content ">
        <TheHeader />
        <TheContent />
      </div>
    </div>
  );
};

export default TheLayout;
