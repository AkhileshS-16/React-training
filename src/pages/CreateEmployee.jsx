import { useEffect, useState } from "react";
import "../CreateEmployee.css";
import Button from "../components/Button";
import EmployeeText from "../components/EmployeeText";
import Select from "../components/Select";

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
  const [data, setData] = useState({
    ename: "",
    eid: "",
    jd: "",
    Role: "",
    status: "",
    exp: "",
    add: "",
  });

  const handleData = ([id, value]) => {
    console.log(id);
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
    console.log(data);
  };

  return (
    <main className="createEmployeeMain">
      <section className="CEsection">
        <h1>Create Employee</h1>
      </section>

      <section className="CEsection">
        <form className="CEform">
          <div className="CEdetails">
            {fields.map((field) => {
              return field.Component ? (
                <field.Component
                  id={field.id}
                  key={field.id}
                  choose={field.choose}
                  onselect={handleData}
                />
              ) : (
                <EmployeeText
                  id={field.id}
                  text={field.text}
                  key={field.id}
                  onchange={handleData}
                />
              );
            })}
          </div>
          <div>
            <Button text="Create" className="CEbutton" />
            <Button text="Cancel" className="CEbutton cancel" />
          </div>
        </form>
      </section>
    </main>
  );
};
export default CreateEmployee;
