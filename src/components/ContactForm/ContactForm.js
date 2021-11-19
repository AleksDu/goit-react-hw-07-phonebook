import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/app/contact-selector";
import contactsOperations from "../../redux/app/contact-operations";
import shortid from "shortid";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const contactNameId = shortid.generate();
  const contactNumberId = shortid.generate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert(`Put name, please`);
      return;
    }

    if (number === "") {
      alert(`Put number, please`);
    }

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts!🙄`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={contactNameId}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="input to you name"
          className={s.input}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={contactNameId}
        />
      </label>
      <label className={s.label} htmlFor={contactNumberId}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="input to you phone number"
          className={s.input}
          value={number}
          onChange={handleChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          id={contactNumberId}
        />
      </label>
      <div className={s.button__wrapper}>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}
