import { Link } from "react-router-dom";

const RoundButton = ({ icon, text, link }) => {
  return (
    <Link to={link} className="navlink">
      <div className="creatediv">
        <img src={icon} alt="" className="addsymbol" />
        <div className="create">{text}</div>
      </div>
    </Link>
  );
};
export default RoundButton;
