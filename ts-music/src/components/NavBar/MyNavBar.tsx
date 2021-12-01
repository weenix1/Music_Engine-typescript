import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  Col,
  FormControl,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface MyNavBarProps {
  brand: String;
}

const MyNavBar = ({ brand }: MyNavBarProps) => {
  const [selected, setSelected] = useState(false);
  //const navigate = useNavigate();

  return (
    <>
      <div className="myNavbarDiv">
        <Navbar expand="lg" className="myNavbar">
          <Navbar.Brand className="font-weight-bolder">{brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto myNav">
              <Link to="/">
                <Nav.Link
                  href="#link1"
                  onClick={() => setSelected(selected)}
                  className={selected ? "active" : ""}
                >
                  Home
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#link2"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Favorite
              </Nav.Link>
              <Nav.Link
                href="#link3"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Artist
              </Nav.Link>

              <Nav.Link
                href="#link4"
                onClick={() => setSelected(selected)}
                className={selected ? "active" : ""}
              >
                Songs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
export default MyNavBar;
