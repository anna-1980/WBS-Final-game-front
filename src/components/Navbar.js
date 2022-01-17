import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="NavBarContainer">
        <nav >


          <NavLink className="link home" to="/">
            Home
          </NavLink>
          <NavLink className="link games" to="/Games">
            Games
          </NavLink>
          <NavLink className="link about" to="/About">
            About
          </NavLink>
          <NavLink className="link contact" to="/Contact">
            Contact
          </NavLink>
  {/* Anna git problem , or not? */}
 
        </nav>
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Navbar;
