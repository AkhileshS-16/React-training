// eslint-disable-next-line react/prop-types
const Button = ({ text, className, handleLogin }) => {
  return (
    <button type="submit" className={className} onClick={handleLogin}>
      {text}
    </button>
  );
};
export default Button;
