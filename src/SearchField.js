import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  // Props are not mandatory since SearchField could be reused somewhere else as a non-controlled component
  static propTypes = {
    value: PropTypes.string,
    updateQuery: PropTypes.func
  };

  render() {
    const { query, updateQuery } = this.props;
    return (
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={event => updateQuery(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchField;
