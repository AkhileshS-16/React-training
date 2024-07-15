const actionTypes = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
  EDIT_EMPLOYEE: "EDIT_EMPLOYEE",
  FILTER: "FILTER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case actionTypes.DELETE_EMPLOYEE: {
      const employees = [...state.employees];
      return {
        ...state,
        employees: employees.filter((e) => e.eid !== action.payload),
      };
    }
    case actionTypes.EDIT_EMPLOYEE: {
      const employees = [...state.employees];
      return {
        ...state,
        employees: [
          ...employees.filter((e) => e.eid !== action.payload.eid),
          action.payload.data,
        ],
      };
    }
    case actionTypes.FILTER: {
      return {
        ...state,
        filterBy: action.payload,
      };
    }
  }
};
export { reducer as default, actionTypes };
