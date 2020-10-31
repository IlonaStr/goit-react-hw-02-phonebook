import React from 'react';
import PropTypes from 'prop-types';
import contactsListStyles from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, removeContact }) => {
    const filterContacts = () => {
        const filteredArray = contacts.filter(({ name }) => 
        name.toLowerCase().includes(filter.toLowerCase()),
        );
        return filteredArray;
    }
    return (
        <>
        <ul className={contactsListStyles['contacts-list']}>
            {(filter ? filterContacts() : contacts).map((contact) => (
                <li key={contact.id} className={contactsListStyles['contacts-list__item']}>
                {contact.name}: {contact.number}{' '}
                <button className={contactsListStyles['delete-button']}
                id={contact.id}
                onClick={removeContact}>
                    Delete
                </button>
                </li>
            ))}
            </ul>
        </>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    filter: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
};

export default ContactsList;