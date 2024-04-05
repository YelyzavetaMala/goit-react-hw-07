import { useSelector } from 'react-redux';
import Contact from './Contact';
import { useDispatch } from 'react-redux';
import { deleteContact, selectFilteredContacts } from '../redux/contactsSlice'; 

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name); 
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = selectFilteredContacts(contacts, filter);
  
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;