import React, { useContext } from "react";
import GuestContext from "../context/guestContext/guestContext";

const Guest = ({ guest }) => {
  const { removeGuest, updateGuest, editGuest } = useContext(GuestContext);

  const { id, name, phone, dietary, isConfirmed } = guest;
  const removeHandler = () => {
    removeGuest(id);
  };
  const handleConfirmed = () => {
    updateGuest({ ...guest, isConfirmed: !isConfirmed });
  };
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isConfirmed && "confirm"}`}>
            Confirmed
            <i className={`fas fa-check-square ${isConfirmed && "confirm"} `}>
              <input type="checkbox" onChange={handleConfirmed} />
            </i>
          </label>
        </div>
        <div>
          <button>
            <i className="fas fa-user-edit" onClick={() => editGuest(guest)} />
          </button>
          <button onClick={removeHandler}>
            <i className="fas fa-trash-alt remove" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span
          className={
            "badge " +
            (dietary === "Vegan"
              ? "green"
              : dietary === "Non-Veg"
              ? "red"
              : "seaGreen")
          }
        >
          {dietary}
        </span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Guest;
