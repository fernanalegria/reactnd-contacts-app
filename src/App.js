import React, { Component } from "react";
import ListContacts from "./ListContacts";
import SearchField from "./SearchField";
import Pagination from "./Pagination";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./create/CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
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
    ContactsAPI.remove(id).then(removedContact => {
      this.setState(currentState => ({
        contacts: currentState.contacts.filter(
          contact => contact.id !== removedContact.id
        )
      }));
    });
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  createContact = (contact, history) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(currentState => ({
        contacts: [...currentState.contacts, contact]
      }), () => {
        history.push('/');
      });
    });
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
      <div>
        <Route
          exact
          path="/"
          render={() => (
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
          )}
        />
        <Route path="/create" render={({history}) => (
          <CreateContact onCreateContact={contact => {
            this.createContact(contact, history);
          }}/>
        )} />
      </div>
    );
  }
}

export default App;
