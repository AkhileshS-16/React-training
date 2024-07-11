/* eslint-disable react/prop-types */
const Select = ({ id, choose, onselect }) => {
  const onSelect = (e) => {
    let x = [e.target.id, e.target.value];
    onselect(x);
  };

  return (
    <div className="det">
      <label htmlFor={id}>{id}</label>
      <select id={id}>
        {choose.map((option) => {
          return (
            <option key={option} onChange={onSelect}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
