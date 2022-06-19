import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContact,
  changeFilter,
} = actions;

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
//const items = (state = [], { type, payload }) => {
//  switch (type) {
//    case types.ADD:
//      return [...state, payload];
//    case types.DELETE:
//      return state.filter(({ id }) => id !== payload);
//    default:
//      return state;
//  }
//};

//const filter = (state = "", { type, payload }) => {
//  switch (type) {
//    case types.CHANGE_FILTER:
//      return payload;
//    default:
//      return state;
// }
//};
