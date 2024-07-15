/* eslint-disable react/prop-types */
import Status from "./status";
import del from "../assets/delete.svg";
import edit from "../assets/edit.png";
import { Link } from "react-router-dom";

const EmployeeColumn = ({ ename, eid, jd, role, status, exp, onclick, id }) => {
  return (
    <Link to={`details/${id}`} className="navlink">
      <section className="CEsection tabbody" onClick={onclick}>
        <div>{ename}</div>
        <div>{eid}</div>
        <div>{jd}</div>
        <div>{role}</div>
        <Status status={status} />
        <div>{exp}</div>
        <div className="empaction">
          <img src={del} alt="" />
          <Link to={`edit/${eid}`}>
            <img src={edit} alt="" />
          </Link>
        </div>
      </section>
    </Link>
  );
};
export default EmployeeColumn;
