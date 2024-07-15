import { useNavigate, useParams } from "react-router-dom";
import Select from "../components/Select";
import { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";

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

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let employee = false;
  useEffect(() => {
    for (let i of employees) employee = i.eid == id ? i : false;
    console.log(employee);
    if (!employee) navigate("/");
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
      />
    </main>
  );
};
export default EditEmployee;
