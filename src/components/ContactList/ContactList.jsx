import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => 
    <div className={s.container}>
        <ul className={s.list}>
            {contacts.map(({id, name, number}) => (
            <li key={id} className={s.item}>
                <p className={s.text}>{name}:
                    <span className={s.number}>{number}</span>
                </p>
                <button type="button" className={s.button} onClick={() => onDeleteContact(id)}>delete</button> 
            </li>
            ))}
        </ul>
    </div>


ContactList.propTypes ={
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
      ),
    onDeleteContact: PropTypes.func,
}

export default ContactList;