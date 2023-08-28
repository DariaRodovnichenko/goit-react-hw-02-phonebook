export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button type="button" name="deleteBtn" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
