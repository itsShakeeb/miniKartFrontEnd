import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nav } from "../nav";
const TheSidebar = () => {
  return (
    <Container fluid className="sidebar-component">
      {nav.map((item, index) => {
        return (
          <div className="d-flex mb-2" key={index}>
            <Link to={item.path} className="sidebar-nav-link">
              {item.title}
            </Link>
          </div>
        );
      })}

      <div className="close-sidebar">Close</div>
    </Container>
  );
};

export default TheSidebar;
