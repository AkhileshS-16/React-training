/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Select from "../components/Select";
import { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "eid",
    text: "Employee ID",
  },
  {
    id: "jd",
    text: "Joining Date",
  },
  {
    id: "Role",
    Component: Select,
    choose: ["UI", "UX", "Developer", "HR"],
  },
  {
    id: "status",
    Component: Select,
    choose: ["Active", "Probation", "Inactive"],
  },
  {
    id: "exp",
    text: "Experience",
  },
  {
    id: "add",
    text: "Address",
  },
];

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useOutletContext();
  let employees = state.employees;
  let employee = employees.find((e) => e.eid == id);

  useEffect(() => {
    if (!employee) navigate("/employees");
  }, []);

  return (
    <main className="CEmain">
      <section className="CEsection">
        <h1 className="dethead">Edit Employee</h1>
      </section>
      <EmployeeForm
        fields={fields}
        editid={id}
        iddisable={true}
        employee={employee}
        state={state}
        dispatch={dispatch}
        text="Edit"
      />
    </main>
  );
};
export default EditEmployee;
