import React, { Component } from "react";
import ContactCard from "./contact/ContactCard";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ol className="contact-list">
        {contacts.map(contact => (
          <ContactCard
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ol>
    );
  }
}

export default ListContacts;
