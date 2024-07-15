import RoundButton from "../components/RoundButton";
import edit from "../assets/edit.png";
import Status from "../components/status";
import DetailColumn from "../components/DetailColumn";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
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

const DetailEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useOutletContext();
  let employees = state.employees;
  let employee = false;
  employee = employees.find((e) => e.eid == id);
  useEffect(() => {
    if (!employee) navigate("/employees");
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
              <div className="detailspace" key="status">
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
