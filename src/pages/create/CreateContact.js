import React from "react";
import { Link } from "react-router-dom";
import CreateContactForm from "./CreateContactForm";

const CreateContact = props => (
  <div>
    <Link className="close-create-contact" to="/">
      Close
    </Link>
    <CreateContactForm onCreateContact={props.onCreateContact}/>
  </div>
);

export default CreateContact;
