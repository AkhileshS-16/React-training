import "../CreateEmployee.css";
import Select from "../components/Select";
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
    choose: ["UI", "UX", "Devloper", "HR"],
  },
  {
    id: "status",
    Component: Select,
    choose: ["Active", "Inactive"],
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

  return (
    <main className="CEmain">
      <section className="CEsection">
        <h1 className="dethead">Create Employee</h1>
      </section>
      <EmployeeForm fields={fields} />
    </main>
  );
};
export default CreateEmployee;
