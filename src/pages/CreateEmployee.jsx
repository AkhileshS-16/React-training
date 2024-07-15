import "../CreateEmployee.css";
import Select from "../components/Select";
import EmployeeForm from "../components/EmployeeForm";
import { useOutletContext } from "react-router-dom";

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
    choose: ["UI", "UX", "Devloper", "HR"],
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

const CreateEmployee = () => {
  // const [data, setData] = useState({
  //   ename: "",
  //   eid: "",
  //   jd: "",
  //   Role: "",
  //   status: "",
  //   exp: "",
  //   add: "",
  // });

  // const handleData = (newData) => {
  //   setData((data) => ({ ...data, ...newData }));
  //   console.log(data);
  // };
  const { state, dispatch } = useOutletContext();

  return (
    <main className="CEmain">
      <section className="CEsection">
        <h1 className="dethead">Create Employee</h1>
      </section>
      <EmployeeForm
        fields={fields}
        state={state}
        dispatch={dispatch}
        text="Create"
      />
    </main>
  );
};
export default CreateEmployee;
