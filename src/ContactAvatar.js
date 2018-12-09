import React, { Component } from "react";

class ContactAvatar extends Component {
  render() {
    const {url} = this.props;
    return (
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${url})`
        }}
      />
    );
  }
}

export default ContactAvatar;
