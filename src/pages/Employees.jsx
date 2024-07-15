import "../Employees.css";
import EmployeeColumn from "../components/EmployeeColumn";
import RoundButton from "../components/RoundButton";
import plus from "../assets/plus.png";
import { useRef } from "react";

const employees = [
  {
    ename: "Alice",
    eid: "1",
    jd: "05-04-2023",
    Role: "HR",
    status: "Active",
    exp: "2 Years",
    add: "Kochi",
  },
  {
    ename: "Bob",
    eid: "3",
    jd: "05-04-2024",
    Role: "UX",
    status: "Probation",
    exp: "1 Year",
    add: "KOllam",
  },
  {
    ename: "Charlie",
    eid: "2",
    jd: "05-04-2020",
    Role: "UI",
    status: "Active",
    exp: "4 Years",
    add: "Thrissur",
  },
  {
    ename: "Dawn",
    eid: "5",
    jd: "05-04-2019",
    Role: "Developer",
    status: "Inactive",
    exp: "3 Years",
    add: "Kochi",
  },
  {
    ename: "Eve",
    eid: "4",
    jd: "05-04-2021",
    Role: "HR",
    status: "Active",
    exp: "3 Years",
    add: "Trivandrum",
  },
];

const Employees = () => {
  const id = useRef();

  return (
    <main className="CEmain">
      <section className="CEsection function">
        <h1 className="Eh1">Employee List</h1>
        <div className="action">
          <div className="filter">
            <label htmlFor="filter">Filter By</label>
            <select className="selectfilter" id="filter">
              <option value="Age">Age</option>
              <option value="Status">Status</option>
            </select>
          </div>
          <RoundButton icon={plus} text="Create Employee" link="create" />
        </div>
      </section>
      <section className="tabhead CEsection">
        <div className="head">Employee Name</div>
        <div className="head">Employee ID</div>
        <div className="head">Joining Date</div>
        <div className="head">Role</div>
        <div className="head">Status</div>
        <div className="head">Experience</div>
        <div className="head">Action</div>
      </section>

      {employees.map((e) => {
        return (
          <EmployeeColumn
            ename={e.ename}
            eid={e.eid}
            jd={e.jd}
            role={e.Role}
            status={e.status}
            exp={e.exp}
            key={e.eid}
            onclick={(id.current = e.eid)}
            id={id.current}
          />
        );
      })}
    </main>
  );
};
export default Employees;
