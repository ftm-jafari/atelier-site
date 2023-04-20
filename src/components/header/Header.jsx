import React, {useState} from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="bg-blue" expand="md">
      {/* <div className="flex"> */}
      <NavbarBrand href="/" className="">
        <img
          src="assets/logo2.png"
          alt=""
          style={{ width: "84px", height: "54px", marginLeft: "25px" }}
        />
      </NavbarBrand>
      <NavbarToggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />

      <Collapse isOpen={isOpen} navbar className=" ">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">خانه</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">آتلیه ها</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">درباره ما</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">تماس با ما</NavLink>
          </NavItem>
        </Nav>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">
              <img src="assets/icons/heart2.svg" alt="" className="img-icon" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <img
                src="assets/icons/login_black_24dp.svg"
                alt=""
                className="img-icon"
              />
            </NavLink>
          </NavItem>
        </Nav>
        
      </Collapse>
      {/* </div> */}
    </Navbar>
  );
}

export default Header;
