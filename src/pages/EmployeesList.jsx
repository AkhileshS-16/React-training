/* eslint-disable react/prop-types */
import "../Employees.css";
import RoundButton from "../components/RoundButton";
import plus from "../assets/plus.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeletePopUp from "../components/DeletePopUp";
import EmployeeRow from "../components/EmployeeRow";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/employeeReducer";
import {
  useDeleteEmployeeMutation,
  useGetEmployeeListQuery,
} from "../api/employeeApi";

const EmployeesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const employees = useSelector((state) => state.employees.employees);
  const filterBy = useSelector((state) => state.employees.filterBy);
  const [deleteId, toggleDelete] = useState("");
  const [list, setList] = useState([]);
  const { data = [], isSuccess } = useGetEmployeeListQuery();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log("Successs");
      const employees = data.map((employee) => ({
        ...employee,
        jd: new Date(employee.createdAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      }));
      setList(employees);
    }
  }, [data, isSuccess]);

  const handleOnClick = (id) => {
    navigate(`details/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    toggleDelete(id);
  };
  const onCancel = () => {
    toggleDelete("");
  };
  const onConfirm = () => {
    deleteEmployee({ id: deleteId });
    toggleDelete("");
  };

  const filterChange = (e) => {
    console.log(e.target.value);
    dispatch(filter(e.target.value));
  };

  return (
    <main className="CEmain">
      {deleteId.length !== 0 && (
        <DeletePopUp onCancel={onCancel} onConfirm={onConfirm} />
      )}
      <section className="CEsection function">
        <h1 className="Eh1">Employee List</h1>
        <div className="action">
          <div className="filter">
            <label htmlFor="filter">Filter By</label>
            <select
              className="selectfilter"
              id="filter"
              defaultValue={filterBy}
              onChange={filterChange}
            >
              <option value="None">None</option>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <RoundButton icon={plus} text="Create Employee" link="create" />
        </div>
      </section>
      <section className="tabhead CEsection">
        <div className="head">Employee Name</div>
        <div className="head">Employee ID</div>
        <div className="head">E-mail</div>
        <div className="head">Joining Date</div>
        <div className="head">Role</div>
        <div className="head">Status</div>
        <div className="head">Action</div>
      </section>
      {list.map((e) => {
        return filterBy == "None" ? (
          <EmployeeRow
            ename={e.ename}
            eid={e.id}
            jd={e.jd}
            role={e.Role}
            status={e.status}
            email={e.email}
            key={e.id}
            onclick={() => handleOnClick(e.id)}
            handleDelete={() => handleDelete(e.id)}
          />
        ) : (
          e.status == filterBy && (
            <EmployeeRow
              ename={e.ename}
              eid={e.id}
              jd={e.jd}
              role={e.Role}
              status={e.status}
              email={e.email}
              key={e.id}
              onclick={() => handleOnClick(e.eid)}
              handleDelete={() => handleDelete(e.eid)}
            />
          )
        );
      })}
    </main>
  );
};
export default EmployeesList;
