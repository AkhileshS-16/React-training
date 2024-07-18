import { createAction, createReducer } from "@reduxjs/toolkit";
import employees from "../Data/Employees";

const addEmployee = createAction("ADD_EMPLOYEE");
const editEmployee = createAction("EDIT_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");
const filter = createAction("FILTER");

const employeeReducer = createReducer(
  { employees: employees, filterBy: "None" },
  (builder) => {
    builder.addCase(addEmployee, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(editEmployee, (state, action) => {
      state.employees = state.employees.filter(
        (e) => e.eid !== action.payload.eid
      );
      state.employees.push(action.payload.data);
    });
    builder.addCase(deleteEmployee, (state, action) => {
      state.employees = state.employees.filter((e) => e.eid !== action.payload);
    });
    builder.addCase(filter, (state, action) => {
      state.filterBy = action.payload;
    });
  }
);

export {
  employeeReducer as default,
  addEmployee,
  editEmployee,
  filter,
  deleteEmployee,
};
