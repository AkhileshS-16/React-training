/* eslint-disable react/prop-types */
const EmployeeText = (props) => {
  const onChange = (e) => {
    let x = [e.target.id, e.target.value];
    props.onchange(x);
  };
  return (
    <div className="det">
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type="text"
        className="CEinput"
        id={props.id}
        placeholder={props.text}
        onChange={onChange}
      />
    </div>
  );
};
export default EmployeeText;
