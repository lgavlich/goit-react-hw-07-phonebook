import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction("contacts/DelContact");
const changeFilter = createAction("filter/change");

//export const DelContact = (id) => ({
//  type: types.DELETE,
//  payload: id,
//});

//const changeFilter = (value) => ({});
export default {
  addContact,
  deleteContact,
  changeFilter,
};
