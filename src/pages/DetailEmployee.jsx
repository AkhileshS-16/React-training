import RoundButton from "../components/RoundButton";
import edit from "../assets/edit.png";
import Status from "../components/status";
import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../api/employeeApi";
import DetailRow from "../components/DetailRow";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "jd",
    text: "Joining Date",
  },
  {
    id: "Role",
    text: "Role",
    choose: ["UI", "UX", "Devloper", "HR"],
  },
  {
    id: "status",
    Component: Status,
    choose: ["Active", "Inactive"],
  },
];

const DetailEmployee = () => {
  const { id } = useParams();
  console.log(id);
  // const { state } = useOutletContext();
  // let employees = state.employees;
  const { data = {} } = useGetEmployeeByIdQuery(id);
  // employee = employees.find((e) => e.eid == id);
  // useEffect(() => {
  //   if (!employee) navigate("/employees");
  // }, []);
  console.log(data);

  const employee = {
    ...data,
    jd: new Date(data.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  };

  return (
    <main className="CEmain">
      <section className="CEsection function">
        <h1 className="Eh1">Employee Details</h1>
        <RoundButton icon={edit} text="Edit" link={`/employees/edit/${id}`} />
      </section>
      <section className="CEsection detailsection">
        <div className="detailcontainer">
          {fields.map((field) => {
            return field.Component ? (
              <div className="detailspace" key="status">
                <label className="head">Status</label>
                <Status status={employee.status} />
              </div>
            ) : (
              <DetailRow
                id={field.id}
                text={field.text}
                value={employee[field.id]}
                key={field.id}
              />
            );
          })}
        </div>
        <hr className="detailhr" />
        <div className="detail2">
          <div className="detailspace">
            <label htmlFor="add" className="head">
              Address
            </label>
            <div id="add">
              {employee.address?.line1},
              <br />
              {employee.address?.pincode}
            </div>
          </div>
          <div className="detailspace">
            <label htmlFor="eid" className="head">
              Employee ID
            </label>
            <div id="eid">{id}</div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default DetailEmployee;
