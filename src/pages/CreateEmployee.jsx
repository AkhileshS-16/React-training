import "../CreateEmployee.css";
import Select from "../components/Select";
import EmployeeForm from "../components/EmployeeForm";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "password",
    text: "Password",
  },
  {
    id: "line1",
    text: "Line1",
  },
  {
    id: "pincode",
    text: "Pincode",
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
];

const CreateEmployee = () => {
  return (
    <main className="CEmain">
      <section className="CEsection">
        <h1 className="dethead">Create Employee</h1>
      </section>
      <EmployeeForm fields={fields} text="Create" />
    </main>
  );
};
export default CreateEmployee;
