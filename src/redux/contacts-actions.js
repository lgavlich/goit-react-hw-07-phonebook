import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addContactRequest");
const addContactSuccess = createAction("contact/addContactSuccess");
const addContactError = createAction("contact/addContactError");

const deleteContactRequest = createAction("contact/deleteContactRequest");
const deleteContactSuccess = createAction("contact/deleteContactSuccess");
const deleteContactError = createAction("contact/deleteContactError");

const changeFilterRequest = createAction("contact/changeFilterRequest");
const changeFilterSuccess = createAction("contact/changeFilterRequest");
const changeFilterError = createAction("contact/changeFilterError");

//const deleteContact = createAction("contacts/DelContact");
//const changeFilter = createAction("filter/change");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilterRequest,
  changeFilterSuccess,
  changeFilterError,
};

//const addContact = createAction("contacts/addContact", (data) => ({
//  payload: {
//    id: uuidv4(),
//    name: data.name,
//    number: data.number,
//  },
//}));

//export const DelContact = (id) => ({
//  type: types.DELETE,
//  payload: id,
//});

//const changeFilter = (value) => ({});
