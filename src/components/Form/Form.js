import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formingStyles from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formInitialState = {
    name: '',
    number: '',
};
const Form = ({ addContact, contacts }) => {
    const [form, setForm] = useState(formInitialState);
    const inputHandler = ({ target: { value, name } }) => {
        setForm({ ...form, [name]: value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const { name, number } = form;
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        if(contacts.length) {
            validator(contact);
        } else {
            setForm(formInitialState);
            addContact(contact);
        }
    }
    const validator = (newContact) => {
        if(newContact.name.length < 4) {
            toast.warn('Name should have at least 4 symbols')
            return;
        }
        const result = contacts.find(({ name }) => name === newContact.name);
        if(result) {
            toast.warn(`${result.name} is already in contacts`);
            return;
        }
        setForm(formInitialState);
        addContact(newContact);
    };
    const { name, number } = form;
    return (
        <>
        <ToastContainer />
        <form className={formingStyles['contact-form']}
        autoComplete='off'
        onSubmit={submitHandler}>
            <label className={formingStyles['form__label']} htmlFor='name'>Name</label>
            <input className={formingStyles['form__input']}
            type='text'
            name='name'
            value={name}
            placeholder='name'
            onChange={inputHandler}
            />
            <label className={formingStyles['form__label']} htmlFor='number'>Number</label>
            <input className={formingStyles['form__input']}
            type='text'
            name='number'
            value={number}
            placeholder='number'
            onChange={inputHandler}
            />
            <input className={formingStyles['form__button']} type='submit' value={'Add contact'}
            />
        </form>
        </>
    )
};
Form.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}
export default Form;