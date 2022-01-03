import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="NavBarContainer">
        <nav>


          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/Game">
            Game
          </NavLink>
          <NavLink className="link" to="/About">
            About
          </NavLink>
          <NavLink className="link" to="/Contact">
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
