import React from "react";
import { ReactComponent as DeleteIcon } from "../../icons/remove.svg";

import s from "./ContactItem.module.scss";

// Принимает один контакт и метод для удаления контакта
const ContactItem = ({ contactName, contactNumber, onClickDeleteContact }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{contactName}</span>
      <a href={`tel:${contactNumber}`} className={s.number}>
        {contactNumber}
      </a>

      <button onClick={onClickDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </button>
    </li>
  );
};

export default ContactItem;
