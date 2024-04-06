import { useSelector } from 'react-redux';
import Contact from './Contact';
import { useDispatch } from 'react-redux';
import { deleteContact, selectFilteredContacts } from '../redux/contactsSlice'; 

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts );

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  
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