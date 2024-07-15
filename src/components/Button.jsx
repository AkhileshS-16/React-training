// eslint-disable-next-line react/prop-types
const Button = ({ text, className, handleSubmit }) => {
  return (
    <button type="submit" className={className} onClick={handleSubmit}>
      {text}
    </button>
  );
};
export default Button;
