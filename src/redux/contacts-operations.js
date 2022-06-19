import axios from "axios";
import actions from "./contacts-actions";

axios.defaults.baseURL = "https://61b8a21338f69a0017ce5c8d.mockapi.io";
const addContact = (data) => (dispatch) => {
  const contacts = { name: data.name, number: data.number };
  dispatch(actions.addContactRequest);
  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

const deleteContact = (id = (dispatch) => {});

export default addContact;
