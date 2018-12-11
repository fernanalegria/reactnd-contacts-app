import React, { Component } from "react";

class RemoveButton extends Component {
  render() {
    const { id, onDeleteContact } = this.props;
    return (
      <button className="contact-remove" onClick={() => onDeleteContact(id)}>
        Remove
      </button>
    );
  }
}

export default RemoveButton;
