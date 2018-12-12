import React, { Component } from "react";
import PropTypes from "prop-types";
import noProfile from "./images/noprofile.jpg";

class ContactAvatar extends Component {
  static propTypes = {
    url: PropTypes.string
  };

  render() {
    const { url } = this.props;
    const avatar = url ? (
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${url})`
        }}
      />
    ) : (
      <img className="contact-avatar" src={noProfile} alt={"No profile"} />
    );

    return avatar;
  }
}

export default ContactAvatar;
