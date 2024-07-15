import { useState } from "react";
import Button from "./Button";
import EmployeeText from "./EmployeeText";

/* eslint-disable react/prop-types */
const EmployeeForm = ({ fields, editid, iddisable, employee }) => {
  const [data, setData] = useState(
    employee
      ? employee
      : {
          ename: "",
          eid: "",
          jd: "",
          Role: "UI",
          status: "Active",
          exp: "",
          add: "",
        }
  );

  const handleData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    console.log(id, value);
    setData((data) => ({ ...data, ...newData }));
    console.log(data);
  };

  return (
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
              !(field.id == "eid" && !iddisable) && (
                <EmployeeText
                  id={field.id}
                  text={field.text}
                  key={field.id}
                  onchange={handleData}
                  editid={editid}
                  data={data}
                />
              )
            );
          })}
        </div>
        <div>
          <Button text="Create" className="CEbutton" />
          <Button text="Cancel" className="CEbutton cancel" />
        </div>
      </form>
    </section>
  );
};
export default EmployeeForm;
