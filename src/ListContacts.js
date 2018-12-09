import React, { Component } from "react";
import ContactCard from './ContactCard';

class ListContacts extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <ContactCard contact={contact} key={contact.id}/>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
