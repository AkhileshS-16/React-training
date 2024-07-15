import { useState } from "react";
import Button from "./Button";
import EmployeeText from "./EmployeeText";
import { actionTypes } from "../Reducer";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
const EmployeeForm = ({
  fields,
  editid,
  iddisable,
  employee,
  dispatch,
  text,
}) => {
  const navigate = useNavigate();
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
    console.log(newData);
    setData((data) => ({ ...data, ...newData }));
  };

  const handleCreate = () => {
    let eid = uuidv4();
    eid = eid.slice(0, 4);
    console.log("Create", data);
    dispatch({
      type: actionTypes.ADD_EMPLOYEE,
      payload: { ...data, eid },
    });
    navigate("/employees");
  };

  const handleEdit = () => {
    console.log("edit", data);
    dispatch({
      type: actionTypes.EDIT_EMPLOYEE,
      payload: { data, eid: data.eid },
    });
    navigate("/employees");
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
                defaultValue={
                  (field.id == "status" && data.status) ||
                  (field.id == "Role" && data.Role)
                }
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
          <Button
            text={text}
            className="CEbutton"
            handleSubmit={
              (window.location.href.includes("create") && handleCreate) ||
              (window.location.href.includes("edit") && handleEdit)
            }
          />
          <Button
            text="Cancel"
            className="CEbutton cancel"
            handleSubmit={(e) => {
              e.preventDefault();
              navigate("/employees");
            }}
          />
        </div>
      </form>
    </section>
  );
};
export default EmployeeForm;
