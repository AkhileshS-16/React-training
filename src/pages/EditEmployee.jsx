/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Select from "../components/Select";
import EmployeeForm from "../components/EmployeeForm";
import { useGetEmployeeByIdQuery } from "../api/employeeApi";

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
    id: "id",
    text: "Employee ID",
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
    id: "line1",
    text: "Line1",
  },
  {
    id: "pincode",
    text: "Pincode",
  },
];

const EditEmployee = () => {
  const { id } = useParams();
  // const { state, dispatch } = useOutletContext();
  // let employees = state.employees;
  // let employee = employees.find((e) => e.eid == id);
  const { data } = useGetEmployeeByIdQuery(id);

  // useEffect(() => {
  //   // if (!data) navigate("/employees");
  //   else {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    <main className="CEmain">
      <section className="CEsection">
        <h1 className="dethead">Edit Employee</h1>
      </section>
      <EmployeeForm
        fields={fields}
        editid={id}
        iddisable={true}
        employee={data}
        text="Edit"
      />
    </main>
  );
};
export default EditEmployee;
