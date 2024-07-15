/* eslint-disable react/prop-types */
import "./DeletePopUp.css";
import Button from "./Button";
import cross from "../assets/cross.png";
const DeletePopUp = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-background">
      <div className="delete-container">
        <img src={cross} alt="" onClick={onCancel} className="cross" />
        <div className="delete-title">
          <h1>Are you sure?</h1>
        </div>
        <div className="delete-body">
          Do you really want to delete <br></br>employee?
        </div>
        <div className="delete-footer">
          <Button
            className="CEbutton"
            text="Confirm"
            handleSubmit={onConfirm}
          />
          <Button
            className="CEbutton cancel"
            text="Cancel"
            handleSubmit={onCancel}
          />
        </div>
      </div>
    </div>
  );
};
export default DeletePopUp;
