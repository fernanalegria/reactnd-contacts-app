import React, { Component } from "react";
import ContactDetails from "./ContactDetails";
import ContactAvatar from "./ContactAvatar";
import RemoveButton from "./RemoveButton";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    const { contact, onDeleteContact } = this.props;
    return (
      <li className="contact-list-item">
        <ContactAvatar url={contact.avatarURL} />
        <ContactDetails name={contact.name} handle={contact.handle} />
        <RemoveButton id={contact.id} onDeleteContact={onDeleteContact} />
      </li>
    );
  }
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatarURL: PropTypes.string
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactCard;
