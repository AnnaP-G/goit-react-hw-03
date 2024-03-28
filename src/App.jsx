import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/contacts.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringiFiedContacts = localStorage.getItem("contacts");
    if (!stringiFiedContacts) return Contact;

    const parsedContacts = JSON.parse(stringiFiedContacts);
    return parsedContacts;
  });

  const [filterContact, setFilterContact] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const valueFormData = {
      ...formData,
      id: nanoid(),
    };

    // setContacts([...contacts, valueFormData]);
    setContacts((prevContacts) => [...prevContacts, valueFormData]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (event) => {
    setFilterContact(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase()) ||
      contact.number.includes(filterContact)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filterContact} onChange={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
