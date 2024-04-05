import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import { fetchContacts, addContact, deleteContact } from './redux/contactsOps';
import { useEffect } from 'react';
import { changeFilter, selectFilteredContacts } from './redux/filtersSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = useSelector(state => selectFilteredContacts(state)); 

  const handleSearch = value => {
    dispatch(changeFilter(value));
  };

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