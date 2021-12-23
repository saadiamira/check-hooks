import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Serachbox";
import ReactStars from "react-rating-stars-component";
import MovieCart from "./MovieCart";
import movie from "./AddMovie";

const Serachbox = ({ hendlechange, text, ratingChanged }) => {
  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#">movie app</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2"> </Nav.Link>
              <NavDropdown title="Type of movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>{" "}
              <input type="text" value={text} onChange={hendlechange} style={{marginLeft:"370px"}}/>
              <ReactStars
                count={MovieCart.rating}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Serachbox;
