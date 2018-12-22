import React from "react";

const CreateContactDetails = () => (
  <div className="create-contact-details">
    <input type="text" name="name" placeholder="Name" />
    <input type="text" name="handle" placeholder="Handle" />
    <button>Add Contact</button>
  </div>
);

export default CreateContactDetails;
