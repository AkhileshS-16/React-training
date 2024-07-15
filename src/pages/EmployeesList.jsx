/* eslint-disable react/prop-types */
import "../Employees.css";
import RoundButton from "../components/RoundButton";
import plus from "../assets/plus.png";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import DeletePopUp from "../components/DeletePopUp";
import EmployeeRow from "../components/EmployeeRow";
import { actionTypes } from "../Reducer";

const EmployeesList = () => {
  const navigate = useNavigate();
  const [deleteId, toggleDelete] = useState("");
  const { state, dispatch } = useOutletContext();

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
    dispatch({
      type: actionTypes.DELETE_EMPLOYEE,
      payload: deleteId,
    });
    toggleDelete("");
  };

  const filterChange = (e) => {
    console.log(e.target.value);
    dispatch({
      type: actionTypes.FILTER,
      payload: e.target.value,
    });
  };

  console.log(state);

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
              defaultValue={state.filterBy}
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
        <div className="head">Joining Date</div>
        <div className="head">Role</div>
        <div className="head">Status</div>
        <div className="head">Experience</div>
        <div className="head">Action</div>
      </section>
      {state.employees.map((e) => {
        return state.filterBy == "None" ? (
          <EmployeeRow
            ename={e.ename}
            eid={e.eid}
            jd={e.jd}
            role={e.Role}
            status={e.status}
            exp={e.exp}
            key={e.eid}
            onclick={() => handleOnClick(e.eid)}
            handleDelete={() => handleDelete(e.eid)}
          />
        ) : (
          e.status == state.filterBy && (
            <EmployeeRow
              ename={e.ename}
              eid={e.eid}
              jd={e.jd}
              role={e.Role}
              status={e.status}
              exp={e.exp}
              key={e.eid}
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
