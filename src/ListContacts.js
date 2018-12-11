import React, { Component } from "react";
import ContactCard from "./ContactCard";

class ListContacts extends Component {
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
