import React, { Component } from "react";
import ListContacts from "./ListContacts";
import SearchField from "./SearchField";
import Pagination from "./Pagination";
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
      ],
      query: ""
    };
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({
        contacts
      });
    });
  }

  removeContact = id => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(contact => contact.id !== id)
    }));
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const { contacts, query } = this.state,
      filteredContacts =
        query === ""
          ? contacts
          : contacts.filter(
              contact =>
                contact.name.toLowerCase().includes(query.toLowerCase()) ||
                contact.handle.toLowerCase().includes(query.toLowerCase())
            ),
      numFilteredContacts = filteredContacts.length,
      numContacts = contacts.length;
    return (
      <div className="list-contacts">
        <SearchField query={query} updateQuery={this.updateQuery} />
        {numFilteredContacts !== numContacts && (
          <Pagination
            filteredContacts={numFilteredContacts}
            contacts={numContacts}
            clearQuery={this.clearQuery}
          />
        )}
        <ListContacts
          contacts={filteredContacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
