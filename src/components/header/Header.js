import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";
import Logo from "../../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Container className="logo">
          <img src={Logo} alt="regalLogo" />
        </Container>
        <div className="menu"></div>
      </div>
    );
  }
}

export default Header;
