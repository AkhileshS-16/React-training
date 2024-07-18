/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "./Button";
import EmployeeText from "./EmployeeText";
import { useNavigate } from "react-router-dom";
import {
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
} from "../api/employeeApi";

/* eslint-disable react/prop-types */
const EmployeeForm = ({ fields, editid, iddisable, employee, text }) => {
  const navigate = useNavigate();
  const [addEmployee, adddata] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const [data, setData] = useState({});

  useEffect(() => {
    if (employee) {
      const list = { ...employee, ...employee?.address };
      setData(list);
    }
  }, [employee]);

  const handleData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };

  const handleCreate = () => {
    // let eid = uuidv4();
    // eid = eid.slice(0, 4);
    // console.log("Create", data);
    // dispatch(addEmployee({ ...data, eid }));

    const { line1, pincode, ...newData } = {
      ...data,
      address: { line1: data.line1, pincode: data.pincode },
    };
    addEmployee(newData);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (editid) {
      console.log("edit1");
      handleEdit();
    } else handleCreate();
  };

  useEffect(() => {
    // if (adddata.isSuccess) navigate("/employees");
  }, [adddata]);

  const handleEdit = () => {
    console.log("edit2", data);
    updateEmployee({ ...data, eid: data.id });
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
                  data?.id &&
                  ((field.id == "status" && data.status) ||
                    (field.id == "Role" && data.Role))
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
            handleSubmit={handleSubmitClick}
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
