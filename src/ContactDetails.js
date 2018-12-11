import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactDetails extends Component {
  render() {
    const { name, handle } = this.props;
    return (
      <div className="contact-details">
        <p>{name}</p>
        <p>{`@${handle}`}</p>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired
};

export default ContactDetails;
