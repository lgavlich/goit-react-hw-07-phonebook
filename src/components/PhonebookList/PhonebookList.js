import React from "react";
import PhonebookItem from "../PhonebookItem/PhonebookItem";
//import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import deleteContact from "../../redux/contacts-actions";
import { getVisibleContacts } from "../../redux/contacts-selector";

const PhonebookList = ({ title }) => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteList = (id) => dispatch(deleteContact.deleteContact(id));
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <PhonebookItem
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
    </div>
  );
};

//PhonebookList.propTypes = {
//  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//  title: PropTypes.string.isRequired,
//  onDeleteList: PropTypes.func.isRequired,
//};

export default PhonebookList;

//const getVisibleContacts = (allContacts, filter) => {
//  const normalizedFilter = filter.toLowerCase();

//  return allContacts.filter(({ contact }) =>
//    contact.name.toLowerCase().includes(normalizedFilter)
//  );
//};

//const mapStateToProps = (state) => {
//  const { filter, items } = state.contacts;
//  const visibleContacts = getVisibleContacts(items, filter);

//  return {
//    contacts: visibleContacts,
//  };
//};

//const mapStateToProps = ({ contacts: { items, filter } }) => ({
//  contacts: getVisibleContacts(items, filter),
//});

//const mapDispatchToProps = (dispatch) => ({
//  onDeleteList: (id) => dispatch(actions.DelContact(id)),
//});

//export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
