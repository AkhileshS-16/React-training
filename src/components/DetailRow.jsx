/* eslint-disable react/prop-types */
const DetailRow = ({ id, text, value }) => {
  return (
    <div className="detailspace">
      <label htmlFor={id} className="head">
        {text}
      </label>
      <div id={id}>{value}</div>
    </div>
  );
};
export default DetailRow;
