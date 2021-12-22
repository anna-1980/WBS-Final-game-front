import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";

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
        <div className="footerMainDiv"><Footer /></div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
