import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="tel" value={number} onChange={e => setNumber(e.target.value)} placeholder="Number" />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;