import React, { Component } from "react";
import ListContacts from "./ListContacts";
import SearchField from "./SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    const contacts = [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg"
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ];
    this.state = {
      contacts: contacts,
      filteredContacts: contacts,
      query: ""
    };
  }

  removeContact = id => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(contact => contact.id !== id),
      filteredContacts: currentState.filteredContacts.filter(
        contact => contact.id !== id
      )
    }));
  };

  updateQuery = query => {
    const newQuery = query;
    this.setState(currentState => ({
      filteredContacts: currentState.contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(newQuery.toLowerCase()) ||
          contact.handle.toLowerCase().includes(newQuery.toLowerCase())
      ),
      query: newQuery
    }));
  };

  render() {
    const filteredContacts = this.state.filteredContacts,
      query = this.state.query;
    return (
      <div className="list-contacts">
        <SearchField query={query} updateQuery={this.updateQuery} />
        <ListContacts
          contacts={filteredContacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
