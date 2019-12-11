import React from "react";

const ContactCard = props => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.contact.imageUrl} className="card-img-top" alt="hello" />
      <div className="card-body">
        <h5 className="card-title">{props.contact.name}</h5>
        <p className="card-text">Phone: {props.contact.phone}</p>
        <p className="card-text">Email: {props.contact.email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
