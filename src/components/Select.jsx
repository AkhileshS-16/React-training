/* eslint-disable react/prop-types */
const Select = ({ id, choose, onselect, defaultValue }) => {
  const onSelect = (e) => {
    let x = [e.target.id, e.target.value];
    onselect(x);
  };

  return (
    <div className="det">
      <label className="detaillabel" htmlFor={id}>
        {id}
      </label>
      <select id={id} onChange={onSelect}>
        {choose.map((option) => {
          return (
            <option
              key={option}
              selected={option === defaultValue}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
