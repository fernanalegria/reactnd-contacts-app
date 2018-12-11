import React, { Component } from "react";
import PropTypes from "prop-types";

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

RemoveButton.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onDeleteContact: PropTypes.func.isRequired
};

export default RemoveButton;
