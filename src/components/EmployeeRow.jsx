/* eslint-disable react/prop-types */
import Status from "./status";
import del from "../assets/delete.svg";
import edit from "../assets/edit.png";
import { Link } from "react-router-dom";

const EmployeeRow = ({
  ename,
  eid,
  jd,
  role,
  status,
  email,
  onclick,
  handleDelete,
}) => {
  return (
    <section className="CEsection tabbody" onClick={onclick}>
      <div>{ename}</div>
      <div>{eid}</div>
      <div>{email}</div>
      <div>{jd}</div>
      <div>{role}</div>
      <Status status={status} />
      <div className="empaction" onClick={(e) => e.stopPropagation()}>
        <img className="actionitems" src={del} alt="" onClick={handleDelete} />
        <Link to={`/employees/edit/${eid}`}>
          <img className="actionitems" src={edit} alt="" />
        </Link>
      </div>
    </section>
  );
};
export default EmployeeRow;
