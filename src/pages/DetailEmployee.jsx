import RoundButton from "../components/RoundButton";
import edit from "../assets/edit.png";
import Status from "../components/status";
import DetailColumn from "../components/DetailColumn";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "jd",
    text: "Joining Date",
  },
  {
    id: "exp",
    text: "Experience",
  },
  {
    id: "Role",
    text: "Role",
    choose: ["UI", "UX", "Devloper", "HR"],
  },
  {
    id: "status",
    Component: Status,
    choose: ["Active", "Inactive"],
  },
];

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

const DetailEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let employee = false;
  for (let i of employees) {
    employee = i.eid == id ? i : false;
    break;
  }
  useEffect(() => {
    if (!employee) navigate("/");
  }, []);

  return (
    <main className="CEmain">
      <section className="CEsection function">
        <h1 className="Eh1">Employee Details</h1>
        <RoundButton icon={edit} text="Edit" link={`/employees/edit/${id}`} />
      </section>
      <section className="CEsection detailsection">
        <div className="detailcontainer">
          {fields.map((field) => {
            return field.Component ? (
              <div className="detailspace">
                <label className="head">Status</label>
                <Status status={employee.status} />
              </div>
            ) : (
              <DetailColumn
                id={field.id}
                text={field.text}
                value={employee[field.id]}
                key={field.id}
              />
            );
          })}
        </div>
        <hr className="detailhr" />
        <div className="detail2">
          <div className="detailspace">
            <label htmlFor="add" className="head">
              Address
            </label>
            <div id="add">{employee.add}</div>
          </div>
          <div className="detailspace">
            <label htmlFor="eid" className="head">
              Employee ID
            </label>
            <div id="eid">{id}</div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default DetailEmployee;
