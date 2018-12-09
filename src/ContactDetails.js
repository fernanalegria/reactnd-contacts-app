import React, { Component } from 'react';

class ContactDetails extends Component {
    render() {
        const {name, handle} = this.props;
        return (
            <div className="contact-details">
            <p>{name}</p>
            <p>{`@${handle}`}</p>
          </div>
        );
    }
}

export default ContactDetails;