const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };

    onAddContact(formData);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Number</span>
        <input type="text" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
