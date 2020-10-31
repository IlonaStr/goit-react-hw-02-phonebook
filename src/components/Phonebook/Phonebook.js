import React, { Component } from 'react';
import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

class Phonebook extends Component {
    state = {
        contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };
    inputHandler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value,
        })
    }
    addContacts = (contact) => {
        this.setState({contacts: [...this.state.contacts, contact]})
    };
    removeContact = (e) => {
        const { contacts } = this.state;
        this.setState({
            contacts: contacts.filter((contact) => contact.id !== e.target.id),
        })
    }
    render() {
        const { filter, contacts } = this.state;
        return (
            <>
            <h1>Phonebook</h1>
            <Form addContact={this.addContacts} contacts={contacts} />
            <h2>Contacts</h2>
            {contacts.length >= 2 && (
                <Filter filter={filter} inputHandler={this.inputHandler} />
            )}
            <ContactsList
            contacts={contacts}
            filter={filter}
            removeContact={this.removeContact}
            />
            </>
        )
    }

}

export default Phonebook;