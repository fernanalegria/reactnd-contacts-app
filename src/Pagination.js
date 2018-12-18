import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  static propTypes = {
    filteredContacts: PropTypes.number.isRequired,
    contacts: PropTypes.number.isRequired,
    clearQuery: PropTypes.func.isRequired
  };
  render() {
    const { filteredContacts, contacts, clearQuery } = this.props;
    return (
      <div className="showing-contacts">
        <span>
          Now showing {filteredContacts} of {contacts}
        </span>
        <button onClick={() => clearQuery()}>Show all</button>
      </div>
    );
  }
}

export default Pagination;
