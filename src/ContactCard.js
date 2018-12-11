import React, { Component } from "react";
import ContactDetails from './ContactDetails';
import ContactAvatar from './ContactAvatar';
import RemoveButton from './RemoveButton';

class ContactCard extends Component {
  render() {
    const {contact, onDeleteContact} = this.props;
    return (
      <li className="contact-list-item">
        <ContactAvatar url={contact.avatarURL} />
        <ContactDetails name={contact.name} handle={contact.handle} />
        <RemoveButton id={contact.id} onDeleteContact={onDeleteContact}/>
      </li>
    );
  }
}

export default ContactCard;
