import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';
import initialContacts from './contacts.json';
import { useEffect } from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  useEffect(() => {
    initialContacts.forEach(contact => dispatch(addContact({ ...contact, id: Date.now() }))); 
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact({ ...newContact, id: Date.now() }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleSearch = value => {
    dispatch(changeFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;

