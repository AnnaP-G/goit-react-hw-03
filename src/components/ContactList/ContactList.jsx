import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {Array.isArray(contacts) &&
        contacts.map(({ name, number, id }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
