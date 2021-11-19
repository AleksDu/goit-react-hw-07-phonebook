import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contact-actions";

axios.get("https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts");

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get(
      "https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts"
    );
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post(
      "https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts",
      contact
    );
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(
      `https://6197697eaf46280017e7e5de.mockapi.io/api/v1/contacts/${id}`
    );
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const contactsOperation = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperation;
