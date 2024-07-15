import { Link } from "react-router-dom";

const NavLink = ({ icon, text, link, logout }) => {
  return (
    <Link to={link} className="nav navlink" onClick={logout}>
      <div className="icon">
        <img className="ico" src={icon} alt="emp" />
      </div>
      <span className="sidebarspan">{text}</span>
    </Link>
  );
};
export default NavLink;
