import s from "./ContactList.module.css";
import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/app/contact-operations";
import { getVisibleContacts } from "../../redux/app/contact-selector";
import { useEffect } from "react";

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
