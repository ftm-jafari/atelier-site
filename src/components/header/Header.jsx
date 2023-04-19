import React from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Link,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
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
        <Collapse isOpen={isOpen} navbar>
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

            <NavItem>
              <NavLink href="#" className="">
                <img
                  src="assets/icons/heart2.svg"
                  alt=""
                  // className="img-cart"
                  style={{ width: "28px", height: "28px" }}
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <img
                  src="assets/icons/login_black_24dp.svg"
                  alt=""
                  // className="img-cart"
                  style={{ width: "28px", height: "28px"}}
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* </div> */}


      </Navbar>
    </div>
  );
}

export default Header;
