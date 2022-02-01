import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { nav } from "../nav";
const TheSidebar = () => {
  return (
    <Container fluid className="sidebar-component">
      {nav.map((item, index) => {
        return (
          <div className="d-flex mb-2" key={index}>
            <NavLink
              to={item.path}
              className="sidebar-nav-link"
              activeClassName="sidebar-nav-link-active"
            >
              {item.title}
            </NavLink>
          </div>
        );
      })}

      <div className="close-sidebar">Close</div>
    </Container>
  );
};

export default TheSidebar;
