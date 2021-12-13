import Container from "./components/Container/Container";
import Input from "./components/ContactList/ContactList";
import PhonebookList from "./components/PhonebookList/PhonebookList";
import Filter from "./components/Filter/Filter";
//import useLocalStorage from "./hooks/localStorage";
//import { useState } from "react";
//import Filter from "./components/Filter/Filter";
//import { v4 as uuidv4 } from "uuid";

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Input />
      <Filter />
      <PhonebookList title="Contacts" />
    </Container>
  );
}
//const deleteList = (listId) => {
//  setContacts((state) => state.filter((contact) => contact.id !== listId));
//};

//const changeFilter = (event) => {
//  setFilter(event.currentTarget.value);
//};

//const getVisibleContacts = () => {
//  const normalizedFilter = filter.toLowerCase();

//  return contacts.filter((contact) =>
//    contact.name.toLowerCase().includes(normalizedFilter)
//  );
//};
