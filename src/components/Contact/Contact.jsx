import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>👤 {name}</p>
      <p className={css.contactText}>📞 {number}</p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
